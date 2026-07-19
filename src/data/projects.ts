export interface Project {
  slug: string;
  order: number;
  featured: boolean;
  conceptDemo?: boolean;
  category: "ai" | "security" | "web" | "automation" | "data" | "integrations";
  relatedService?: "web" | "ai" | "automation" | "acquisition" | "security";
  tag: { en: string; fr: string };
  title: { en: string; fr: string };
  subtitle: { en: string; fr: string };
  description: { en: string; fr: string };
  challenge: { en: string; fr: string };
  solution: { en: string; fr: string };
  results: { metric: string; label: { en: string; fr: string } }[];
  techStack: string[];
  features?: { en: string[]; fr: string[] };
  clientName?: { en: string; fr: string };
  logo: string;
  image: string;
  gallery?: string[];
  video?: string;
  link?: string;
  color: string;
}

export const projects: Project[] = [
  {
    slug: "ot-shield",
    order: 2,
    featured: true,
    category: "security",
    relatedService: "security",
    tag: { en: "In-house", fr: "Projet créé" },
    title: { en: "OT_Shield", fr: "OT_Shield" },
    subtitle: { en: "OT/ICS Intrusion Detection & Prevention System", fr: "Système de détection & prévention d'intrusion OT/ICS" },
    description: {
      en: "Industrial security system — Intrusion Detection & Prevention (IDPS) for OT/ICS environments (OPC UA, Suricata, Elastic).",
      fr: "Sécurité industrielle — Système de détection & prévention d'intrusion (IDPS) pour environnements OT/ICS (OPC UA, Suricata, Elastic)."
    },
    challenge: {
      en: "OT/ICS environments (factories, energy grids, water treatment) use legacy protocols with zero built-in security. Traditional IT security tools don't work on industrial networks.",
      fr: "Les environnements OT/ICS (usines, réseaux énergétiques, stations de traitement) utilisent des protocoles hérités sans sécurité intégrée. Les outils IT classiques ne fonctionnent pas sur les réseaux industriels."
    },
    solution: {
      en: "OT_Shield is a custom IDPS built for industrial environments — monitors OPC UA traffic, detects anomalies with Suricata rules, and provides real-time alerting through Elastic dashboards.",
      fr: "OT_Shield est un IDPS sur-mesure pour environnements industriels — surveille le trafic OPC UA, détecte les anomalies avec des règles Suricata, et fournit des alertes en temps réel via des dashboards Elastic."
    },
    results: [
      { metric: "IDPS", label: { en: "Intrusion Detection & Prevention", fr: "Détection & Prévention d'intrusion" } },
      { metric: "OPC UA", label: { en: "Industrial protocol support", fr: "Support protocole industriel" } },
      { metric: "Real-time", label: { en: "Real-time monitoring & alerting", fr: "Surveillance & alertes temps réel" } }
    ],
    techStack: ["OPC UA", "Suricata", "Elastic", "Python", "OT/ICS Security"],
    features: {
      en: ["OPC UA deep packet inspection", "Suricata rule engine", "Elastic dashboards & alerting", "Real-time anomaly detection", "Industrial protocol support"],
      fr: ["Inspection approfondie paquets OPC UA", "Moteur de règles Suricata", "Dashboards Elastic & alertes", "Détection d'anomalies temps réel", "Support protocole industriel"]
    },
    logo: "/img/projects/ot-shield/logo.svg",
    image: "/img/projects/ot-shield/logo.svg",
    color: "var(--color-ember)"
  },
  {
    slug: "nexgsec-ai",
    order: 3,
    featured: true,
    category: "security",
    relatedService: "security",
    tag: { en: "In-house", fr: "Projet créé" },
    title: { en: "NexGSec AI", fr: "NexGSec AI" },
    subtitle: { en: "Offensive Security Platform with Guardrails", fr: "Plateforme d'offensive security avec garde-fous" },
    description: {
      en: "Run high-signal web, network, OS, and OSINT assessments through one command deck. AI-powered ReAct loop for targeted, explainable, and repeatable scans.",
      fr: "Exécutez des évaluations web, réseau, OS et OSINT de haute qualité depuis un seul tableau de bord. Boucle ReAct IA pour des scans ciblés, explicables et reproductibles."
    },
    challenge: {
      en: "Security assessments require multiple disconnected tools, manual coordination, and expert interpretation. Results are inconsistent and hard to reproduce.",
      fr: "Les évaluations de sécurité nécessitent plusieurs outils déconnectés, une coordination manuelle et une interprétation experte. Les résultats sont incohérents et difficiles à reproduire."
    },
    solution: {
      en: "NexGSec AI unifies Nmap, SQLMap, Metasploit, Nikto, Gobuster, and Hydra into a single AI-orchestrated platform with a Reason → Act → Observe loop. Outputs live findings + PDF reports.",
      fr: "NexGSec AI unifie Nmap, SQLMap, Metasploit, Nikto, Gobuster et Hydra dans une plateforme unique orchestrée par IA avec une boucle Reason → Act → Observe. Sorties : findings live + rapports PDF."
    },
    results: [
      { metric: "6+", label: { en: "Integrated security tools", fr: "Outils de sécurité intégrés" } },
      { metric: "AI", label: { en: "ReAct reasoning loop", fr: "Boucle de raisonnement ReAct" } },
      { metric: "PDF", label: { en: "Automated audit reports", fr: "Rapports d'audit automatisés" } }
    ],
    techStack: ["Python", "Nmap", "SQLMap", "Metasploit", "Docker", "AI/LLM"],
    features: {
      en: ["Unified command deck", "AI ReAct agent loop", "Multi-tool orchestration", "Live findings + PDF reports", "Dockerized deployment"],
      fr: ["Interface de commande unifiée", "Boucle d'agent ReAct IA", "Orchestration multi-outils", "Résultats live + rapports PDF", "Déploiement Dockerisé"]
    },
    logo: "/img/projects/nexgsec-ai/logo.png",
    image: "/img/projects/nexgsec-ai/hero.webp",
    gallery: ["/img/projects/nexgsec-ai/auth.webp", "/img/projects/nexgsec-ai/dashboard1.webp"],
    color: "var(--color-ember)"
  },
  {
    slug: "autonomous-attacker",
    order: 4,
    featured: false,
    category: "security",
    relatedService: "security",
    tag: { en: "In-house", fr: "Projet créé" },
    title: { en: "Autonomous Attacker", fr: "Autonomous Attacker" },
    subtitle: { en: "Wi-Fi Penetration Test Suite v3.0", fr: "Suite de pentest Wi-Fi v3.0" },
    description: {
      en: "Desktop Python application for autonomous Wi-Fi penetration testing. AI-powered agent that scans, attacks, and reports — with full dependency management.",
      fr: "Application desktop Python pour le pentest Wi-Fi autonome. Agent IA qui scanne, attaque et génère des rapports — avec gestion complète des dépendances."
    },
    challenge: {
      en: "Wi-Fi penetration testing requires specialized tools (aircrack-ng, hashcat), manual configuration, and deep Linux knowledge. Accessible only to expert pentesters.",
      fr: "Le pentest Wi-Fi nécessite des outils spécialisés (aircrack-ng, hashcat), une configuration manuelle et des connaissances Linux avancées. Accessible uniquement aux experts pentesters."
    },
    solution: {
      en: "A unified GUI application that automates the entire Wi-Fi pentest workflow — from interface detection to autonomous attack execution, with AI-assisted decision making and comprehensive result reporting.",
      fr: "Une application GUI unifiée qui automatise tout le workflow de pentest Wi-Fi — de la détection d'interface à l'exécution d'attaques autonomes, avec aide à la décision par IA et rapports de résultats complets."
    },
    results: [
      { metric: "v3.0", label: { en: "Latest release version", fr: "Dernière version" } },
      { metric: "AI", label: { en: "AI-assisted attack decisions", fr: "Décisions d'attaque assistées par IA" } },
      { metric: "Full", label: { en: "End-to-end automation", fr: "Automatisation de bout en bout" } }
    ],
    techStack: ["Python", "Wi-Fi Security", "AI Agent", "GUI", "Pentesting"],
    features: {
      en: ["One-click Wi-Fi pentesting", "AI-assisted attack decisions", "Automated dependency management", "Comprehensive PDF reporting", "Interface detection & monitoring"],
      fr: ["Pentest Wi-Fi en un clic", "Décisions d'attaque assistées par IA", "Gestion automatisée des dépendances", "Rapports PDF complets", "Détection et surveillance d'interface"]
    },
    logo: "/img/projects/autonomous-attacker/logo.png",
    image: "/img/projects/autonomous-attacker/hero.webp",
    gallery: ["/img/projects/autonomous-attacker/preview.png"],
    color: "var(--color-ember)"
  },
  {
    slug: "fiftyfive-digital",
    order: 5,
    featured: false,
    category: "web",
    relatedService: "web",
    tag: { en: "Client Project", fr: "Projet client" },
    title: { en: "Fifty Five Digital", fr: "Fifty Five Digital" },
    subtitle: { en: "Digital Agency Website", fr: "Site d'agence digitale" },
    description: {
      en: "Full website for a digital agency specializing in lead generation. Dark/light mode, animated hero, service showcase, testimonials, and conversion-optimized CTA flows.",
      fr: "Site complet pour une agence digitale spécialisée en génération de leads. Mode sombre/clair, hero animé, showcase de services, témoignages et flows CTA optimisés pour la conversion."
    },
    challenge: {
      en: "Build a high-converting agency website with dual theme support, smooth animations, and a complete service showcase that establishes credibility and drives lead capture.",
      fr: "Construire un site d'agence haute conversion avec double thème, animations fluides et showcase complet de services qui établit la crédibilité et génère des leads."
    },
    solution: {
      en: "Modern single-page application with dark/light mode toggle, particle-animated hero, service cards with hover effects, social proof section, testimonials, FAQ accordion, and integrated contact form with Calendly booking.",
      fr: "Application single-page moderne avec basculement sombre/clair, hero à particules, cartes de services avec effets hover, section preuve sociale, témoignages, accordion FAQ et formulaire de contact intégré avec réservation Calendly."
    },
    results: [
      { metric: "50+", label: { en: "Client logos displayed", fr: "Logos clients affichés" } },
      { metric: "7", label: { en: "Service categories", fr: "Catégories de services" } },
      { metric: "Dual", label: { en: "Dark & light mode", fr: "Mode sombre &clair" } }
    ],
    techStack: ["React", "Tailwind CSS", "Animation", "Responsive Design"],
    clientName: { en: "Fifty Five Digital", fr: "Fifty Five Digital" },
    features: {
      en: ["Dark & light mode", "Particle-animated hero", "7 service categories showcase", "Client testimonials section", "FAQ accordion", "Calendly booking integration"],
      fr: ["Mode sombre & clair", "Hero animé par particules", "7 catégories de services", "Section témoignages clients", "FAQ accordéon", "Intégration réservation Calendly"]
    },
    logo: "/img/projects/fiftyfive-digital/logo.webp",
    image: "/img/projects/fiftyfive-digital/Dark.png",
    gallery: ["/img/projects/fiftyfive-digital/lIGHT.png"],
    color: "#3B82F6"
  },
  {
    slug: "ecologix",
    order: 6,
    featured: true,
    category: "web",
    relatedService: "web",
    tag: { en: "Client Project", fr: "Projet client" },
    title: { en: "EcoLogix", fr: "EcoLogix" },
    subtitle: { en: "GreenTech IoT SaaS Platform", fr: "Plateforme SaaS GreenTech IoT" },
    description: {
      en: "Corporate website + promotional video for an IoT SaaS platform that optimizes industrial cleaning product distribution. ESG reporting, smart IoT devices, SaaS revenue model, and a full video production to showcase the solution.",
      fr: "Site corporate + vidéo promotionnelle pour une plateforme SaaS IoT qui optimise la distribution de produits de nettoyage industriel. Rapports ESG, objets connectés intelligents, modèle économique SaaS, et production vidéo complète pour présenter la solution."
    },
    challenge: {
      en: "Industrial cleaning product procurement is fragmented: 95% transport waste, single-use plastic, no traceability, and non-optimized ESG processes. Needed a digital presence plus a compelling video to explain the value proposition.",
      fr: "L'approvisionnement en produits de nettoyage industriel est fragmenté : 95% de gaspillage de transport, plastique usage unique, aucune traçabilité et processus ESG non optimisés. Besoin d'une présence digitale plus une vidéo percutante pour expliquer la proposition de valeur."
    },
    solution: {
      en: "Full SaaS platform website with IoT-connected dispensers, ESG reporting dashboard, ROI calculator — plus a professionally produced montage video showcasing the product in action. Clean B2B design with green/white palette.",
      fr: "Site de plateforme SaaS complet avec distributeurs connectés IoT, dashboard de rapports ESG, calculateur de ROI — plus une vidéo montage produite par nos soins présentant le produit en action. Design B2B épuré avec palette verte/blanche."
    },
    results: [
      { metric: "-21%", label: { en: "Cost reduction", fr: "Réduction des coûts" } },
      { metric: "-14%", label: { en: "Waste reduction", fr: "Réduction des déchets" } },
      { metric: "Video", label: { en: "Promotional video produced", fr: "Vidéo promotionnelle produite" } }
    ],
    techStack: ["React", "Tailwind CSS", "SaaS", "IoT", "ESG Reporting", "Video Production"],
    clientName: { en: "EcoLogix", fr: "EcoLogix" },
    features: {
      en: ["IoT-connected dispenser monitoring", "ESG reporting dashboard", "SaaS subscription portal", "ROI calculator tool", "B2B lead capture system", "Promotional video production"],
      fr: ["Surveillance distributeurs connectés IoT", "Dashboard de rapports ESG", "Portail d'abonnement SaaS", "Calculateur de ROI", "Système de capture leads B2B", "Production vidéo promotionnelle"]
    },
    logo: "/img/projects/ecologix/logo.png",
    image: "/img/projects/ecologix/hero.webp",
    gallery: ["/img/projects/ecologix/slide-preview.png"],
    video: "/img/projects/ecologix/montage.mp4",
    color: "#22C55E"
  },
  {
    slug: "jardin-majorelle",
    order: 7,
    featured: true,
    category: "web",
    relatedService: "web",
    tag: { en: "Client Project", fr: "Projet client" },
    title: { en: "Fondation Jardin Majorelle Prize", fr: "Prix Fondation Jardin Majorelle" },
    subtitle: { en: "Architecture Competition Website", fr: "Site de concours d'architecture" },
    description: {
      en: "Official website for a national architecture competition. Bilingual registration system, cahier des charges download, eligibility verification, and document upload workflow.",
      fr: "Site officiel d'un concours national d'architecture. Système d'inscription bilingue, téléchargement du cahier des charges, vérification d'éligibilité et workflow de téléchargement de documents."
    },
    challenge: {
      en: "Create a prestigious competition platform for a major cultural institution — with bilingual content, structured registration flow, document management, and institutional credibility.",
      fr: "Créer une plateforme de concours prestigieuse pour une grande institution culturelle — avec contenu bilingue, flux d'inscription structuré, gestion de documents et crédibilité institutionnelle."
    },
    solution: {
      en: "Elegant institutional website with teal/gold palette, 2-step registration form (identity + professional status), CNI document upload, eligibility criteria display, and downloadable cahier des charges.",
      fr: "Site institutionnel élégant avec palette teal/or, formulaire d'inscription en 2 étapes (identité + statut professionnel), upload de CNI, affichage des critères d'éligibilité et cahier des charges téléchargeable."
    },
    results: [
      { metric: "2026", label: { en: "Architecture prize year", fr: "Année du prix d'architecture" } },
      { metric: "Bilingual", label: { en: "FR / EN support", fr: "Support FR / EN" } },
      { metric: "2-Step", label: { en: "Registration workflow", fr: "Workflow d'inscription" } }
    ],
    techStack: ["Astro", "Tailwind CSS", "Form Handling", "File Upload", "i18n"],
    clientName: { en: "Fondation Jardin Majorelle", fr: "Fondation Jardin Majorelle" },
    features: {
      en: ["Bilingual registration (FR/EN)", "2-step identity verification", "CNI document upload workflow", "Eligibility criteria display", "Cahier des charges download"],
      fr: ["Inscription bilingue (FR/EN)", "Vérification d'identité en 2 étapes", "Workflow d'upload CNI", "Affichage critères d'éligibilité", "Téléchargement cahier des charges"]
    },
    logo: "/img/projects/jardin-majorelle/logo.png",
    image: "/img/projects/jardin-majorelle/hero.webp",
    color: "#14B8A6"
  },
  {
    slug: "revetpro",
    order: 8,
    featured: false,
    category: "web",
    relatedService: "web",
    tag: { en: "Client Project", fr: "Projet client" },
    title: { en: "RevetPro", fr: "RevetPro" },
    subtitle: { en: "Renovation & Interior Design Company", fr: "Entreprise de rénovation & aménagement" },
    description: {
      en: "Full corporate website for a renovation and interior design company. Service showcase, project gallery, testimonials, and lead capture with Paris-based contact.",
      fr: "Site corporate complet pour une entreprise de rénovation et aménagement intérieur. Showcase de services, galerie projets, témoignages et capture de leads avec contact basé à Paris."
    },
    challenge: {
      en: "Build a premium corporate site that showcases craftsmanship through beautiful imagery, communicates expertise across 6 service categories, and converts visitors into leads.",
      fr: "Construire un site corporate premium qui met en valeur l'artisanat à travers de belles images, communique l'expertise sur 6 catégories de services et convertit les visiteurs en leads."
    },
    solution: {
      en: "Elegant warm-toned website with full-width service sections (Aménagement, Peinture, Faux Plafond, Isolation, Menuiserie, Décoration Végétale), project gallery, client testimonials, and integrated contact form with map.",
      fr: "Site élégant aux tons chauds avec sections de services pleine largeur (Aménagement, Peinture, Faux Plafond, Isolation, Menuiserie, Décoration Végétale), galerie projets, témoignages clients et formulaire de contact intégré avec carte."
    },
    results: [
      { metric: "6", label: { en: "Service categories", fr: "Catégories de services" } },
      { metric: "15+", label: { en: "Years of experience", fr: "Années d'expérience" } },
      { metric: "200+", label: { en: "Projects completed", fr: "Projets réalisés" } }
    ],
    techStack: ["HTML/CSS", "JavaScript", "Responsive Design", "Gallery", "Forms"],
    clientName: { en: "RevetPro", fr: "RevetPro" },
    features: {
      en: ["6 service categories", "Full-width service sections", "Project gallery", "Client testimonials", "Contact form with map", "Warm premium brand design"],
      fr: ["6 catégories de services", "Sections services pleine largeur", "Galerie projets", "Témoignages clients", "Formulaire avec carte", "Design premium aux tons chauds"]
    },
    logo: "/img/projects/revetpro/logo.png",
    image: "/img/projects/revetpro/logo.png",
    color: "#F59E0B"
  },
  {
    slug: "medibot-ai",
    order: 10,
    featured: false,
    conceptDemo: true,
    category: "ai",
    relatedService: "ai",
    tag: { en: "Concept Demo", fr: "Concept Demo" },
    title: { en: "MediBot AI", fr: "MediBot AI" },
    subtitle: { en: "AI Assistant for Private Clinics", fr: "Assistant IA pour Cliniques Privées" },
    description: {
      en: "A 24/7 AI assistant that handles appointment booking, patient inquiries, and multilingual triage — directly on WhatsApp and your website.",
      fr: "Un assistant IA 24/7 qui gère la prise de RDV, les demandes patients et le triage multilingue — directement sur WhatsApp et votre site web."
    },
    challenge: {
      en: "Private clinics lose revenue from missed calls after hours. Receptionists are overwhelmed with repetitive inquiries. Patients speak different languages, and no-shows waste appointment slots. Existing solutions are either too generic or too expensive for small-to-mid-size clinics.",
      fr: "Les cliniques privées perdent des revenus à cause des appels manqués en dehors des heures d'ouverture. Les secrétaires sont débordées par les demandes répétitives. Les patients parlent différentes langues et les rendez-vous non honorés gaspillent des créneaux."
    },
    solution: {
      en: "MediBot AI is a turnkey conversational agent that integrates with WhatsApp Business and your clinic's website. It understands FR/AR/EN, retrieves information from your knowledge base (RAG), books appointments via Calendar API, sends reminders, and only escalates to a human when needed — with medical guardrails in place.",
      fr: "MediBot AI est un agent conversationnel clé en main qui s'intègre à WhatsApp Business et au site de votre clinique. Il comprend le FR/AR/EN, consulte votre base de connaissances (RAG), prend RDV via Calendar API, envoie des rappels et ne transfère à un humain qu'en cas de besoin — avec des garde-fous médicaux."
    },
    results: [
      { metric: "24/7", label: { en: "Appointment booking", fr: "Prise de rendez-vous" } },
      { metric: "FR/AR/EN", label: { en: "Multilingual support", fr: "Support multilingue" } },
      { metric: "RAG", label: { en: "Knowledge base retrieval", fr: "Recherche base de connaissances" } }
    ],
    techStack: ["LLM / RAG", "Pinecone / pgvector", "WhatsApp Business API", "n8n", "Node / Python", "Postgres", "Calendar API"],
    features: {
      en: ["24/7 automated appointment booking", "Multilingual FR/AR/EN conversation", "RAG-powered knowledge base", "Automated reminders (reduce no-shows)", "Human escalation with context", "Conversation dashboard"],
      fr: ["Prise de rendez-vous automatisée 24/7", "Conversation multilingue FR/AR/EN", "Base de connaissances via RAG", "Rappels automatiques (moins d'absences)", "Transfert humain avec contexte", "Tableau de bord des conversations"]
    },
    logo: "/Logos_Portfolio/MediBotAI.png",
    image: "/Logos_Portfolio/MediBotAI.png",
    color: "#06D6A0"
  },
  {
    slug: "estatebot-ai",
    order: 11,
    featured: false,
    conceptDemo: true,
    category: "ai",
    relatedService: "ai",
    tag: { en: "Concept Demo", fr: "Concept Demo" },
    title: { en: "EstateBot AI", fr: "EstateBot AI" },
    subtitle: { en: "AI Assistant for Real Estate Agencies", fr: "Assistant IA pour Agences Immobilières" },
    description: {
      en: "An AI agent that qualifies leads, matches properties, schedules visits, and nurtures cold leads — 24/7 on WhatsApp and your website.",
      fr: "Un agent IA qui qualifie les leads, fait correspondre les biens, planifie les visites et nourrit les leads froids — 24/7 sur WhatsApp et votre site."
    },
    challenge: {
      en: "In real estate, the first to respond wins the lead. Prospects contact agencies after hours and get no reply. Manual lead qualification is slow and inconsistent. Follow-ups fall through the cracks and cold leads never get nurtured.",
      fr: "Dans l'immobilier, le premier qui répond gagne le lead. Les prospects contactent en dehors des heures et n'ont pas de réponse. La qualification manuelle est lente et incohérente. Le suivi est négligé et les leads froids ne sont jamais nurturés."
    },
    solution: {
      en: "EstateBot AI is an intelligent assistant that qualifies prospects 24/7 (budget, zone, type, timing), matches them with properties from your catalog, sends photos and brochures, schedules visits, and transfers hot leads to your agents — while nurturing cold leads for future opportunities.",
      fr: "EstateBot AI est un assistant intelligent qui qualifie les prospects 24/7 (budget, zone, type, calendrier), leur propose des biens depuis votre catalogue, envoie photos et brochures, planifie les visites et transfère les leads chauds à vos agents — tout en nurturant les leads froids."
    },
    results: [
      { metric: "24/7", label: { en: "Lead qualification", fr: "Qualification de leads" } },
      { metric: "CRM", label: { en: "CRM integration", fr: "Intégration CRM" } },
      { metric: "Smart", label: { en: "Property matching engine", fr: "Moteur de matching" } }
    ],
    techStack: ["LLM / Agent", "WhatsApp Business API", "HubSpot / Pipedrive API", "MLS / Listings DB", "n8n", "Calendar API"],
    features: {
      en: ["24/7 lead qualification (budget, zone, type)", "Property matching from catalog", "Photo & brochure sharing", "Visit scheduling via calendar", "Hot lead transfer to agents", "Cold lead nurturing pipeline"],
      fr: ["Qualification de leads 24/7 (budget, zone, type)", "Matching de biens depuis le catalogue", "Partage de photos & brochures", "Planification de visites", "Transfert leads chauds aux agents", "Nurturing de leads froids"]
    },
    logo: "/img/projects/estatebot-ai/logo.svg",
    image: "/img/projects/estatebot-ai/hero.svg",
    color: "#118AB2"
  },
  {
    slug: "invoiceflow",
    order: 12,
    featured: false,
    conceptDemo: true,
    category: "automation",
    relatedService: "automation",
    tag: { en: "Concept Demo", fr: "Concept Demo" },
    title: { en: "InvoiceFlow", fr: "InvoiceFlow" },
    subtitle: { en: "Invoice Automation Pipeline", fr: "Pipeline d'Automatisation des Factures" },
    description: {
      en: "An automated invoice processing pipeline — capture, extract, validate, and sync invoices to your accounting software. No more manual data entry.",
      fr: "Un pipeline automatisé de traitement des factures — capturer, extraire, valider et synchroniser les factures dans votre logiciel comptable. Fini la saisie manuelle."
    },
    challenge: {
      en: "Accounts payable teams spend hours manually entering invoice data. Errors creep in, payments are delayed, and heterogeneous formats (PDF, JPG, PNG) make standardization difficult. Purchase order reconciliation is a headache.",
      fr: "Les équipes comptables passent des heures à saisir manuellement les factures. Les erreurs s'accumulent, les paiements sont retardés et les formats hétérogènes (PDF, JPG, PNG) rendent la standardisation difficile."
    },
    solution: {
      en: "InvoiceFlow is an end-to-end pipeline: invoices arrive via email, upload, or scan. OCR + LLM extraction pulls supplier, amounts, VAT, and line items. A validation step catches exceptions. The data flows into your accounting software (QuickBooks, Xero, Sage) with a full audit trail.",
      fr: "InvoiceFlow est un pipeline de bout en bout : les factures arrivent par email, upload ou scan. L'extraction OCR + LLM récupère fournisseur, montants, TVA et lignes. Une validation capture les exceptions. Les données alimentent votre compta (QuickBooks, Xero, Sage) avec piste d'audit."
    },
    results: [
      { metric: "OCR", label: { en: "Multi-format extraction", fr: "Extraction multi-format" } },
      { metric: "ERP", label: { en: "ERP/Accounting sync", fr: "Sync compta/ERP" } },
      { metric: "Audit", label: { en: "Full audit trail", fr: "Piste d'audit complète" } }
    ],
    techStack: ["Python", "Google Vision / Tesseract", "LLM extraction", "n8n / Make", "QuickBooks / Xero / Sage API", "Airtable / Postgres"],
    features: {
      en: ["Email + upload + scan capture", "OCR multi-format (PDF, JPG, PNG)", "LLM field extraction", "Validation & exception handling", "PO reconciliation", "Accounting software sync", "Automated payment reminders", "AP tracking dashboard"],
      fr: ["Capture email + upload + scan", "OCR multi-format (PDF, JPG, PNG)", "Extraction LLM des champs", "Validation & gestion exceptions", "Rapprochement bons de commande", "Sync logiciel comptable", "Relances automatiques", "Tableau de bord AP"]
    },
    logo: "/img/projects/invoiceflow/logo.svg",
    image: "/img/projects/invoiceflow/hero.svg",
    color: "#FFD166"
  },
  {
    slug: "lexpro",
    order: 13,
    featured: false,
    conceptDemo: true,
    category: "web",
    relatedService: "web",
    tag: { en: "Concept Demo", fr: "Concept Demo" },
    title: { en: "LexPro", fr: "LexPro" },
    subtitle: { en: "Premium Law Firm Website & Secure Client Portal", fr: "Site Premium & Portail Client Sécurisé pour Cabinet d'Avocats" },
    description: {
      en: "A bilingual premium website with a secure client portal — document sharing, case status, encrypted messaging, and online appointment booking.",
      fr: "Un site premium bilingue avec portail client sécurisé — partage de documents, statut du dossier, messagerie chiffrée et prise de RDV en ligne."
    },
    challenge: {
      en: "Law firms need a professional online presence that instills trust. Outdated websites, unclear contact paths, and insecure document sharing via email are common pain points. Clients expect modern portals with confidentiality guarantees.",
      fr: "Les cabinets d'avocats ont besoin d'une présence en ligne professionnelle qui inspire confiance. Sites datés, contacts flous et partage de documents par email non sécurisé sont des problèmes courants."
    },
    solution: {
      en: "LexPro is a bilingual premium website with expertise showcase, team profiles, SEO-optimized blog, online booking — plus a secure client portal with encrypted document sharing, case status tracking, and private messaging. Built for confidentiality and compliance.",
      fr: "LexPro est un site premium bilingue avec présentation des expertises, profils d'équipe, blog optimisé SEO, prise de RDV en ligne — plus un portail client sécurisé avec partage de documents chiffré, suivi du dossier et messagerie privée."
    },
    results: [
      { metric: "Bilingual", label: { en: "FR / EN website", fr: "Site FR / EN" } },
      { metric: "Secure", label: { en: "Client portal", fr: "Portail client" } },
      { metric: "SEO", label: { en: "Optimized blog", fr: "Blog optimisé SEO" } }
    ],
    techStack: ["Astro", "Tailwind CSS", "Auth (Clerk / Supabase Auth)", "Encrypted Storage", "CMS", "Calendar API"],
    features: {
      en: ["Bilingual premium website", "Practice area showcase", "Team profiles", "SEO blog engine", "Online appointment booking", "Secure encrypted document sharing", "Case status tracking", "Private messaging"],
      fr: ["Site premium bilingue", "Présentation des expertises", "Profils d'équipe", "Moteur de blog SEO", "Prise de RDV en ligne", "Partage documents chiffré", "Suivi du dossier", "Messagerie privée"]
    },
    logo: "/img/projects/lexpro/logo.svg",
    image: "/img/projects/lexpro/hero.svg",
    color: "#073B4C"
  },
  {
    slug: "pulsebi",
    order: 14,
    featured: false,
    conceptDemo: true,
    category: "data",
    relatedService: "acquisition",
    tag: { en: "Concept Demo", fr: "Concept Demo" },
    title: { en: "PulseBI", fr: "PulseBI" },
    subtitle: { en: "Real-time Commercial Dashboard", fr: "Dashboard Commercial Temps Réel" },
    description: {
      en: "A real-time business intelligence dashboard that consolidates sales, marketing, and operations data — with KPIs, forecasts, and automated alerts for decision-makers.",
      fr: "Un dashboard de business intelligence temps réel qui consolide les données ventes, marketing et opérations — avec KPIs, prévisions et alertes automatisées pour les décideurs."
    },
    challenge: {
      en: "Decision-makers rely on scattered data from CRM, e-commerce platforms, and spreadsheets. Manual reporting is slow, prone to errors, and never reflects real-time reality. Without consolidated KPIs, strategic decisions are made blind.",
      fr: "Les décideurs s'appuient sur des données éparpillées entre CRM, plateformes e-commerce et tableurs. Le reporting manuel est lent, sujet aux erreurs et ne reflète jamais la réalité en temps réel."
    },
    solution: {
      en: "PulseBI connects to your data sources (CRM, ERP, e-commerce), runs ETL pipelines, and surfaces a real-time dashboard with revenue, margin, pipeline, conversion rates, and average order value — plus time-series forecasts and threshold alerts.",
      fr: "PulseBI se connecte à vos sources de données (CRM, ERP, e-commerce), exécute des pipelines ETL et affiche un dashboard temps réel avec CA, marge, pipeline, taux de conversion et panier moyen — plus des prévisions et alertes de seuil."
    },
    results: [
      { metric: "Real-time", label: { en: "Live KPI dashboard", fr: "Dashboard KPIs temps réel" } },
      { metric: "ETL", label: { en: "Multi-source consolidation", fr: "Consolidation multi-sources" } },
      { metric: "AI", label: { en: "Time-series forecasts", fr: "Prévisions time-series" } }
    ],
    techStack: ["Power BI / Web Dashboard", "Python (forecasts)", "SQL + Data Warehouse", "Airbyte / dbt (ETL)", "DirectQuery"],
    features: {
      en: ["Multi-source ETL consolidation", "Real-time KPI dashboards", "Goal vs actual comparison", "Time-series sales forecasts", "Automated threshold alerts", "Drill-down exploration", "Export & sharing"],
      fr: ["Consolidation ETL multi-sources", "Dashboards KPIs temps réel", "Comparaison objectifs vs réel", "Prévisions time-series", "Alertes automatiques sur seuils", "Exploration drill-down", "Export et partage"]
    },
    logo: "/img/projects/pulsebi/logo.svg",
    image: "/img/projects/pulsebi/hero.svg",
    color: "#7209B7"
  },
  {
    slug: "syncbridge",
    order: 15,
    featured: false,
    conceptDemo: true,
    category: "integrations",
    relatedService: "acquisition",
    tag: { en: "Concept Demo", fr: "Concept Demo" },
    title: { en: "SyncBridge", fr: "SyncBridge" },
    subtitle: { en: "Shopify ↔ CRM Real-time Sync", fr: "Sync Temps Réel Shopify ↔ CRM" },
    description: {
      en: "A bidirectional real-time synchronization bridge between Shopify and your CRM — orders, customers, inventory, and more. No more double entry.",
      fr: "Un pont de synchronisation bidirectionnel en temps réel entre Shopify et votre CRM — commandes, clients, stocks et plus. Fini la double saisie."
    },
    challenge: {
      en: "Shopify merchants manually export orders and import them into their CRM. Data gets out of sync, duplicate entries pile up, inventory discrepancies cause lost sales, and customer history is incomplete across systems.",
      fr: "Les marchands Shopify exportent manuellement les commandes vers leur CRM. Les données se désynchronisent, les doublons s'accumulent, les écarts de stock causent des pertes de ventes et l'historique client est incomplet."
    },
    solution: {
      en: "SyncBridge is a real-time integration layer using webhooks and APIs: new Shopify orders create/update CRM records instantly. Customers are deduplicated, field mapping is configurable, and a daily reconciliation report catches any drift. Built with retry queues and monitoring.",
      fr: "SyncBridge est une couche d'intégration temps réel utilisant webhooks et APIs : les nouvelles commandes Shopify créent/mettent à jour les enregistrements CRM instantanément. Dédoublonnage, mapping configurable et rapport de réconciliation quotidien."
    },
    results: [
      { metric: "Real-time", label: { en: "Bidirectional sync", fr: "Sync bidirectionnelle" } },
      { metric: "API", label: { en: "Shopify + CRM APIs", fr: "APIs Shopify + CRM" } },
      { metric: "Logs", label: { en: "Event audit trail", fr: "Piste d'audit événements" } }
    ],
    techStack: ["Shopify Admin API", "HubSpot / Zoho / Pipedrive API", "n8n", "Postgres (mapping)", "Queue + Retries", "Monitoring"],
    features: {
      en: ["Bidirectional real-time sync", "Order & customer sync", "Inventory sync", "Smart deduplication", "Configurable field mapping", "Infinite loop prevention", "Failure alerts + replay", "Daily reconciliation"],
      fr: ["Sync bidirectionnelle temps réel", "Sync commandes & clients", "Sync des stocks", "Dédoublonnage intelligent", "Mapping configurable", "Prévention boucles infinies", "Alertes échec + rejeu", "Réconciliation quotidienne"]
    },
    logo: "/img/projects/syncbridge/logo.svg",
    image: "/img/projects/syncbridge/hero.svg",
    color: "#EF476F"
  }
];
