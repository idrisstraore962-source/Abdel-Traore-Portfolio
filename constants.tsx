
import React from 'react';
import { 
  Figma, 
  Layout, 
  Smartphone, 
  Database, 
  Search, 
  Layers, 
  Zap, 
  Palette,
  Eye,
  Edit3,
  CheckCircle,
  BarChart,
  Globe,
  SmartphoneIcon
} from 'lucide-react';
import { Project, Service, SkillGroup, Testimonial, TimelineItem, MethodologyStep } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'oif-observatoire',
    title: 'Observatoire de la Langue Française (OIF)',
    shortDescription: 'Conception du nouveau design web et mobile de l\'application de l\'OIF.',
    category: ['UX', 'UI', 'Mobile', 'Web'],
    imageUrl: 'https://ik.imagekit.io/ut8smutws/portfolio/oif4.png', // Illustration captivante avec dégradés similaires à la capture
    context: 'L\'Organisation Internationale de la Francophonie (OIF) souhaitait créer un portail unifié pour l\'Observatoire de la langue française, permettant aux chercheurs et au public d\'accéder aux données et indicateurs linguistiques mondiaux.',
    problem: 'Nécessité d\'une interface moderne, sécurisée et accessible, intégrant un système de connexion professionnel et une navigation fluide entre les données, les documents et les informations institutionnelles.',
    process: [
      'Analyse des besoins utilisateurs (chercheurs, diplomates, public)',
      'Design d\'interface épuré avec dégradés "glassmorphism"',
      'Création d\'un système d\'authentification sécurisé et intuitif',
      'Architecture d\'information complexe simplifiée en 4 piliers majeurs',
      'Intégration des logos partenaires (AUF, ODSEF, OPALE)'
    ],
    wireframes: ['https://picsum.photos/seed/oif-wire1/400/300', 'https://picsum.photos/seed/oif-wire2/400/300'],
    finalUI: [
      'https://ik.imagekit.io/ut8smutws/portfolio/oif1.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/oif2.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/oif3.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/oif5.png',
    ],
    results: 'Mise en place d\'un portail professionnel utilisé mondialement, facilitant la synchronisation des préférences utilisateurs et l\'accès aux données.'
  },
  {
    id: '1',
    title: 'Pubbix Technologies',
    shortDescription: 'Optimisation et implémentation du nouveau site web',
    category: ['UX', 'UI', 'Mobile'],
    imageUrl: 'https://ik.imagekit.io/ut8smutws/portfolio/pub1.png',
    context: 'L\'objectif pour Pubbix était de moderniser son site web pour mieux refléter son expertise en développement de solutions digitales, tout en améliorant l\'expérience utilisateur et en renforçant la confiance des visiteurs.',
    problem: 'L\'interface actuelle était trop complexe et les informations clés avaient tendance à être ignorées.',
    process: [
      'Audit UX & Interviews utilisateurs',
      'adaptation du design pour les differents autres supports ',
      'Architecture d\'information',
      'Wireframing Low-Fi'
    ],
    wireframes: ['https://picsum.photos/seed/nova1/400/300'],
    finalUI: [ 'https://ik.imagekit.io/ut8smutws/portfolio/pub2.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/pub3.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/pub55.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/pub77.png',
    ],
    results: 'Augmentation du traffic sur le nouveau site.'
  },
  {
    id: '2',
    title: 'Paani School',
    shortDescription: 'Paani School est une plateforme éducative en ligne dédiée à l\'apprentissage afin de permettre un accès équitable à l\'éducation de qualité à toute la population.',
    category: ['Web', 'UI'],
    imageUrl: 'https://ik.imagekit.io/ut8smutws/portfolio/paani1.png',
    context: 'Paani School vise à démocratiser l\'éducation en offrant une plateforme intuitive et accessible, permettant aux utilisateurs d\'accéder à des ressources éducatives de qualité, de suivre leur progression et de collaborer avec d\'autres apprenants.',
    problem: 'Les utilisateurs en particulier les élèves avaient du mal à acceder à des ressources éducatives de qualité.',
    process: [
      'Recherche UX',
      'Design System modulaire',
      'Tests d\'utilisabilité'
    ],
    wireframes: ['https://picsum.photos/seed/eco1/400/300'],
    finalUI: ['https://ik.imagekit.io/ut8smutws/portfolio/paani2.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/paani3.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/paani55.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/paani77.png',

    ],
    results: 'Accès amélioré aux ressources éducatives.'
  },
  {
    id: '4',
    title: 'Logo Design',
    shortDescription: 'Série de  quelques series de logos illustratifs.',
    category: ['Graphic design'],
    imageUrl:  'https://ik.imagekit.io/ut8smutws/portfolio/logo0.png',
    process: [
    
    ],
    wireframes: ['https://picsum.photos/seed/graphic-wire1/400/300'],
    finalUI: [
     'https://ik.imagekit.io/ut8smutws/portfolio/logo1.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/logo2.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/logo3.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/logo4.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/logo5.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/logo10.png',

    ],
    results: ''
  },
  {
    id: '7',
    title: 'Graphic Design',
    shortDescription: 'Illustration d\'une collection de designs graphiques.',
    category: ['Graphic design'],
    imageUrl: 'https://ik.imagekit.io/ut8smutws/portfolio/graph0.png',
    context: 'Création d\'une collection de designs graphiques ',
    problem: '',
    process: [
    ],
    wireframes: ['https://picsum.photos/seed/graphic-wire1/400/300'],
    finalUI: [
     'https://ik.imagekit.io/ut8smutws/portfolio/graph1.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/graph2.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/graph3.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/graph4.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/graph5.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/graph6.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/graph7.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/graph8.png',

    ],
    results: ''
  },
  {
    id: '6',
    title: 'Branding & Illustration',
    shortDescription: 'Collection d\'illustrations et de maquettes.',
    category: ['Graphic design'],
    imageUrl: 'https://ik.imagekit.io/ut8smutws/portfolio/brand0.png',
    context: 'Création d\'une série d\'illustrations minimalistes pour promouvoir la protection de l\'environnement.',
    problem: 'Communiquer des messages complexes de manière simple et impactante visuellement.',
    process: [
      'Recherche iconographique sur les thèmes écologiques',
      'Développement d\'un style minimaliste cohérent',
      'Création de variations chromatiques',
      'Optimisation pour différents formats média'
    ],
    wireframes: ['https://picsum.photos/seed/graphic-wire3/400/300'],
    finalUI: [
     'https://ik.imagekit.io/ut8smutws/portfolio/brand1.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/brand2.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/brand3.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/brand4.png',
       'https://ik.imagekit.io/ut8smutws/portfolio/brand5.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/brand6.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/brand7.png',
      'https://ik.imagekit.io/ut8smutws/portfolio/brand8.png',

    ],
    results: ''
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'UX Research',
    description: 'Comprendre vos utilisateurs par des interviews, audits et tests pour bâtir sur des bases solides.',
    icon: <Search className="w-6 h-6 text-accent-500" />
  },
  {
    id: '2',
    title: 'UX/UI Design',
    description: 'Conception d\'interfaces esthétiques et fonctionnelles centrées sur l\'expérience utilisateur.',
    icon: <Palette className="w-6 h-6 text-accent-500" />
  },
  {
    id: '3',
    title: 'Web Design',
    description: 'Création de sites web modernes, responsive et optimisés pour la conversion.',
    icon: <Layout className="w-6 h-6 text-accent-500" />
  },
  {
    id: '4',
    title: 'Design System',
    description: 'Création de bibliothèques de composants réutilisables pour assurer la cohérence de votre marque.',
    icon: <Layers className="w-6 h-6 text-accent-500" />
  },
  {
    id: '5',
    title: 'Prototypage Figma',
    description: 'Animations et prototypes interactifs pour tester vos idées avant le développement.',
    icon: <Figma className="w-6 h-6 text-accent-500" />
  },
  {
    id: '6',
    title: 'Optimisation UX',
    description: 'Analyse de vos tunnels de conversion et amélioration continue des parcours.',
    icon: <Zap className="w-6 h-6 text-accent-500" />
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'UX Skills',
    skills: [
      { name: 'User Research', level: 90 },
      { name: 'Wireframing', level: 95 },
      { name: 'Information Architecture', level: 85 },
      { name: 'User Testing', level: 80 }
    ]
  },
  {
    category: 'UI Skills',
    skills: [
      { name: 'Visual Design', level: 92 },
      { name: 'Typography', level: 88 },
      { name: 'Color Theory', level: 90 },
      { name: 'Interaction Design', level: 85 }
    ]
  },
  {
    category: 'Outils',
    skills: [
      { name: 'Figma', level: 98 },
      { name: 'Adobe XD', level: 85 },
      { name: 'Suite Adobe Creative Cloud', level: 90 },
      { name: 'Power BI', level: 75 },
      
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Directeur Technique',
    role: 'Product Owner',
    company: 'YULCOM',
    content: 'Une approche UX incroyable. Abdel a su créer un design system qui nous fait gagner un temps précieux au quotidien et améliorer nos parcours.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=YT&backgroundColor=0ea5e9'
  },
  {
    id: '2',
    name: 'Julien Durand',
    role: 'Directeur Associé',
    company: 'BBC & Partners',
    content: 'Rigoureux et créatif, Abdel maîtrise aussi bien la technique que le design. Son support technique et sa vision UX ont été cruciaux.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=JD&backgroundColor=38bdf8'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: 'Septembre 2025 - Actuellement',
    title: 'UX Designer & Web Designer',
    company: 'YULCOM TECHNOLOGIE',
    description: 'Conception d’expériences centrées utilisateur et interfaces modernes pour différents clients. Refonte des interfaces, création d’un design system (-40% temps dev), conception responsive et tests utilisateurs pour corriger des blocages majeurs.'
  },
  {
    year: 'Janvier 2024 - Avril 2025',
    title: 'Développeur d\'applications',
    company: 'BBC & Partners',
    description: 'Développement logiciel web/mobile et support technique. Administration et support de l\'outil DimoMaint OM (paramétrage, interfaçage, résolution d\'incidents). Reporting via Power BI et suivi des demandes d\'amélioration.'
  },
  {
    year: 'Août 2023 - Décembre 2023',
    title: 'Stage en UX Design',
    company: 'PUBBIX TECHNOLOGIES',
    description: 'Réalisation et conception des interfaces utilisateurs et maquettes pour les différentes applications web et mobiles.'
  },
  {
    year: 'Octobre 2022 - Juillet 2023',
    title: 'Designer web',
    company: 'Lerroyprod',
    description: 'Chargé de la création des maquettes et prototypes pour les applications web et mobiles afin de permettre une expérience utilisateur optimale.'
  },
  {
    year: 'Août 2021 - Août 2022',
    title: 'Développeur web & Responsable IT',
    company: 'S.U.F.A.C SARL',
    description: 'Conception du parc informatique et maintenance des différents systèmes informatiques de l\'entreprise.'
  }
];

export const METHODOLOGY: MethodologyStep[] = [
  {
    title: 'Découverte',
    description: 'Interviews utilisateurs, audit de l\'existant et immersion business.',
    icon: <Eye className="w-5 h-5" />
  },
  {
    title: 'Stratégie',
    description: 'Architecture de l\'information et définition des personas.',
    icon: <BarChart className="w-5 h-5" />
  },
  {
    title: 'Conception',
    description: 'Wireframing, UI Design et prototypage interactif sur Figma.',
    icon: <Edit3 className="w-5 h-5" />
  },
  {
    title: 'Validation',
    description: 'Tests d\'utilisabilité et livraison des spécifications de développement.',
    icon: <CheckCircle className="w-5 h-5" />
  }
];
