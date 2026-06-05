import iconPrint from '../assets/icons_print.svg';
import iconFlyer from '../assets/icons_flyer.svg';
import iconBusinessCard from '../assets/icons_business_card.svg';
import iconGraphicDesign from '../assets/icons_graphic_design.svg';
import iconPoster from '../assets/icons_poster.svg';

export const services = [
  {
    title: 'Nyomtatás',
    description: 'Digitális és nagyformátumú nyomtatás gyors kivitelezéssel.',
    icon: iconPrint,
  },
  {
    title: 'Szórólapok',
    description: 'Plakátok, prospektusok és szóróanyagok többféle méretben.',
    icon: iconFlyer,
  },
  {
    title: 'Névjegykártyák',
    description: 'Prémium papírok, igényes felületek és rövid határidők.',
    icon: iconBusinessCard,
  },
  {
    title: 'Grafikai tervezés',
    description: 'Logó, arculat, kiadvány és nyomdai előkészítés egy helyen.',
    icon: iconGraphicDesign,
  },
  {
    title: 'Poszterek',
    description: 'Molinók, táblák, roll-upok és egyedi látványanyagok.',
    icon: iconPoster,
  },
];

export const highlights = [
  {
    title: 'Gyors határidő',
    description: 'Rövid átfutási idővel, tervezhetően és pontos kommunikációval dolgozunk.',
    accent: 'var(--color-pink)',
  },
  {
    title: 'Prémium minőség',
    description: 'Modern géppark, kiváló alapanyagok és ellenőrzött nyomdai folyamatok.',
    accent: 'var(--color-yellow)',
  },
  {
    title: 'Megbízható partner',
    description: 'Egyedi igényekre szabott ajánlatokkal és hosszú távú szemlélettel segítünk.',
    accent: 'var(--color-blue)',
  },
];

export const quickLinks = [
  { label: 'Főoldal', href: '#fooldal' },
  { label: 'Szolgáltatások', href: '#szolgaltatasok' },
  { label: 'Árlista', href: '#arlista' },
  { label: 'Rólunk', href: '#rolunk' },
  { label: 'Kapcsolat', href: '#kapcsolat' },
];
