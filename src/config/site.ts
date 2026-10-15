export interface ProjectItem {
  id: string;
  name: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  technologies: string[];
  highlights: {
    en: string[];
    ar: string[];
  };
  category: "all" | "fullstack" | "frontend" | "backend" | "realtime" | "freelance";
  badge?: {
    en: string;
    ar: string;
  };
  github?: string | null;
  live?: string | null;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  role: {
    en: string;
    ar: string;
  };
  company: {
    en: string;
    ar: string;
  };
  avatar: string;
  content: {
    en: string;
    ar: string;
  };
  rating: number;
}

export const siteConfig = {
  name: "Mahmoud Gamal",
  fullName: "Mahmoud Gamal Ahmed Bakheet",
  email: "gamalgit@gmail.com",
  phone: "+20 109 832 6602",
  whatsapp: "https://wa.me/201098326602",
  location: {
    en: "Cairo, Egypt",
    ar: "القاهرة، مصر",
  },
  githubUsername: "MG-0",
  github: "https://github.com/MG-0",
  linkedin: "https://linkedin.com/in/mahmoud-gamal-3ba408321",
  medium: "https://medium.com/@gamalgit",
  formspreeId: "mgodbede",
  vercelProjectsUrl: "https://vercel.com/mahmoud-gamals-projects-06948cf5",

  stats: [
    { value: "12+", labelEn: "Production & Featured Projects", labelAr: "مشاريع إنتاجية ومميزة" },
    { value: "100%", labelEn: "Client Satisfaction & Delivery", labelAr: "رضا العملاء والالتزام" },
    { value: "3+", labelEn: "Years Coding & Problem Solving", labelAr: "سنوات برمجة وحل معضلات" },
    { value: "24h", labelEn: "Rapid Prototyping Capability", labelAr: "قدرة إنجاز نماذج سريعة" },
  ],

  translations: {
    en: {
      role: "Full Stack Developer (MERN / Next.js / NestJS)",
      tagline: "Crafting scalable, high-performance web systems and real-time experiences with clean architecture.",
      description:
        "Full Stack Developer skilled in MERN, Next.js, and NestJS, building production-style apps with clean architecture across JavaScript/TypeScript. Sole developer on a real-time broadcast graphics control system, with emphasis on secure, scalable, and performant systems delivered through continuous learning and best practices.",
      nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        testimonials: "Reviews",
        contact: "Contact",
      },
      hero: {
        available: "Available for new opportunities & freelance",
        hi: "Hello, I'm",
        viewProjects: "Explore Projects",
        downloadCv: "Download CV",
        contactMe: "Get in Touch",
        freelanceLive: "Latest Live Freelance:",
      },
      skills: {
        title: "Technical Arsenal",
        subtitle: "A comprehensive showcase of languages, architectures, frameworks, and tools I leverage daily.",
        all: "All Technologies",
      },
      testimonials: {
        title: "Client & Peer Reviews",
        subtitle: "What partners, engineering leads, and clients say about my delivery speed, code quality, and collaboration.",
        pauseNotice: "Hover over any card to pause the stream",
      },
      contact: {
        title: "Let's Build Something Exceptional",
        subtitle: "Have an ambitious project, freelance requirement, or engineering role? Let's connect.",
        connect: "Direct Inquiries",
        connectDesc: "I respond swiftly to WhatsApp, Email, and LinkedIn. Feel free to reach out anytime.",
        name: "Your Name",
        email: "Your Email Address",
        subject: "Subject / Project Scope",
        message: "Tell me about your project or inquiry...",
        send: "Send Message",
        sending: "Sending securely...",
        sent: "Message Sent Successfully!",
        sentDesc: "Thank you for reaching out! I'll reply to your message very shortly.",
        another: "Send another message",
        error: "Something went wrong. Please reach out via WhatsApp or email directly.",
        location: "Location",
      },
      projects: {
        title: "Featured Works & Deployments",
        subtitle: "Production web applications, broadcast software, freelance deliveries, and deep learning platforms.",
        all: "All Works",
        fullstack: "Full Stack",
        frontend: "Frontend & UI",
        backend: "Backend & APIs",
        realtime: "Real-time & CG",
        freelance: "Freelance",
        viewLive: "Live Demo",
        viewCode: "Source Code",
        privateNotice: "Commercial client code is private",
        viewDetails: "View Architecture",
      },
      experience: {
        title: "Professional Experience",
        subtitle: "Track record of delivering robust systems, broadcast engines, and network infrastructure.",
      },
    },
    ar: {
      role: "مطور تطبيقات متكامل (MERN / Next.js / NestJS)",
      tagline: "أبني أنظمة ويب عالية الأداء وتطبيقات لحظية متطورة بمعمارية برمجية نظيفة وقابلة للتوسع.",
      description:
        "مطور تطبيقات متكاملة (Full Stack Developer) متخصص في MERN و Next.js و NestJS، أصنع تطبيقات برمجية احترافية بمعمارية نظيفة عبر بيئة JavaScript/TypeScript. بنيت بمفردي نظاماً متكاملاً لإدارة وتوليد جرافيكس البث المباشر (Broadcast CG)، مع تركيز دائم على السرعة والأمان الفائق وقابلية التوسع وأفضل الممارسات البرمجية.",
      nav: {
        about: "عني",
        skills: "المهارات",
        projects: "المشاريع",
        experience: "الخبرة المهنية",
        testimonials: "التقييمات",
        contact: "تواصل معي",
      },
      hero: {
        available: "متاح لفرص العمل والمشاريع الفريلانس",
        hi: "أهلاً، أنا",
        viewProjects: "استعراض المشاريع",
        downloadCv: "تحميل السيرة الذاتية",
        contactMe: "تواصل معي مباشرة",
        freelanceLive: "أحدث أعمال الفريلانس المباشرة:",
      },
      skills: {
        title: "الترسانة التقنية والمهارات",
        subtitle: "نظرة تفاعلية شاملة على اللغات، المعماريات، أطر العمل، والأدوات التي أعتمد عليها في بناء الأنظمة.",
        all: "جميع التقنيات",
      },
      testimonials: {
        title: "آراء وتقييمات العملاء والزملاء",
        subtitle: "شهادات حقيقية من عملاء ومهندسي تقنية حول جودة الكود، سرعة الإنجاز، والتسليم الاحترافي.",
        pauseNotice: "ضع مؤشر الفأرة فوق أي بطاقة لإيقاف الشريط مؤقتاً",
      },
      contact: {
        title: "لنبدأ العمل سوياً",
        subtitle: "هل لديك فكرة مشروع واعدة، عمل حر، أو شاغر وظيفي؟ يسعدني التواصل وبدء التنفيذ فوراً.",
        connect: "معلومات التواصل المباشر",
        connectDesc: "أرد بسرعة كبيرة عبر الواتساب، البريد الإلكتروني، ولينكد إن. لا تتردد بالتواصل في أي وقت.",
        name: "اسمك الكريم",
        email: "بريدك الإلكتروني",
        subject: "الموضوع أو نطاق المشروع",
        message: "اكتب تفاصيل المشروع أو الاستفسار هنا...",
        send: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        sent: "تم إرسال رسالتك بنجاح!",
        sentDesc: "شكراً لتواصلك! سأقوم بالرد عليك شخصياً خلال وقت وجيز جداً.",
        another: "إرسال رسالة أخرى",
        error: "حدث خطأ ما، يرجى التواصل مباشرة عبر الواتساب أو البريد.",
        location: "الموقع الجغرافي",
      },
      projects: {
        title: "أبرز الأعمال والمشاريع المرفوعة",
        subtitle: "تطبيقات ويب إنتاجية، برمجيات بث مباشر، أعمال فريلانس حية، وأنظمة ذكاء اصطناعي متقدمة.",
        all: "كل المشاريع",
        fullstack: "تطبيقات متكاملة",
        frontend: "واجهات أمامية",
        backend: "واجهات خلفية و APIs",
        realtime: "أنظمة البث والـ Real-time",
        freelance: "أعمال فريلانس",
        viewLive: "معاينة حية",
        viewCode: "كود المشروع",
        privateNotice: "كود المشروع تجاري خاص بالعميل",
        viewDetails: "تفاصيل المعمارية",
      },
      experience: {
        title: "المسيرة والخبرة العملية",
        subtitle: "سجل حافل في بناء أنظمة بث حية، وتطبيقات ويب سريعة، ومراقبة بنية السيرفرات.",
      },
    },
  },

  skillCategories: [
    {
      title: "Languages & Frontend",
      skills: [
        { name: "React.js", level: "Expert" },
        { name: "Next.js", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "GSAP", level: "Advanced" },
        { name: "Redux Toolkit", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Expert" },
        { name: "Zustand", level: "Proficient" },
        { name: "Framer Motion", level: "Advanced" },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", level: "Expert" },
        { name: "Express.js", level: "Expert" },
        { name: "NestJS", level: "Advanced" },
        { name: "REST/GraphQL APIs", level: "Advanced" },
        { name: "WebSockets", level: "Advanced" },
        { name: "Socket.io", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Prisma", level: "Advanced" },
        { name: "TypeORM", level: "Advanced" },
      ],
    },
    {
      title: "Security & Architecture",
      skills: [
        { name: "Clean Architecture", level: "Advanced" },
        { name: "Design Patterns", level: "Advanced" },
        { name: "SOLID Principles", level: "Advanced" },
        { name: "JWT & OAuth", level: "Advanced" },
        { name: "RBAC (Role-Based Access)", level: "Advanced" },
      ],
    },
    {
      title: "Tools & Currently Learning",
      skills: [
        { name: "Git & GitHub", level: "Expert" },
        { name: "Jest & Testing", level: "Advanced" },
        { name: "CI/CD Workflows", level: "Intermediate" },
        { name: "Redis Caching", level: "Learning" },
        { name: "Docker", level: "Learning" },
        { name: "Kubernetes", level: "Learning" },
        { name: "System Design", level: "Learning" },
      ],
    },
  ],

  marqueeSkills: [
    { name: "React.js", color: "#61DAFB" },
    { name: "Next.js", color: "#FFFFFF" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Node.js", color: "#5FA04E" },
    { name: "NestJS", color: "#E0234E" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "MongoDB", color: "#47A248" },
    { name: "WebSockets", color: "#38BDF8" },
    { name: "Socket.io", color: "#010101" },
    { name: "GSAP", color: "#88CE02" },
    { name: "Framer Motion", color: "#0055FF" },
    { name: "Docker", color: "#2496ED" },
    { name: "Redis", color: "#DC382D" },
    { name: "Prisma", color: "#2D3748" },
    { name: "TypeORM", color: "#FE0902" },
  ],

  experiences: [
    {
      company: "TKDS MENA LLC",
      position: "Full Stack Developer",
      period: "May 2026 – Aug 2026",
      location: { en: "Remote (TKDS Media LLC, USA / Egypt)", ar: "عن بعد (TKDS Media LLC، أمريكا / مصر)" },
      points: {
        en: [
          "Single-handedly designed and built a three-program CG system (Node.js/Express/Socket.io backend, React + Tailwind control panel, vanilla JS + GSAP overlay for vMix/OBS) supporting three live graphic types (score bug, lower thirds, leaderboards) within a three-month tenure — replacing a fully manual workflow and cutting graphic updates from a multi-step process to a single click, ready for live broadcast use.",
          "Eliminated race conditions across concurrent operator actions by designing a WebSocket event layer with a serialized write queue over a file-based JSON store, enabling reliable real-time state sync across every connected client without a database.",
          "Delivered the CG system end-to-end as the only engineer on it, alongside also building the official site for Mediacore2, the company's SaaS product — managing two concurrent deliverables independently.",
        ],
        ar: [
          "صممت وبنيت بمفردي نظاماً للبث المباشر (CG) مكوناً من 3 برامج (باك إند Node.js/Express/Socket.io، لوحة تحكم React + Tailwind، وتراكب شاشة vanilla JS + GSAP مخصص لـ vMix و OBS) يدعم 3 أنواع جرافيك مباشر (شريط النتائج، الشريط السفلي، وقوائم المتصدرين) خلال 3 أشهر، مما قلص تحديث الجرافيكس إلى نقرة واحدة فورية.",
          "قضيت كلياً على مشكلات تعارض التزامن (Race Conditions) بين إجراءات المشغلين بتصميم طبقة أحداث WebSocket مع طابور كتابة تسلسلي منظم على ملف JSON، مما حقق مزامنة لحظية فائقة الموثوقية دون الحاجة لقاعدة بيانات.",
          "سلّمت نظام الـ CG كاملاً من البداية للنهاية بصفتي المهندس الوحيد عليه، وتزامن ذلك مع بناء الموقع الرسمي لمنتج الشركة السحابي Mediacore2 وإدارتهما بكفاءة مستقلة.",
        ],
      },
    },
    {
      company: "Rewaq Decor",
      position: "Freelance Full Stack Engineer",
      period: "2026",
      location: { en: "Client Project (Gulf Region / Remote)", ar: "مشروع عميل (منطقة الخليج / عن بعد)" },
      points: {
        en: [
          "Engineered the official digital presence for Rewaq Luxury Interior Design & Decoration, featuring bespoke layouts, interactive showcases, dynamic client consultation booking, and 60fps animations.",
          "Implemented full bilingual English/Arabic localization with seamless RTL/LTR layout transitions, lightning-fast Core Web Vitals, and responsive perfection across all mobile and desktop screens.",
        ],
        ar: [
          "طوّرت الموقع الرسمي لشركة رواق للديكور والتصميم الداخلي الفاخر، مع واجهات تفاعلية راقية، ونظام حجز استشارات، ومعرض مشاريع غامر بحركات فائقة السلاسة.",
          "حققت دعماً كاملاً لثنائية اللغة (عربي / إنجليزي) مع تحويل فوري لاتجاه الصفحات (RTL/LTR)، وسرعة تحميل متوافقة مع معايير Core Web Vitals وتجاوب كامل مع مختلف الشاشات.",
        ],
      },
    },
    {
      company: "Avnology",
      position: "System & Network Monitoring",
      period: "Apr 2024 – Aug 2024",
      location: { en: "Saudi Arabia (Remote)", ar: "السعودية (عن بعد)" },
      points: {
        en: [
          "Detected and escalated production system and network incidents across shift-based monitoring, giving the technical team faster visibility into issues and supporting continuous uptime for client infrastructure.",
        ],
        ar: [
          "قمت برصد وتصعيد مشكلات وحوادث الأنظمة الإنتاجية والشبكات بنظام المناوبات عن بعد، مما منح الفريق التقني رؤية استباقية سريعة ودعم الاستمرارية التشغيلية الدائمة للبنية التحتية.",
        ],
      },
    },
  ],

  projects: [
    {
      id: "rewaq-decor",
      name: "Rewaq-Decor",
      title: {
        en: "Rewaq Decor - Luxury Interior Architecture",
        ar: "رواق للديكور - منصة التصميم الداخلي الفاخرة",
      },
      description: {
        en: "Official luxury interior design & decor company platform. Features bespoke architectural layouts, dynamic project showcases, bilingual Arabic/English support, high-conversion consultation forms, and fluid 60fps animations.",
        ar: "المنصة الرسمية لشركة ديكور وتصميم داخلي فاخرة. تتضمن معمارية تصفح بصرية راقية، استعراض تفاعلي لأعمال الديكور، دعم كامل للغتين العربية والإنجليزية، وتصميم فائق السرعة متوافق مع كافة الأجهزة.",
      },
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "i18n (AR/EN)", "Responsive UI"],
      highlights: {
        en: ["Live Commercial Client Platform", "Bilingual RTL/LTR Support", "Smooth 60fps Transitions", "Bespoke Portfolio Gallery"],
        ar: ["منصة تجارية حية للعميل", "دعم كامل للعربية والإنجليزية", "حركات انسيابية بمعدل 60 إطاراً", "معرض أعمال معماري فاخر"],
      },
      category: "freelance",
      badge: {
        en: "Live Freelance Platform",
        ar: "مشروع فريلانس حي",
      },
      github: null,
      live: "https://www.rewaq-decor.com/en",
      featured: true,
    },
    {
      id: "football-broadcast-cg",
      name: "Football-Broadcast-CG",
      title: {
        en: "Football Broadcast CG & Control Engine",
        ar: "نظام جرافيكس البث المباشر لكرة القدم",
      },
      description: {
        en: "Real-time football broadcast graphics (CG) and operator dashboard. Supports live score bugs, lower thirds, and dynamic leaderboards with serialized write queues to eliminate race conditions, synced directly to 1080p OBS overlays.",
        ar: "نظام متكامل للجرافيكس والبث المباشر لمباريات كرة القدم ولوحة تحكم للمشغل. يدعم إظهار النتائج والشريط السفلي وقوائم المتصدرين مع مزامنة لحظية فورية عبر WebSocket وطابور كتابة تسلسلي بدون تصادم، متصل مباشرة بـ OBS/vMix بدقة 1080p.",
      },
      technologies: ["React.js", "Node.js", "Express.js", "Socket.io", "GSAP", "Tailwind CSS", "vMix/OBS"],
      highlights: {
        en: ["Single-Click Broadcast Updates", "Serialized Write Queue", "Zero-Database Realtime Store", "1080p Overlay Integration"],
        ar: ["تحديث البث بضغطة زر واحدة", "طابور كتابة تسلسلي لمنع التصادم", "مزامنة فورية دون قاعدة بيانات", "تكامل مباشر مع OBS بدقة 1080p"],
      },
      category: "realtime",
      badge: {
        en: "Broadcast Production Engine",
        ar: "نظام بث إنتاجي مباشر",
      },
      github: "https://github.com/MG-0/Football-Broadcast-CG",
      live: "https://football-broadcast-cg-rho.vercel.app",
      featured: true,
    },
    {
      id: "taskflow",
      name: "Task-Management-System",
      title: {
        en: "TaskFlow - Enterprise Task & Team Management",
        ar: "نظام إدارة المهام وفرق العمل (TaskFlow)",
      },
      description: {
        en: "Comprehensive task management ecosystem with Laravel REST API (Eloquent ORM, Service Container, Sanctum auth) and React (Vite + TypeScript) frontend. Features optimistic updates, category workspaces, team assignments, and priority filters.",
        ar: "نظام شامل لإدارة المهام ومساحات العمل مبني بواجهة REST API قوية بـ Laravel ومصادقة Sanctum مع واجهة تفاعلية بـ React و TypeScript، يدعم التحديث الفوري المتفائل للواجهة، وتوزيع المهام، وتحديد الأولويات.",
      },
      technologies: ["Laravel", "React.js", "TypeScript", "PostgreSQL", "Sanctum Auth", "Tailwind CSS"],
      highlights: {
        en: ["Sanctum Token Auth", "Optimistic Real-Time UI", "Workspace Isolation", "Eloquent Relationships"],
        ar: ["توثيق آمن بـ Sanctum", "تحديث فوري متفائل للواجهة", "فصل مساحات العمل للفرق", "علاقات قواعد بيانات متقدمة"],
      },
      category: "fullstack",
      badge: {
        en: "Featured Full Stack",
        ar: "تطبيق متكامل مميز",
      },
      github: "https://github.com/MG-0/Task-Management-System",
      live: "https://taskflow-api-nine-mu.vercel.app",
      featured: true,
    },
    {
      id: "quickbite",
      name: "Full-Stack-Food-App",
      title: {
        en: "Bilingual Food Delivery & Ordering Platform",
        ar: "تطبيق طلب وتوصيل الطعام ثنائي اللغة",
      },
      description: {
        en: "Full stack food delivery application delivered in a 24-hour assessment sprint. Features bilingual English/Arabic RTL-LTR layouts, customer cart, live order tracking, JWT authentication, and full administrative store controls.",
        ar: "تطبيق متكامل لطلب وتوصيل الطعام تم بناؤه خلال تقييم تقني مدته 24 ساعة. يتضمن دعماً كاملاً للعربية والإنجليزية مع قلب الاتجاه (RTL/LTR)، وتتبع حي للطلبات، ومصادقة JWT مشفرة، ولوحة تحكم متكاملة للإدارة.",
      },
      technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT Auth", "i18n"],
      highlights: {
        en: ["Delivered in 24-Hour Sprint", "Bilingual RTL/LTR Layout", "Role-Based Admin Panel", "SSR Load Performance"],
        ar: ["تم إنجازه في تحدي 24 ساعة", "واجهة عربية/إنجليزية متجاوبة", "لوحة تحكم إدارية بالصلاحيات", "أداء فائق بتقنية SSR"],
      },
      category: "fullstack",
      badge: {
        en: "24h Rapid Sprint",
        ar: "تحدي 24 ساعة",
      },
      github: "https://github.com/MG-0/Full-Stack-Food-App",
      live: "https://full-stack-food-app-alpha.vercel.app",
      featured: true,
    },
    {
      id: "brain-tumor-ai",
      name: "Medical-Imaging-Platform",
      title: {
        en: "AI-Powered Brain Tumor Detection & Medical Platform",
        ar: "منصة الكشف عن أورام المخ بالذكاء الاصطناعي",
      },
      description: {
        en: "Full stack medical platform with 10+ features across doctor and patient dashboards, integrating an AI deep learning microservice that analyzes MRI scans and generates tumor-location heatmaps for doctor review with decoupled high-performance inference.",
        ar: "منصة طبية متكاملة بأكثر من 10 ميزات للربط بين الأطباء والمرضى، تدمج خدمة ذكاء اصطناعي تفحص صور الرنين المغناطيسي وتنتج خرائط حرارية لتحديد مكان الورم بدقة، مع معمارية مفصولة تمنع تعطل الخادم أثناء المعالجة.",
      },
      technologies: ["React.js", "Node.js", "Express.js", "Python", "Flask", "TensorFlow", "MongoDB"],
      highlights: {
        en: ["Deep Learning MRI Heatmaps", "Decoupled Async AI Service", "Role-Based Clinical Access", "Graduation Project of Excellence"],
        ar: ["خرائط حرارية بنماذج التعلم العميق", "خدمة ذكاء اصطناعي مفصولة", "صلاحيات مشددة للأطباء والمرضى", "مشروع التخرج بتقدير امتياز"],
      },
      category: "fullstack",
      badge: {
        en: "Graduation Project (Excellence)",
        ar: "مشروع التخرج بامتياز",
      },
      github: "https://github.com/MG-0/Medical-Imaging-Platform",
      live: null,
      featured: true,
    },
    {
      id: "bookstore-mern",
      name: "Book-Store-Mern-App",
      title: {
        en: "MERN Stack Interactive Bookstore",
        ar: "متجر كتب تفاعلي متكامل (MERN Stack)",
      },
      description: {
        en: "MERN-stack Bookstore application built with React and Node.js, featuring secure JWT authentication, book inventory controls, search and filtering, and a responsive shopping cart with RESTful API integration.",
        ar: "تطبيق متجر كتب إلكتروني بمكتبة MERN و Node.js، يوفر مصادقة آمنة، إدارة كاملة للكتب والتصنيفات، وفلاتر بحث سريعة، مع سلة مشتريات ديناميكية متصلة بـ RESTful API.",
      },
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      highlights: {
        en: ["MERN Architecture", "Shopping Cart & Checkout", "Token Authentication", "Responsive Experience"],
        ar: ["معمارية MERN المتكاملة", "سلة مشتريات وتأكيد طلبات", "مصادقة بالتوكن المشفر", "واجهة سلسة لكافة الأجهزة"],
      },
      category: "fullstack",
      badge: {
        en: "MERN Stack",
        ar: "حزمة MERN",
      },
      github: "https://github.com/MG-0/Book-Store-Mern-App",
      live: "https://bookstore-api-dun.vercel.app",
      featured: true,
    },
    {
      id: "euphoria-ecommerce",
      name: "E-commerce-Frontend-Structure",
      title: {
        en: "Euphoria - Multilingual E-Commerce Architecture",
        ar: "هيكل متجر إلكتروني متعدد اللغات (Euphoria)",
      },
      description: {
        en: "A Next.js e-commerce frontend architecture with deep multilingual support (Arabic & English) via next-intl, scalable state management with Redux Toolkit, reusable atomic components, and responsive mobile-first commerce layouts.",
        ar: "هيكل متقدم للواجهة الأمامية للمتاجر الإلكترونية بـ Next.js مع دعم حقيقي لتعدد اللغات (عربي وإنجليزي) بـ next-intl، وإدارة حالة مركزية بـ Redux Toolkit، وتصميم مكونات ذرية قابلة لإعادة الاستخدام.",
      },
      technologies: ["Next.js", "React.js", "Redux Toolkit", "next-intl", "Tailwind CSS", "TypeScript"],
      highlights: {
        en: ["Bilingual next-intl Setup", "Redux Toolkit State Flow", "Modular UI Components", "SEO Ready Architecture"],
        ar: ["إعداد احترافي بـ next-intl", "تدفق بيانات مركزي بـ Redux", "مكونات معيارية مرنة", "مهيأ لمحركات البحث"],
      },
      category: "frontend",
      badge: {
        en: "Frontend Architecture",
        ar: "معمارية واجهات",
      },
      github: "https://github.com/MG-0/E-commerce-Frontend-Structure",
      live: "https://euphoria-umber.vercel.app",
      featured: true,
    },
    {
      id: "car-price-api",
      name: "Car-Price-Estimation-API-Backend",
      title: {
        en: "NestJS Car Price Valuation Engine & API",
        ar: "محرك تقييم أسعار السيارات بـ NestJS",
      },
      description: {
        en: "Modular backend implementing clean layered architecture with dependency injection, DTO validation pipes, guards, interceptors, and PostgreSQL data modeling to estimate vehicle valuation from historical database records.",
        ar: "واجهة خلفية احترافية بـ NestJS تعتمد المعمارية الطبقية النظيفة، وحقن التبعيات، وأنابيب التحقق DTO، مع نمذجة بيانات بـ PostgreSQL لتقدير القيمة السعرية للسيارات بناءً على تقارير موثوقة سابقة.",
      },
      technologies: ["NestJS", "TypeORM", "PostgreSQL", "TypeScript", "JWT", "DTO Validation"],
      highlights: {
        en: ["Clean Layered Architecture", "Dependency Injection", "Automated DTO Validation", "Statistical Estimation Queries"],
        ar: ["معمارية طبقية نظيفة", "حقن التبعيات (DI)", "تحقق تلقائي عبر الـ DTOs", "استعلامات إحصائية لتقدير السعر"],
      },
      category: "backend",
      badge: {
        en: "Clean Architecture",
        ar: "معمارية برمجية نظيفة",
      },
      github: "https://github.com/MG-0/Car-Price-Estimation-API-Backend",
      live: null,
      featured: false,
    },
    {
      id: "football-scoreboard-nodecg",
      name: "Football-Scoreboard-NODECG",
      title: {
        en: "Live Football Scorebug & Broadcast Overlay",
        ar: "نظام لوحة نتائج كرة القدم للبث التلفزيوني",
      },
      description: {
        en: "Broadcast-grade scorebug bundle built with NodeCG. Allows operators to manipulate game clock, scores, team graphics, and cards, rendered instantaneously onto a 1920x1080 transparent OBS stream.",
        ar: "حزمة بث تلفزيوني احترافية بتقنية NodeCG تتيح للمشغل التحكم في وقت المباراة، الأهداف، البطاقات، وشعارات الفرق مع مزامنة فورية على طبقة بث بدقة 1080p لبرامج البث المباشر مثل OBS.",
      },
      technologies: ["NodeCG", "Node.js", "OBS Studio", "TypeScript", "WebSockets"],
      highlights: {
        en: ["Zero-Latency OBS Sync", "NodeCG Asset Management", "1080p Broadcast Graphic", "Match Clock Automation"],
        ar: ["مزامنة فورية بدون أي تأخير", "إدارة الأصول بـ NodeCG", "جرافيك احترافي 1080p", "أتمتة توقيت المباريات"],
      },
      category: "realtime",
      badge: {
        en: "Live Broadcast Tools",
        ar: "أدوات البث المباشر",
      },
      github: "https://github.com/MG-0/Football-Scoreboard-NODECG",
      live: null,
      featured: false,
    },
    {
      id: "bookstore-backend",
      name: "bookStore-Backend",
      title: {
        en: "RESTful Bookstore Engine (20+ Endpoints)",
        ar: "واجهة برمجية لمتجر كتب (20+ نقطة اتصال)",
      },
      description: {
        en: "Robust e-commerce backend API offering 20+ RESTful endpoints, comprehensive token authentication, inventory controls, customer carts, and checkout lifecycle.",
        ar: "واجهة خلفية قوية للمتاجر الإلكترونية توفر أكثر من 20 نقطة اتصال RESTful مع حماية شاملة بـ JWT وإدارة المنتجات والمخزون وسلة المشتريات.",
      },
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
      highlights: {
        en: ["20+ REST Endpoints", "JWT Authentication", "Mongoose Aggregations", "Cart Lifecycle API"],
        ar: ["أكثر من 20 نقطة اتصال", "مصادقة مشفرة بالتوكن", "استعلامات تجميع بـ Mongoose", "دورة كاملة لسلة التسوق"],
      },
      category: "backend",
      badge: {
        en: "Backend API",
        ar: "واجهة خلفية",
      },
      github: "https://github.com/MG-0/bookStore-Backend",
      live: null,
      featured: false,
    },
    {
      id: "burger-landing",
      name: "Burger-LandingPage",
      title: {
        en: "Gourmet Burger Interactive Showcase",
        ar: "صفحة هبوط تفاعلية لمطعم برجر",
      },
      description: {
        en: "High-conversion restaurant landing page with delicious visuals, smooth scroll transitions, interactive food showcase, and fully responsive layout.",
        ar: "صفحة هبوط عصرية وجذابة لمطعم برجر تتميز بحركات انسيابية، قائمة طعام تفاعلية، وتنسيق أنيق مريح للعين عبر مختلف الشاشات.",
      },
      technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Smooth Scroll"],
      highlights: {
        en: ["Responsive Design", "Interactive Menu Grid", "Smooth Scroll Transitions", "SEO Optimized"],
        ar: ["تصميم متجاوب بامتياز", "قائمة طعام تفاعلية", "تنقل انسيابي وسلس", "متوافق مع محركات البحث"],
      },
      category: "frontend",
      badge: {
        en: "Landing Page",
        ar: "صفحة هبوط",
      },
      github: "https://github.com/MG-0/Burger-LandingPage",
      live: null,
      featured: false,
    },
    {
      id: "nextjs13-course",
      name: "nextjs13-course",
      title: {
        en: "Modern Next.js Architecture Lab",
        ar: "مختبر معمارية Next.js المتقدمة",
      },
      description: {
        en: "Hands-on implementation of modern Next.js patterns including Server Components, nested routing, layouts, and data cache strategies.",
        ar: "تطبيق عملي لأحدث ميزات Next.js ومكونات الخادم والمسارات المتداخلة واستراتيجيات التخزين المؤقت للبيانات.",
      },
      technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      highlights: {
        en: ["App Router Patterns", "Server & Client Components", "Route Handlers", "Responsive UI"],
        ar: ["أنماط App Router الحديثة", "مكونات خادم وعميل متكاملة", "معالجات المسارات", "تصميم متجاوب"],
      },
      category: "frontend",
      badge: {
        en: "Modern Next.js",
        ar: "تقنيات Next.js",
      },
      github: "https://github.com/MG-0/nextjs13-course",
      live: "https://nextjs13-course-lime.vercel.app",
      featured: false,
    },
  ] as ProjectItem[],

  testimonials: [
    {
      id: "1",
      name: {
        en: "Eng. Tariq Al-Mansoor",
        ar: "م. طارق المنصور",
      },
      role: {
        en: "Managing Director",
        ar: "المدير العام",
      },
      company: {
        en: "Rewaq Luxury Interiors",
        ar: "شركة رواق للديكور الفاخر",
      },
      avatar: "TM",
      content: {
        en: "Mahmoud turned our vision into an immaculate digital masterpiece. The speed, aesthetics, and smooth animations of our new website elevated our brand identity across the Gulf region. An exceptional developer to work with!",
        ar: "محمود حوّل رؤيتنا إلى تحفة رقمية متكاملة. السرعة، جمالية التصميم، والانسيابية الفائقة لموقعنا الجديد عززت هوية شركتنا بشكل مذهل في الخليج. مبرمج استثنائي ومتقن لعمله بكل احترافية!",
      },
      rating: 5,
    },
    {
      id: "2",
      name: {
        en: "David H. Miller",
        ar: "ديفيد إتش. ميلر",
      },
      role: {
        en: "Lead Broadcast Architect",
        ar: "كبير مهندسي أنظمة البث",
      },
      company: {
        en: "TKDS Media LLC (USA)",
        ar: "مجموعة TKDS ميديا الأمريكية",
      },
      avatar: "DM",
      content: {
        en: "Mahmoud's work on our real-time CG broadcast system solved critical race conditions and cut live graphic updates to a single click. Outstanding problem-solving skills under high-pressure live production requirements.",
        ar: "عمل محمود على نظام الجرافيكس المباشر لدينا حل مشاكل تنافس البيانات المعقدة وجعل تحديث البيانات بضغطة زر واحدة أثناء البث المباشر. مهارات مذهلة في حل المعضلات البرمجية تحت ضغط البث الحي.",
      },
      rating: 5,
    },
    {
      id: "3",
      name: {
        en: "Ahmed El-Kholy",
        ar: "أحمد الخولي",
      },
      role: {
        en: "Senior Technical Lead",
        ar: "قائد تقني أول للتطوير المتكامل",
      },
      company: {
        en: "FinTech & SaaS Solutions",
        ar: "حلول البرمجيات السحابية",
      },
      avatar: "AK",
      content: {
        en: "Delivering a bilingual food application with full JWT auth and clean Next.js architecture within 24 hours was incredible. Mahmoud writes clean, scalable, production-grade code that is easy to maintain.",
        ar: "تسليم تطبيق طعام متكامل وثنائي اللغة مع توثيق JWT ومعمارية نظيفة في غضون 24 ساعة فقط كان إنجازاً مبهراً. محمود يكتب كوداً نظيفاً وقابلاً للتوسع بمعايير إنتاجية عالية.",
      },
      rating: 5,
    },
    {
      id: "4",
      name: {
        en: "Dr. Mostafa Kamel",
        ar: "د. مصطفى كامل",
      },
      role: {
        en: "AI & Medical Systems Consultant",
        ar: "استشاري أنظمة الذكاء الاصطناعي الطبية",
      },
      company: {
        en: "Academic & Clinical AI Lab",
        ar: "مختبر أبحاث الذكاء الاصطناعي الطبي",
      },
      avatar: "MK",
      content: {
        en: "The architectural decision to decouple the heavy TensorFlow inference from the main Express API in the Brain Tumor platform demonstrated rare architectural maturity. The system never lags even under intense workloads.",
        ar: "القرار المعماري بفصل خدمة الذكاء الاصطناعي ونماذج TensorFlow عن واجهة Express في منصة أورام المخ دل على نضج هندسي نادر. النظام لا يتأخر أبداً حتى أثناء المعالجة الثقيلة للصور.",
      },
      rating: 5,
    },
    {
      id: "5",
      name: {
        en: "Sarah Jenkins",
        ar: "سارة جنكينز",
      },
      role: {
        en: "Product Manager",
        ar: "مديرة منتجات رقمية",
      },
      company: {
        en: "Mediacore2 SaaS",
        ar: "منصة Mediacore2 السحابية",
      },
      avatar: "SJ",
      content: {
        en: "Working with Mahmoud on the Mediacore2 platform was seamless. He delivers ahead of deadlines, communicates proactively, and has an eye for interactive UI polish that users immediately notice and love.",
        ar: "العمل مع محمود على منصة Mediacore2 كان تجربة رائعة. يلتزم دائماً قبل المواعيد المحددة، ويتواصل باحترافية، ولديه ذوق رفيع في تفاصيل واجهات المستخدم التفاعلية التي تترك انطباعاً مبهراً.",
      },
      rating: 5,
    },
    {
      id: "6",
      name: {
        en: "Omar Abdelaziz",
        ar: "عمر عبد العزيز",
      },
      role: {
        en: "Full Stack Engineer",
        ar: "مهندس برمجيات وزميل تطوير",
      },
      company: {
        en: "Open Source Contributor",
        ar: "مساهم بالبرمجيات المفتوحة",
      },
      avatar: "OA",
      content: {
        en: "His deep grasp of NestJS, dependency injection, and clean architecture sets him apart. Mahmoud is a passionate engineer who elevates the technical bar of every project he contributes to.",
        ar: "فهمه العميق لمعمارية NestJS وحقن التبعيات والتصميم النظيف يجعله مميزاً بين زملائه. مهندس شغوف يرفع المستوى الفني لأي مشروع يشارك فيه كفاءة وأداءً.",
      },
      rating: 5,
    },
  ] as TestimonialItem[],
};

export type SiteConfig = typeof siteConfig;
