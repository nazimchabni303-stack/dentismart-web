import {
  HeartPulse,
  Sparkles,
  ScanFace,
  Crown,
  ShieldPlus,
  Scissors,
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

const XRayIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <defs>
      <mask id="xray-mask">
        <rect x="0" y="0" width="24" height="24" fill="white" />
        {/* Spine */}
        <rect x="11.25" y="6" width="1.5" height="10" rx="0.2" fill="black" />
        {/* Ribs */}
        <rect x="7.5" y="8" width="9" height="1.5" rx="0.75" fill="black" />
        <rect x="6.5" y="10.5" width="11" height="1.5" rx="0.75" fill="black" />
        <rect x="7.5" y="13" width="9" height="1.5" rx="0.75" fill="black" />
        {/* Pelvis */}
        <rect x="8.5" y="15.5" width="7" height="1.5" rx="0.75" fill="black" />
        <circle cx="8.5" cy="16.5" r="1.75" fill="black" />
        <circle cx="15.5" cy="16.5" r="1.75" fill="black" />
        <circle cx="8.5" cy="16.5" r="0.75" fill="white" />
        <circle cx="15.5" cy="16.5" r="0.75" fill="white" />
      </mask>
    </defs>
    {/* Top and Bottom Bars */}
    <rect x="0" y="2" width="24" height="2.5" rx="0.5" />
    <rect x="0" y="19.5" width="24" height="2.5" rx="0.5" />
    {/* Main Screen */}
    <rect x="2.5" y="5.5" width="19" height="13" mask="url(#xray-mask)" />
  </svg>
);

const ToothIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 3c-2.2 0-4 1.8-4 4 0 3.5 2.5 5 2.5 8 0 2.8 1.5 5 3.5 5s2-2 3-4c1 2 1 4 3 4 2 0 3.5-2.2 3.5-5 0-3 2.5-4.5 2.5-8 0-2.2-1.8-4-4-4-2 0-3.5 1.5-3.5 1.5S11 3 9 3z" />
  </svg>
);

const ImplantIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Crown */}
    <path d="M7 8c0-3 2-5 5-5s5 2 5 5c0 1.5-1.5 3-2.5 4.5C13.5 14 13 15 13 15h-2s-.5-1-1.5-2.5C8.5 11 7 9.5 7 8z" />
    {/* Implant screw */}
    <path d="M10 15h4" />
    <path d="M11 15v6l1 1 1-1v-6" />
    {/* Threads */}
    <path d="M10 17h4" />
    <path d="M10 19h4" />
    <path d="M10 21h4" />
  </svg>
);

