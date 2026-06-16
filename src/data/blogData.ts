export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[]; // Paragraphes de l'article
  date: string;
  image: string;
  category: string;
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    slug: "blanchiment-technologie-flash",
    title: "Le blanchiment dentaire fait-il mal ? Tout savoir sur la technologie fläsh.",
    excerpt: "Contrairement aux idées reçues, le blanchiment peut être 100% sans douleur. Découvrez comment notre lampe LED bleue haute intensité protège votre sensibilité dentaire.",
    date: "14 Juin 2026",
    image: "/clinic-photos/photo_13.jpeg",
    category: "Blanchiment",
    content: [
      "Le blanchiment dentaire est souvent associé à une idée de sensibilité ou de douleur. Pourtant, grâce aux avancées technologiques récentes, il est désormais possible de retrouver un sourire éclatant dans un confort absolu. Chez DentiSmart, nous utilisons la technologie allemande **fläsh**, reconnue mondialement pour son efficacité et sa douceur.",
      "**Comment ça fonctionne ?** La technologie fläsh repose sur un gel de peroxyde d'hydrogène spécialement formulé, qui est activé par une lampe LED bleue à haute intensité. Contrairement aux anciennes lampes UV qui chauffaient la dent et causaient des douleurs, la lumière froide de la lampe fläsh cible uniquement les pigments responsables de la décoloration de l'émail, sans altérer la structure dentaire ni surchauffer le nerf.",
      "**Pour qui ?** Ce traitement est idéal pour toute personne souhaitant éclaircir ses dents tâchées par le café, le thé, le tabac ou simplement le vieillissement naturel. Lors d'une première consultation, nous vérifions toujours l'absence de caries ou de problèmes gingivaux pour garantir un blanchiment en toute sécurité.",
      "**Les résultats :** En une seule séance au cabinet (environ 45 à 60 minutes réparties en plusieurs cycles d'application), vous pouvez gagner jusqu'à 8 teintes. Le résultat est immédiat et, avec une bonne hygiène bucco-dentaire, peut durer plusieurs années. Finies les douleurs post-opératoires, vous repartez avec un sourire radieux et sans sensibilité !"
    ]
  },
  {
    id: 2,
    slug: "gagner-8-teintes-en-une-seance",
    title: "Est-il vraiment possible de gagner 8 teintes en une seule séance ?",
    excerpt: "Oui ! En 45 à 60 minutes au cabinet, notre gel breveté à base de peroxyde activé par la lumière élimine les pigments profonds pour un sourire éclatant immédiat.",
    date: "02 Mai 2026",
    image: "/clinic-photos/photo_14.jpeg",
    category: "Esthétique",
    content: [
      "L'une des questions les plus fréquentes que nous posent nos patients est de savoir s'il est réellement possible d'obtenir un sourire éclatant en un temps record. La réponse est un grand OUI, grâce aux protocoles de blanchiment professionnels réalisés au cabinet.",
      "Gagner 8 teintes peut sembler incroyable, mais c'est le résultat moyen que nous observons chez DentiSmart. L'émail de nos dents est poreux, et au fil des années, il absorbe les colorants de notre alimentation (épices, café, vin) et de nos habitudes (tabac). Le brossage, même rigoureux, ne peut pas déloger ces pigments incrustés en profondeur.",
      "C'est là qu'intervient le blanchiment professionnel. Nous appliquons un gel éclaircissant très concentré (uniquement manipulable par un chirurgien-dentiste) qui pénètre dans l'émail. La lampe de photopolymérisation vient accélérer la réaction chimique, permettant de 'casser' les molécules colorantes en quelques minutes seulement.",
      "Le grand avantage du blanchiment au fauteuil est la rapidité du résultat. Pas besoin de porter des gouttières pendant des semaines chez vous. Vous entrez au cabinet avec un sourire terni, et vous en ressortez une heure plus tard transformé. De plus, nos professionnels s'assurent que vos gencives sont parfaitement protégées par une digue liquide pendant toute la durée du soin."
    ]
  },
  {
    id: 3,
    slug: "frequence-detartrage-prevention",
    title: "À quelle fréquence devez-vous faire un détartrage ?",
    excerpt: "La prévention est la clé d'une bonne santé bucco-dentaire. Comprenez pourquoi une visite régulière nous permet de détecter et traiter les problèmes avant qu'ils ne s'aggravent.",
    date: "18 Avril 2026",
    image: "/clinic-photos/photo_15.jpeg",
    category: "Prévention",
    content: [
      "Le brossage des dents est essentiel, mais il ne suffit pas à éliminer 100% de la plaque dentaire. Avec le temps, la plaque qui n'a pas été éliminée se minéralise sous l'effet de la salive et se transforme en tartre. Ce tartre est dur, rugueux, et ne peut pas être enlevé par une simple brosse à dents.",
      "**Pourquoi enlever le tartre ?** Le tartre n'est pas qu'un problème esthétique (les fameuses tâches jaunes ou marrons à la base des dents). C'est surtout un refuge idéal pour les bactéries. Ces bactéries provoquent l'inflammation des gencives (gingivite) qui peuvent saigner lors du brossage. Si rien n'est fait, cela peut évoluer vers une parodontite, entraînant un déchaussement des dents.",
      "**Quelle est la fréquence idéale ?** En règle générale, il est recommandé de réaliser un détartrage tous les 6 à 12 mois. Cependant, cette fréquence dépend de plusieurs facteurs : la qualité de votre brossage, la composition de votre salive (qui peut favoriser la formation rapide de tartre), ou encore la consommation de thé et de tabac.",
      "Chez DentiSmart, notre détartrage se fait souvent à l'aide d'ultrasons, un procédé rapide et généralement indolore. Nous complétons souvent ce soin par un polissage (aéropolisseur) qui permet d'enlever les tâches superficielles et de rendre la surface de la dent parfaitement lisse. Une visite de contrôle annuelle, accompagnée d'un détartrage, est votre meilleure garantie pour garder vos dents à vie !"
    ]
  }
];
