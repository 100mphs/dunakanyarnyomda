import type { APIRoute } from 'astro';

export const prerender = false;

const allowedExtensions = new Set(['pdf', 'jpg', 'jpeg', 'png', 'doc', 'docx']);
const maxFileSize = 20 * 1024 * 1024;
const recipient = 'dunakanyarnyomda@gmail.com';

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });

const clean = (value: FormDataEntryValue | null) => (typeof value === 'string' ? value.trim() : '');

const fileToBase64 = async (file: File) => {
  const buffer = Buffer.from(await file.arrayBuffer());
  return buffer.toString('base64');
};

export const POST: APIRoute = async ({ request }) => {
  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const fromEmail = import.meta.env.QUOTE_FROM_EMAIL ?? 'Dunakanyar Nyomda <onboarding@resend.dev>';

  if (!resendApiKey) {
    return json(
      {
        message: 'Az ajánlatkérő email küldéséhez hiányzik a RESEND_API_KEY környezeti változó.',
      },
      500,
    );
  }

  const formData = await request.formData();
  const name = clean(formData.get('name'));
  const phone = clean(formData.get('phone'));
  const email = clean(formData.get('email'));
  const service = clean(formData.get('service')) || 'Egyéb';
  const message = clean(formData.get('message'));
  const privacyAccepted = formData.get('privacy') === 'on';

  if (!name || !email || !message || !privacyAccepted) {
    return json({ message: 'Kérlek töltsd ki a kötelező mezőket.' }, 400);
  }

  const files = formData
    .getAll('files')
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  for (const file of files) {
    const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
    if (!allowedExtensions.has(extension)) {
      return json({ message: 'Csak PDF, JPG, JPEG, PNG, DOC vagy DOCX fájl csatolható.' }, 400);
    }
    if (file.size > maxFileSize) {
      return json({ message: 'Egy fájl mérete maximum 20 MB lehet.' }, 400);
    }
  }

  const timestamp = new Intl.DateTimeFormat('hu-HU', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Europe/Budapest',
  }).format(new Date());

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: await fileToBase64(file),
    })),
  );

  const bodyText = [
    'Név:',
    name,
    '',
    'Telefon:',
    phone || '-',
    '',
    'E-mail:',
    email,
    '',
    'Szolgáltatás:',
    service,
    '',
    'Üzenet:',
    message,
    '',
    'Beküldés időpontja:',
    timestamp,
    '',
    'Attached files:',
    files.length ? files.map((file) => file.name).join(', ') : '-',
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [recipient],
      reply_to: email,
      subject: 'Új ajánlatkérés a weboldalról',
      text: bodyText,
      attachments,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Resend quote email failed:', error);
    return json({ message: 'Nem sikerült elküldeni az ajánlatkérést. Kérlek próbáld újra később.' }, 502);
  }

  return json({ ok: true });
};