export const servicesData: ServiceData[] = [
  // EXCLUSIVE SERVICES (GOLD THEMED)
  {
    slug: 'imagerie',
    title: 'Imagerie & Diagnostic',
    icon: <XRayIcon className="w-7 h-7" />,
    features: ['Radiologie panoramique', 'Scanner 3D'],
    color: 'from-yellow-400 to-amber-500',
    bgLight: 'bg-amber-50 border border-amber-200',
    bgDark: 'dark:bg-amber-500/10 dark:border-amber-500/30',
    textColor: 'text-amber-700 dark:text-amber-400',
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
    slug: 'technologie',
    title: 'Technologie',
    icon: <Microscope className="w-7 h-7" />,
    features: ['Flux Numérique (Digital Workflow)', 'Microscope opératoire', 'Scanner intra-oral 3Shape'],
    color: 'from-yellow-400 to-amber-500',
    bgLight: 'bg-amber-50 border border-amber-200',
    bgDark: 'dark:bg-amber-500/10 dark:border-amber-500/30',
    textColor: 'text-amber-700 dark:text-amber-400',
    heroImage: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1200&q=80',
    description: 'Les technologies les plus avancées au service de votre santé.',
    longDescription: 'Dentismart investit continuellement dans les technologies de pointe pour vous offrir des soins d\'une précision et d\'une qualité exceptionnelles. Notre équipement de dernière génération permet des diagnostics plus précis et des traitements plus efficaces.',
    details: [
      {
        title: 'Flux Numérique (Digital Workflow)',
        text: 'L\'intégration complète des technologies numériques, de l\'empreinte à la pose de la prothèse. Un processus fluide, sans erreur et entièrement personnalisé, réduisant les délais et optimisant les résultats cliniques.',
      },
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
      'Processus entièrement digitalisé',
      'Traitements mini-invasifs',
    ],
  },
  {
    slug: 'laboratoire',
    title: 'Laboratoire de Prothèses',
    icon: <ToothIcon className="w-7 h-7" />,
    features: ['Conception sur-mesure', 'Matériaux de haute qualité'],
    color: 'from-yellow-400 to-amber-500',
    bgLight: 'bg-amber-50 border border-amber-200',
    bgDark: 'dark:bg-amber-500/10 dark:border-amber-500/30',
    textColor: 'text-amber-700 dark:text-amber-400',
    heroImage: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&q=80',
    description: 'Fabrication interne de vos prothèses pour une précision et une rapidité optimales.',
    longDescription: 'Notre clinique intègre son propre laboratoire de prothèses dentaires. Cette étroite collaboration entre nos chirurgiens-dentistes et nos prothésistes nous permet de concevoir, fabriquer et ajuster vos prothèses (couronnes, bridges, facettes) avec une précision exceptionnelle, une esthétique parfaite et dans des délais réduits.',
    details: [
      {
        title: 'Conception sur-mesure',
        text: 'Chaque prothèse est modélisée numériquement (CAO) puis usinée (FAO) avec une précision millimétrique pour s\'adapter parfaitement à votre anatomie, garantissant un confort absolu et une esthétique naturelle.',
      },
      {
        title: 'Matériaux de haute qualité',
        text: 'Nous sélectionnons rigoureusement nos matériaux (zircone, céramique e.max) pour vous offrir des restaurations durables, biocompatibles et parfaitement intégrées à votre sourire.',
      },
    ],
    benefits: [
      'Fabrication rapide en interne',
      'Ajustements esthétiques sur place',
      'Contrôle qualité rigoureux',
      'Communication directe dentiste-prothésiste',
    ],
  },

  // OTHER SERVICES
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
    features: ['Blanchiment (fläsh.)', 'Facettes en céramique E.max'],
    color: 'from-violet-500 to-purple-400',
    bgLight: 'bg-violet-50',
    bgDark: 'dark:bg-violet-500/10',
    textColor: 'text-violet-600 dark:text-violet-300',
    heroImage: '/soins/esthetique.jpg',
    description: 'Sublimez votre sourire avec nos soins esthétiques de pointe.',
    longDescription: 'La dentisterie esthétique vous permet d\'obtenir le sourire dont vous avez toujours rêvé. Grâce à la technologie de blanchiment fläsh et aux facettes en céramique E.max sur-mesure, nous transformons votre sourire en alliant beauté naturelle et résultats durables.',
    details: [
      {
        title: 'Blanchiment fläsh.',
        text: 'Notre technologie exclusive de blanchiment professionnel permet d\'éclaircir vos dents jusqu\'à 8 teintes en une seule séance de 45 à 60 minutes, sans sensibilité ni douleur.',
      },
      {
        title: 'Facettes en céramique E.max',
        text: 'Des facettes en céramique E.max ultra-fines, reconnues pour leur translucidité et leur résistance exceptionnelles. Sculptées sur-mesure pour corriger forme, couleur et alignement. Un résultat naturel et un sourire harmonieux qui dure des années.',
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
    icon: <ImplantIcon className="w-7 h-7" />,
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
    color: 'from-orange-500 to-red-400',
    bgLight: 'bg-orange-50',
    bgDark: 'dark:bg-orange-500/10',
    textColor: 'text-orange-600 dark:text-orange-300',
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
];
