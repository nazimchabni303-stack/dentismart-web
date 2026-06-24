import {
  HeartPulse,
  Sparkles,
  Syringe,
  ScanFace,
  Crown,
  ShieldPlus,
  Scissors,
  ScanLine,
  Baby,
  Microscope,
} from 'lucide-react';
import type { ReactNode } from 'react';

export interface ServiceData {
  slug: string;
  title: string;
  icon: ReactNode;
  features: string[];
  color: string;
  bgLight: string;
  bgDark: string;
  textColor: string;
  heroImage: string;
  description: string;
  longDescription: string;
  details: {
    title: string;
    text: string;
  }[];
  benefits: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: 'generaux',
    title: 'Soins Généraux',
    icon: <HeartPulse className="w-7 h-7" />,
    features: ['Traitement des caries'],
    color: 'from-sky-500 to-sky-400',
    bgLight: 'bg-sky-50',
    bgDark: 'dark:bg-sky-500/10',
    textColor: 'text-sky-600 dark:text-sky-300',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80',
    description: 'Des soins fondamentaux pour une santé bucco-dentaire optimale.',
    longDescription: 'Les soins généraux constituent la base d\'une bonne santé bucco-dentaire. Chez Dentismart, nous proposons des examens de contrôle et des traitements de caries utilisant les dernières techniques de dentisterie conservatrice. Notre objectif : préserver vos dents naturelles le plus longtemps possible.',
    details: [
      {
        title: 'Traitement des caries',
        text: 'Détection précoce et traitement des caries avec des matériaux composites de dernière génération, esthétiques et durables, pour des restaurations invisibles.',
      },
    ],
    benefits: [
      'Prévention des maladies dentaires',
      'Détection précoce des problèmes',
      'Matériaux composites haute qualité',
      'Suivi personnalisé régulier',
    ],
  },
  {
    slug: 'esthetique',
    title: 'Esthétique Dentaire',
    icon: <Sparkles className="w-7 h-7" />,
    features: ['Blanchiment (fläsh.)', 'Facettes'],
    color: 'from-violet-500 to-purple-400',
    bgLight: 'bg-violet-50',
    bgDark: 'dark:bg-violet-500/10',
    textColor: 'text-violet-600 dark:text-violet-300',
    heroImage: '/soins/esthetique.jpg',
    description: 'Sublimez votre sourire avec nos soins esthétiques de pointe.',
    longDescription: 'La dentisterie esthétique vous permet d\'obtenir le sourire dont vous avez toujours rêvé. Grâce à la technologie de blanchiment fläsh et aux facettes en céramique sur-mesure, nous transformons votre sourire en alliant beauté naturelle et résultats durables.',
    details: [
      {
        title: 'Blanchiment fläsh.',
        text: 'Notre technologie exclusive de blanchiment professionnel permet d\'éclaircir vos dents jusqu\'à 8 teintes en une seule séance de 45 à 60 minutes, sans sensibilité ni douleur.',
      },
      {
        title: 'Facettes dentaires',
        text: 'Des facettes en céramique ultra-fines, sculptées sur-mesure pour corriger forme, couleur et alignement. Un résultat naturel et un sourire harmonieux qui dure des années.',
      },
    ],
    benefits: [
      'Résultats visibles immédiatement',
      'Techniques non invasives',
      'Matériaux premium longue durée',
      'Sourire naturel et harmonieux',
    ],
  },
  {
    slug: 'implants',
    title: 'Implants Dentaires',
    icon: <Syringe className="w-7 h-7" />,
    features: ['Implant unitaire', 'Reconstruction complète'],
    color: 'from-cyan-500 to-teal-400',
    bgLight: 'bg-cyan-50',
    bgDark: 'dark:bg-cyan-500/10',
    textColor: 'text-cyan-600 dark:text-cyan-300',
    heroImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&q=80',
    description: 'Retrouvez une dentition complète et fonctionnelle avec nos implants.',
    longDescription: 'L\'implantologie est la solution la plus avancée pour remplacer une ou plusieurs dents manquantes. Nos implants en titane biocompatible s\'intègrent parfaitement à votre os et offrent une stabilité et un confort identiques à vos dents naturelles.',
    details: [
      {
        title: 'Implant unitaire',
        text: 'Remplacement d\'une seule dent manquante par un implant en titane surmonté d\'une couronne en céramique. Une solution fixe, esthétique et durable qui préserve les dents adjacentes.',
      },
      {
        title: 'Reconstruction complète',
        text: 'Pour les patients édentés ou avec de multiples dents manquantes, nous proposons des solutions de reconstruction complète sur implants (All-on-4, bridge complet) pour retrouver une dentition fixe et fonctionnelle.',
      },
    ],
    benefits: [
      'Solution permanente et durable',
      'Confort identique aux dents naturelles',
      'Préservation de l\'os de la mâchoire',
      'Chirurgie guidée par ordinateur',
    ],
  },
  {
    slug: 'orthodontie',
    title: 'Orthodontie',
    icon: <ScanFace className="w-7 h-7" />,
    features: ['Appareil dentaire', 'Aligneur invisible'],
    color: 'from-blue-500 to-indigo-400',
    bgLight: 'bg-blue-50',
    bgDark: 'dark:bg-blue-500/10',
    textColor: 'text-blue-600 dark:text-blue-300',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80',
    description: 'Alignez vos dents avec des solutions modernes et discrètes.',
    longDescription: 'L\'orthodontie moderne offre des solutions pour tous les âges. Que vous préfériez un appareil dentaire classique ou des aligneurs invisibles, nous créons un plan de traitement personnalisé avec des résultats prévisibles en 3D.',
    details: [
      {
        title: 'Appareil dentaire',
        text: 'Des appareils orthodontiques fixes ou amovibles pour corriger l\'alignement des dents et la mâchoire. Solutions adaptées aux enfants, adolescents et adultes.',
      },
      {
        title: 'Aligneur invisible',
        text: 'Des gouttières transparentes sur-mesure, confortables et quasi invisibles. Changées toutes les deux semaines, elles déplacent vos dents progressivement vers leur position idéale.',
      },
    ],
    benefits: [
      'Traitement discret et confortable',
      'Simulation 3D du résultat final',
      'Solutions pour tous les âges',
      'Suivi régulier personnalisé',
    ],
  },
  {
    slug: 'protheses',
    title: 'Prothèses Dentaires',
    icon: <Crown className="w-7 h-7" />,
    features: ['Couronnes et bridges', 'Dentiers fixes ou amovibles'],
    color: 'from-amber-500 to-orange-400',
    bgLight: 'bg-amber-50',
    bgDark: 'dark:bg-amber-500/10',
    textColor: 'text-amber-600 dark:text-amber-300',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80',
    description: 'Des prothèses sur-mesure pour restaurer votre sourire.',
    longDescription: 'Nos prothèses dentaires sont fabriquées avec les matériaux les plus avancés pour un résultat esthétique et fonctionnel. Chaque prothèse est conçue sur-mesure pour s\'adapter parfaitement à votre bouche et vous redonner confort et confiance.',
    details: [
      {
        title: 'Couronnes et bridges',
        text: 'Des couronnes en céramique ou zircone qui recouvrent et protègent les dents endommagées. Les bridges remplacent une ou plusieurs dents manquantes en s\'appuyant sur les dents adjacentes.',
      },
      {
        title: 'Dentiers fixes ou amovibles',
        text: 'Des prothèses complètes ou partielles, amovibles ou fixées sur implants, pour retrouver une mastication efficace et un sourire naturel au quotidien.',
      },
    ],
    benefits: [
      'Matériaux céramique haute qualité',
      'Fabrication sur-mesure précise',
      'Résultat esthétique naturel',
      'Confort et fonctionnalité restaurés',
    ],
  },
  {
    slug: 'gencives',
    title: 'Soins des Gencives',
    icon: <ShieldPlus className="w-7 h-7" />,
    features: ['Détartrage profond', 'Traitement parodontal'],
    color: 'from-rose-500 to-pink-400',
    bgLight: 'bg-rose-50',
    bgDark: 'dark:bg-rose-500/10',
    textColor: 'text-rose-600 dark:text-rose-300',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80',
    description: 'Protégez vos gencives, le fondement de votre santé dentaire.',
    longDescription: 'Des gencives saines sont essentielles pour conserver vos dents. Nous proposons des traitements parodontaux avancés pour traiter les inflammations, les saignements et prévenir le déchaussement dentaire.',
    details: [
      {
        title: 'Détartrage profond',
        text: 'Un assainissement en profondeur sous les gencives (surfaçage radiculaire) pour éliminer le tartre et les bactéries responsables des maladies parodontales.',
      },
      {
        title: 'Traitement parodontal',
        text: 'Un protocole complet de traitement de la parodontite : diagnostic, curetage, maintenance. Nous traitons l\'inflammation et stabilisons la santé de vos gencives sur le long terme.',
      },
    ],
    benefits: [
      'Prévention du déchaussement',
      'Traitement des saignements',
      'Maintenance parodontale régulière',
      'Techniques douces et précises',
    ],
  },
  {
    slug: 'chirurgie',
    title: 'Chirurgie & Extractions',
    icon: <Scissors className="w-7 h-7" />,
    features: ['Extraction de dents', 'Dents de sagesse'],
    color: 'from-red-500 to-rose-400',
    bgLight: 'bg-red-50',
    bgDark: 'dark:bg-red-500/10',
    textColor: 'text-red-600 dark:text-red-300',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
    description: 'Des interventions chirurgicales sûres et maîtrisées.',
    longDescription: 'Notre équipe réalise les extractions dentaires et les interventions chirurgicales avec la plus grande précision. Grâce à nos équipements de pointe et nos protocoles d\'anesthésie avancés, nous garantissons des interventions confortables et sécurisées.',
    details: [
      {
        title: 'Extraction de dents',
        text: 'Extraction simple ou complexe de dents endommagées, infectées ou impossibles à restaurer. Réalisée sous anesthésie locale avec un suivi post-opératoire attentif.',
      },
      {
        title: 'Dents de sagesse',
        text: 'Extraction des dents de sagesse incluses ou semi-incluses pour prévenir les infections, les douleurs et le déplacement des autres dents. Intervention planifiée grâce à l\'imagerie 3D.',
      },
    ],
    benefits: [
      'Anesthésie locale efficace',
      'Protocoles de confort avancés',
      'Suivi post-opératoire complet',
      'Planification par imagerie 3D',
    ],
  },
  {
    slug: 'imagerie',
    title: 'Imagerie & Diagnostic',
    icon: <ScanLine className="w-7 h-7" />,
    features: ['Radiologie panoramique', 'Scanner 3D'],
    color: 'from-emerald-500 to-green-400',
    bgLight: 'bg-emerald-50',
    bgDark: 'dark:bg-emerald-500/10',
    textColor: 'text-emerald-600 dark:text-emerald-300',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80',
    description: 'Un diagnostic précis grâce à l\'imagerie de dernière génération.',
    longDescription: 'Un diagnostic précis est la clé d\'un traitement réussi. Notre cabinet est équipé des technologies d\'imagerie les plus avancées pour visualiser en détail votre anatomie dentaire et planifier chaque intervention avec exactitude.',
    details: [
      {
        title: 'Radiologie panoramique',
        text: 'Une vue complète de toute votre mâchoire en une seule image. Essentielle pour le diagnostic global, la détection des pathologies et la planification des traitements.',
      },
      {
        title: 'Scanner 3D (CBCT)',
        text: 'Un scanner cone beam haute résolution qui crée une reconstitution 3D de vos structures dentaires et osseuses. Indispensable pour la planification d\'implants et la chirurgie guidée.',
      },
    ],
    benefits: [
      'Diagnostic ultra-précis',
      'Faible dose de radiation',
      'Résultats instantanés',
      'Planification chirurgicale guidée',
    ],
  },
  {
    slug: 'enfants',
    title: 'Soins pour Enfants',
    icon: <Baby className="w-7 h-7" />,
    features: ['Soins pédiatriques', 'Prévention'],
    color: 'from-pink-500 to-fuchsia-400',
    bgLight: 'bg-pink-50',
    bgDark: 'dark:bg-pink-500/10',
    textColor: 'text-pink-600 dark:text-pink-300',
    heroImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80',
    description: 'Des soins adaptés aux plus petits, dans un cadre bienveillant.',
    longDescription: 'Les enfants méritent une attention particulière. Chez Dentismart, nous créons un environnement chaleureux et rassurant pour que chaque visite soit une expérience positive. Nos soins pédiatriques sont adaptés à chaque âge pour accompagner la croissance dentaire de votre enfant.',
    details: [
      {
        title: 'Soins pédiatriques',
        text: 'Traitements adaptés aux dents de lait et aux dents permanentes en croissance. Nos dentistes spécialisés utilisent des approches douces et ludiques pour mettre les enfants en confiance.',
      },
      {
        title: 'Prévention',
        text: 'Application de fluor, scellement des sillons, éducation à l\'hygiène bucco-dentaire. Nous accompagnons parents et enfants pour établir de bonnes habitudes dès le plus jeune âge.',
      },
    ],
    benefits: [
      'Approche douce et bienveillante',
      'Environnement adapté aux enfants',
      'Prévention dès le plus jeune âge',
      'Suivi de la croissance dentaire',
    ],
  },
  {
    slug: 'technologie',
    title: 'Technologie',
    icon: <Microscope className="w-7 h-7" />,
    features: ['Microscope opératoire', 'Scanner intra-oral 3Shape'],
    color: 'from-slate-600 to-slate-400',
    bgLight: 'bg-slate-100',
    bgDark: 'dark:bg-slate-500/10',
    textColor: 'text-slate-600 dark:text-slate-300',
    heroImage: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1200&q=80',
    description: 'Les technologies les plus avancées au service de votre santé.',
    longDescription: 'Dentismart investit continuellement dans les technologies de pointe pour vous offrir des soins d\'une précision et d\'une qualité exceptionnelles. Notre équipement de dernière génération permet des diagnostics plus précis et des traitements plus efficaces.',
    details: [
      {
        title: 'Microscope opératoire',
        text: 'Un grossissement jusqu\'à x25 pour une vision ultra-détaillée lors des traitements endodontiques et des restaurations complexes. Une précision impossible à atteindre à l\'œil nu.',
      },
      {
        title: 'Scanner intra-oral 3Shape',
        text: 'Une empreinte numérique 3D de vos dents en quelques secondes, sans la pâte traditionnelle inconfortable. Résultat : des prothèses et aligneurs d\'une précision millimétrique.',
      },
    ],
    benefits: [
      'Précision microscopique',
      'Empreintes numériques confortables',
      'Résultats plus rapides',
      'Traitements mini-invasifs',
    ],
  },
];
