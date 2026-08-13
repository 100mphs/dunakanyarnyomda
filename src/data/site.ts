import iconPrint from '../assets/icons_print.svg';
import iconFlyer from '../assets/icons_flyer.svg';
import iconBusinessCard from '../assets/icons_business_card.svg';
import iconGraphicDesign from '../assets/icons_graphic_design.svg';
import iconWebDesign from '../assets/icons_web_design.svg';
import iconCopy from '../assets/icons_copy.svg';
import iconSpiral from '../assets/icons_spiral.svg';
import iconLaminate from '../assets/icons_laminate.svg';
import iconPosterDisplay from '../assets/icons_poster_display.svg';
import iconScan from '../assets/icons_scan.svg';

export const services = [
  {
    title: 'Nyomtatás',
    description: 'Digitális és nagyformátumú nyomtatás gyors kivitelezéssel.',
    icon: iconPrint,
  },
  {
    title: 'Fénymásolás',
    description: 'Gyors fekete-fehér és színes másolás több méretben.',
    icon: iconCopy,
  },
  {
    title: 'Szkennelés',
    description: 'Dokumentumok és képek digitalizálása rövid határidővel.',
    icon: iconScan,
  },
  {
    title: 'Spirálozás',
    description: 'Víztiszta előlap, fehér hátlap és rendezett dokumentumkötés.',
    icon: iconSpiral,
  },
  {
    title: 'Laminálás',
    description: 'Dokumentumok, kártyák és anyagok tartós fóliázása.',
    icon: iconLaminate,
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
    title: 'Poszterek',
    description: 'Molinók, táblák, roll-upok és egyedi látványanyagok.',
    icon: iconPosterDisplay,
  },
  {
    title: 'Grafikai tervezés',
    description: 'Logó, arculat, kiadvány és nyomdai előkészítés egy helyen.',
    icon: iconGraphicDesign,
  },
  {
    title: 'Weboldaltervezés és -fejlesztés',
    description: 'Modern, mobilbarát üzleti weboldalak az ötlettől a megvalósításig.',
    icon: iconWebDesign,
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
