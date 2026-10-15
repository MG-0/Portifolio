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
  badge?: {
    en: string;
    ar: string;
  };
  github?: string | null;
  live?: string | null;
  isFreelance?: boolean;
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
  fullName: "Mahmoud Gamal",
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

  translations: {
    en: {
      role: "Full Stack Developer (MERN / Next.js / NestJS / Laravel)",
      tagline: "Building scalable production systems, high-performance web applications, and real-time experiences with clean architecture.",
      description:
        "Full Stack Developer skilled in MERN, Next.js, NestJS, and Laravel, building production-style apps with clean architecture across JavaScript/TypeScript and PHP. Sole developer on a real-time broadcast graphics control system, with emphasis on secure, scalable, and performant systems delivered through continuous learning and best practices.",
      nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        testimonials: "Client Reviews",
        contact: "Contact",
      },
      hero: {
        available: "Available for new opportunities & freelance",
        hi: "Hello, I'm",
        viewProjects: "Explore Projects",
        downloadCv: "Download CV",
        contactMe: "Get in Touch",
      },
      skills: {
        title: "Technical Arsenal",
        subtitle: "Full overview of frontend, backend, university computer science foundations, and modern engineering tools.",
        pauseNotice: "Hover over any stream to pause",
        frontend: "Frontend & UI Systems",
        backend: "Backend & Databases & APIs",
        cs: "CS Fundamentals & University",
        tools: "Languages, Security & DevOps",
      },
      testimonials: {
        title: "Client Feedback",
        subtitle: "What client leadership says about my delivery speed, full-stack architecture, and production polish.",
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
        freelanceTitle: "Flagship Freelance Platform",
        otherTitle: "All Engineering Projects",
        viewLive: "Live Demo",
        viewCode: "Source Code",
        privateNotice: "Commercial client code is private",
        viewDetails: "View Architecture",
      },
      experience: {
        title: "Work Experience",
        subtitle: "Professional software engineering experience delivering production systems.",
      },
    },
    ar: {
      role: "مطور تطبيقات متكامل (MERN / Next.js / NestJS / Laravel)",
      tagline: "أبني أنظمة ويب عالية الأداء وتطبيقات لحظية متطورة بمعمارية برمجية نظيفة وقابلة للتوسع.",
      description:
        "مطور تطبيقات متكاملة (Full Stack Developer) متخصص في MERN و Next.js و NestJS و Laravel، أصنع تطبيقات برمجية احترافية بمعمارية نظيفة عبر بيئة JavaScript/TypeScript و PHP. بنيت بمفردي نظاماً متكاملاً لإدارة وتوليد جرافيكس البث المباشر (Broadcast CG)، مع تركيز دائم على السرعة والأمان الفائق وقابلية التوسع وأفضل الممارسات البرمجية.",
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
      },
      skills: {
        title: "الترسانة التقنية والمهارات",
        subtitle: "نظرة شاملة على مهارات الواجهات، الأنظمة الخلفية، أساسيات علوم الحاسب الأكاديمية، ولغات البرمجة.",
        pauseNotice: "قف بمؤشر الفأرة فوق أي شريط لإيقافه مؤقتاً",
        frontend: "أنظمة الواجهات الأمامية (Frontend)",
        backend: "الأنظمة الخلفية وقواعد البيانات (Backend)",
        cs: "أساسيات علوم الحاسب والجامعة (CS Fundamentals)",
        tools: "لغات البرمجة، الأمان وأدوات التطوير",
      },
      testimonials: {
        title: "رأي العميل في مشروعي الفريلانس",
        subtitle: "شهادة حقيقية من مديرة وصاحبة مكتب رواق للديكور حول جودة التسليم والسرعة والاحترافية.",
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
        title: "أبرز الأعمال والمشاريع الحية",
        subtitle: "منصة فريلانس متكاملة، برمجيات بث مباشر، تطبيقات إنتاجية، وأنظمة ذكاء اصطناعي.",
        freelanceTitle: "مشروع الفريلانس الكامل (Flagship)",
        otherTitle: "جميع المشاريع البرمجية",
        viewLive: "معاينة حية",
        viewCode: "كود المشروع",
        privateNotice: "كود المشروع تجاري خاص بالعميل",
        viewDetails: "تفاصيل المعمارية",
      },
      experience: {
        title: "الخبرة العملية",
        subtitle: "خبرة مهنية في تطوير وبناء أنظمة برمجية إنتاجية وفق السيرة الذاتية الرسمية.",
      },
    },
  },

  skillsStreams: {
    frontend: [
      { name: "React.js", color: "#61DAFB" },
      { name: "Next.js", color: "#FFFFFF" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Framer Motion", color: "#0055FF" },
      { name: "GSAP", color: "#88CE02" },
      { name: "Shadcn UI", color: "#FFFFFF" },
      { name: "Redux Toolkit", color: "#764ABC" },
      { name: "HTML5 & CSS3", color: "#E34F26" },
      { name: "Zustand", color: "#E5E7EB" },
    ],
    backend: [
      { name: "Node.js", color: "#5FA04E" },
      { name: "Express.js", color: "#FFFFFF" },
      { name: "NestJS", color: "#E0234E" },
      { name: "Laravel", color: "#FF2D20" },
      { name: "REST APIs", color: "#10B981" },
      { name: "GraphQL", color: "#E10098" },
      { name: "WebSockets", color: "#38BDF8" },
      { name: "Socket.io", color: "#FFFFFF" },
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Prisma", color: "#2D3748" },
      { name: "TypeORM", color: "#FE0902" },
    ],
    csFundamentals: [
      { name: "Data Structures", color: "#8B5CF6" },
      { name: "Algorithms", color: "#EC4899" },
      { name: "Software Engineering", color: "#0EA5E9" },
      { name: "Operating Systems (OS)", color: "#F59E0B" },
      { name: "OOP (Object-Oriented)", color: "#10B981" },
      { name: "Database Systems", color: "#6366F1" },
      { name: "Computer Networks", color: "#06B6D4" },
      { name: "Clean Architecture", color: "#38BDF8" },
      { name: "Design Patterns", color: "#A855F7" },
      { name: "SOLID Principles", color: "#EC4899" },
    ],
    languagesAndTools: [
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "PHP", color: "#777BB4" },
      { name: "Java", color: "#007396" },
      { name: "C#", color: "#239120" },
      { name: "Python", color: "#3776AB" },
      { name: "SQL", color: "#0284C7" },
      { name: "Git & GitHub", color: "#F05032" },
      { name: "Docker", color: "#2496ED" },
      { name: "Redis Caching", color: "#DC382D" },
      { name: "JWT & RBAC", color: "#EAB308" },
      { name: "Jest Testing", color: "#C21325" },
    ],
  },

  experiences: [
    {
      company: "TKDS MENA LLC",
      position: "Full Stack Developer",
      period: "May 2026 – Aug 2026",
      location: { en: "Remote, from Egypt · part of TKDS Media LLC, USA", ar: "عن بعد، من مصر · جزء من TKDS Media LLC، أمريكا" },
      points: {
        en: [
          "Single-handedly designed and built a three-program CG system (Node.js/Express/Socket.io backend, React + Tailwind control panel, vanilla JS + GSAP overlay for vMix/OBS) supporting three live graphic types (score bug, lower thirds, leaderboards) within a three-month tenure — replacing a fully manual workflow and cutting graphic updates from a multi-step process to a single click, ready for live broadcast use.",
          "Eliminated race conditions across concurrent operator actions by designing a WebSocket event layer with a serialized write queue over a file-based JSON store, enabling reliable real-time state sync across every connected client without a database.",
          "Delivered the CG system end-to-end as the only engineer on it, alongside also building the official site for Mediacore2, the company's SaaS product — managing two concurrent deliverables independently.",
        ],
        ar: [
          "Single-handedly designed and built a three-program CG system (Node.js/Express/Socket.io backend, React + Tailwind control panel, vanilla JS + GSAP overlay for vMix/OBS) supporting three live graphic types (score bug, lower thirds, leaderboards) within a three-month tenure — replacing a fully manual workflow and cutting graphic updates from a multi-step process to a single click, ready for live broadcast use.",
          "Eliminated race conditions across concurrent operator actions by designing a WebSocket event layer with a serialized write queue over a file-based JSON store, enabling reliable real-time state sync across every connected client without a database.",
          "Delivered the CG system end-to-end as the only engineer on it, alongside also building the official site for Mediacore2, the company's SaaS product — managing two concurrent deliverables independently.",
        ],
      },
    },
    {
      company: "Avnology",
      position: "System & Network Monitoring",
      period: "Apr 2024 – Aug 2024",
      location: { en: "Saudi Arabia-based company, remote from Egypt", ar: "شركة مقرها السعودية، عن بعد من مصر" },
      points: {
        en: [
          "Detected and escalated production system and network incidents across shift-based monitoring, giving the technical team faster visibility into issues and supporting continuous uptime for client infrastructure.",
        ],
        ar: [
          "Detected and escalated production system and network incidents across shift-based monitoring, giving the technical team faster visibility into issues and supporting continuous uptime for client infrastructure.",
        ],
      },
    },
  ],

  freelanceProject: {
    id: "rewaq-decor",
    name: "Rewaq-Decor",
    title: {
      en: "Rewaq Decor - Complete Luxury Digital Platform",
      ar: "رواق للديكور - منصة رقمية متكاملة ولوحة تحكم",
    },
    description: {
      en: "A comprehensive full-stack digital solution for Rewaq Luxury Interior Design. Single-handedly built the responsive client-facing web application with Next.js & Framer Motion, an administrative management control dashboard with Next.js, and a high-performance backend API with Node.js and Express.js with custom consultation booking lifecycle.",
      ar: "حل برمجي متكامل لشركة رواق للديكور والتصميم الداخلي الفاخر. قمت ببناء الموقع الكامل للعملاء بـ Next.js و Framer Motion و Tailwind CSS و Shadcn UI، بالإضافة إلى لوحة تحكم وإدارة مخصصة للمسؤول بـ Next.js، وخادم باك إند متكامل بـ Node.js و Express.js لمعالجة الطلبات والاستشارات.",
    },
    technologies: [
      "Next.js (Client Front)",
      "Next.js (Admin Dashboard)",
      "Node.js & Express.js (Backend API)",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
      "TypeScript",
      "RESTful APIs",
    ],
    highlights: {
      en: [
        "Client Web Application (Next.js)",
        "Dedicated Admin Control Dashboard (Next.js)",
        "Full Backend API (Node.js & Express.js)",
        "60fps Smooth Transitions & Animations (Framer Motion)",
        "Shadcn UI & Tailwind CSS Luxury Styling",
        "Live Production Deployment for Gulf Client",
      ],
      ar: [
        "تطبيق ويب متكامل للعملاء (Next.js)",
        "لوحة تحكم وإدارة خاصة للمسؤول (Next.js Admin Dashboard)",
        "واجهة خلفية وباك إند كامل (Node.js & Express API)",
        "حركات انسيابية فائقة السرعة 60fps (Framer Motion)",
        "تصميم فاخر بمكتبات Shadcn UI و Tailwind CSS",
        "منصة إنتاجية حية لعميل في الخليج",
      ],
    },
    badge: {
      en: "Live Freelance Platform (Full System)",
      ar: "مشروع فريلانس متكامل (واجهة + لوحة تحكم + باك إند)",
    },
    github: null,
    live: "https://www.rewaq-decor.com/en",
    isFreelance: true,
  } as ProjectItem,

  projects: [
    {
      id: "football-broadcast-cg",
      name: "Football-Broadcast-CG",
      title: {
        en: "Football Broadcast CG & Control Engine",
        ar: "نظام جرافيكس البث المباشر لمباريات كرة القدم",
      },
      description: {
        en: "Real-time football broadcast graphics (CG) and operator control panel built with React, Node.js, Socket.io, and GSAP animations, syncing live scorebugs, lower thirds, and leaderboards to 1080p OBS overlays.",
        ar: "نظام متكامل للجرافيكس والبث المباشر لمباريات كرة القدم ولوحة تحكم للمشغل مبني بـ React و Node.js و Socket.io ورسوم GSAP لمزامنة النتائج والشريط السفلي فورياً على OBS بدقة 1080p.",
      },
      technologies: ["React.js", "Node.js", "Express.js", "Socket.io", "GSAP", "Tailwind CSS", "OBS / vMix"],
      highlights: {
        en: ["Real-time WebSocket Sync", "Serialized Write Queue", "Zero-Database Engine", "1080p Live Stream Overlay"],
        ar: ["مزامنة فورية بـ WebSockets", "طابور كتابة تسلسلي لمنع التصادم", "يعمل دون قاعدة بيانات", "تراكب بث مباشر بدقة 1080p"],
      },
      badge: {
        en: "Broadcast System",
        ar: "نظام بث مباشر",
      },
      github: "https://github.com/MG-0/Football-Broadcast-CG",
      live: "https://football-broadcast-cg-rho.vercel.app",
    },
    {
      id: "taskflow",
      name: "Task-Management-System",
      title: {
        en: "TaskFlow - Enterprise Task Management Platform",
        ar: "نظام إدارة المهام (TaskFlow)",
      },
      description: {
        en: "Full-stack task management application with a Laravel REST API (Eloquent ORM, Migrations, Middleware, Service Container, Sanctum auth) and React (Vite + TypeScript + Tailwind) frontend with optimistic UI updates.",
        ar: "تطبيق متكامل لإدارة المهام مبني بواجهة REST API بـ Laravel (مع مصادقة Sanctum، و Eloquent ORM) وواجهة React بـ TypeScript و Tailwind مع تحديثات فورية متفائلة.",
      },
      technologies: ["Laravel", "React.js", "TypeScript", "PostgreSQL", "Sanctum Auth", "Tailwind CSS"],
      highlights: {
        en: ["Laravel REST API & Service Container", "Sanctum Token Authentication", "React Vite + TypeScript", "Optimistic State Management"],
        ar: ["واجهة REST API بـ Laravel", "مصادقة آمنة بـ Sanctum", "واجهة React Vite بـ TypeScript", "تحديث فوري متفائل للحالة"],
      },
      badge: {
        en: "Laravel + React",
        ar: "لارافيل + رياكت",
      },
      github: "https://github.com/MG-0/Task-Management-System",
      live: "https://taskflow-web-eta.vercel.app/login",
    },
    {
      id: "quickbite",
      name: "Full-Stack-Food-App",
      title: {
        en: "Bilingual Food Ordering & Delivery Platform",
        ar: "تطبيق طلب وتوصيل الطعام ثنائي اللغة",
      },
      description: {
        en: "Delivered a bilingual (English/Arabic) food delivery app with an admin dashboard in a 24-hour assessment sprint, using JWT auth with hashed credentials, i18n-driven RTL/LTR layout, and server-side rendering.",
        ar: "تطبيق ويب متكامل لطلب وتوصيل الطعام تم تسليمه في تحدي 24 ساعة، يدعم ثنائية اللغة (عربي/إنجليزي) مع لوحة تحكم كاملة للمسؤول، وتوثيق JWT، وأداء فائق بـ Next.js SSR.",
      },
      technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT Auth", "i18n"],
      highlights: {
        en: ["24-Hour Sprint Delivery", "Bilingual RTL/LTR Support", "Admin Dashboard & Product Controls", "SSR Speed Optimization"],
        ar: ["تم إنجازه في 24 ساعة", "دعم كامل للـ RTL/LTR", "لوحة تحكم إدارية متكاملة", "تحسين الأداء بـ SSR"],
      },
      badge: {
        en: "Next.js + Express",
        ar: "نكست + إكسبريس",
      },
      github: "https://github.com/MG-0/Full-Stack-Food-App",
      live: "https://food-dash-ruddy.vercel.app/en",
    },
    {
      id: "brain-tumor-ai",
      name: "Medical-Imaging-Platform",
      title: {
        en: "AI-Powered Brain Tumor Detection & Medical Platform",
        ar: "منصة الكشف عن أورام المخ بالذكاء الاصطناعي",
      },
      description: {
        en: "Graduation Project: Full stack medical platform with 10+ features across doctor and patient dashboards, integrating a decoupled Python/Flask/TensorFlow AI service that analyzes MRI scans and generates tumor heatmaps without blocking API requests.",
        ar: "مشروع التخرج: منصة طبية متكاملة بأكثر من 10 ميزات للأطباء والمرضى، تدمج خدمة ذكاء اصطناعي بـ Python و Flask و TensorFlow لفحص صور الرنين وتوليد خرائط حرارية للأورام مع فصل تام للخدمة لضمان أقصى سرعة.",
      },
      technologies: ["React.js", "Node.js", "Express.js", "Python", "Flask", "TensorFlow", "MongoDB"],
      highlights: {
        en: ["TensorFlow Deep Learning Inference", "Decoupled Async Architecture", "Doctor & Patient Dashboards", "Graduation Project"],
        ar: ["تحليل بالتعلم العميق بـ TensorFlow", "معمارية غير متزامنة مفصولة", "لوحات تحكم للأطباء والمرضى", "مشروع التخرج الرسمي"],
      },
      badge: {
        en: "Graduation Project",
        ar: "مشروع التخرج",
      },
      github: "https://github.com/MG-0/Medical-Imaging-Platform",
      live: null,
    },
    {
      id: "bookstore-mern",
      name: "Book-Store-Mern-App",
      title: {
        en: "MERN Stack Interactive Bookstore",
        ar: "متجر كتب تفاعلي متكامل (MERN Stack)",
      },
      description: {
        en: "MERN-stack Bookstore application built with React and Node.js, featuring secure authentication, book catalog management, responsive shopping cart, and full RESTful API integration.",
        ar: "متجر كتب إلكتروني متكامل بمجموعة MERN (React و Node.js و Express و MongoDB)، يحتوي على مصادقة المستخدمين، وإدارة الكتب، وسلة تسوق تفاعلية سريعة.",
      },
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      highlights: {
        en: ["Full MERN Stack", "JWT Authentication", "Cart & Order Workflow", "RESTful CRUD Operations"],
        ar: ["حزمة MERN المتكاملة", "مصادقة بـ JWT", "سلة مشتريات وتأكيد طلبات", "عمليات CRUD متكاملة"],
      },
      badge: {
        en: "MERN Stack",
        ar: "حزمة MERN",
      },
      github: "https://github.com/MG-0/Book-Store-Mern-App",
      live: "https://book-store-two-gray.vercel.app/",
    },
    {
      id: "burger-landing",
      name: "Burger-LandingPage",
      title: {
        en: "Burger Restaurant Interactive Landing Page",
        ar: "صفحة هبوط تفاعلية لمطعم برجر",
      },
      description: {
        en: "Modern and fully responsive burger restaurant landing page built with Next.js and Tailwind CSS, featuring smooth scroll transitions, interactive menu layouts, and mobile-friendly design.",
        ar: "صفحة هبوط حديثة وسريعة الاستجابة لمطعم برجر مبنية بـ Next.js و Tailwind CSS، تتميز بحركات انسيابية، وتنسيق أنيق مريح للعين عبر مختلف الشاشات.",
      },
      technologies: ["Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
      highlights: {
        en: ["Interactive Menu", "Fluid Smooth Animations", "Responsive Mobile-First UI", "Modern Typography"],
        ar: ["قائمة طعام تفاعلية", "حركات سلسة وانسيابية", "تصميم متجاوب بالكامل", "تنسيق بصري جذاب"],
      },
      badge: {
        en: "Landing Page",
        ar: "صفحة هبوط",
      },
      github: "https://github.com/MG-0/Burger-LandingPage",
      live: "https://burger-landing-page-tvc4.vercel.app/",
    },
    {
      id: "car-price-api",
      name: "Car-Price-Estimation-API-Backend",
      title: {
        en: "NestJS Car Price Estimation API",
        ar: "واجهة برمجية لتقدير أسعار السيارات بـ NestJS",
      },
      description: {
        en: "Modular backend built with NestJS and TypeORM that allows users to sign up, log in, and create car reports to estimate prices based on historical records, applying dependency injection and validation pipes.",
        ar: "واجهة خلفية احترافية مبنية بـ NestJS و TypeORM تتيح للمستخدمين تسجيل الدخول وإنشاء تقارير لتقدير أسعار السيارات بناءً على بيانات سابقة مع حقن التبعيات وأنابيب التحقق DTO.",
      },
      technologies: ["NestJS", "TypeORM", "PostgreSQL", "TypeScript", "JWT Auth", "DTO Validation"],
      highlights: {
        en: ["Clean Layered Architecture", "Dependency Injection (DI)", "Validation Pipes & Guards", "Relational Data Modeling"],
        ar: ["معمارية طبقية نظيفة", "حقن التبعيات (DI)", "أنابيب تحقق DTO", "نمذجة قواعد بيانات علائقية"],
      },
      badge: {
        en: "NestJS API",
        ar: "واجهة NestJS",
      },
      github: "https://github.com/MG-0/Car-Price-Estimation-API-Backend",
      live: null,
    },
    {
      id: "football-scoreboard-nodecg",
      name: "Football-Scoreboard-NODECG",
      title: {
        en: "Live Football Scorebug & Broadcast Overlay",
        ar: "نظام لوحة نتائج كرة القدم للبث المباشر (NodeCG)",
      },
      description: {
        en: "NodeCG bundle for a live football scorebug: dashboard to control scores, match clock, team names, colors, and logos synced instantly to a 1920×1080 OBS overlay.",
        ar: "حزمة NodeCG مخصصة لشريط نتائج مباريات كرة القدم: لوحة تحكم بالوقت والنتائج والفرق والشعارات متصلة فورياً بتراكب شاشة OBS بدقة 1080p.",
      },
      technologies: ["NodeCG", "Node.js", "OBS Studio", "TypeScript", "WebSockets"],
      highlights: {
        en: ["Instant OBS Sync", "Match Clock Control", "NodeCG Asset Integration", "Zero-Lag Graphics"],
        ar: ["مزامنة فورية مع OBS", "تحكم بساعة المباراة", "إدارة الأصول بـ NodeCG", "جرافيك مباشر دون تأخير"],
      },
      badge: {
        en: "Broadcast Tool",
        ar: "أداة بث مباشر",
      },
      github: "https://github.com/MG-0/Football-Scoreboard-NODECG",
      live: null,
    },
  ] as ProjectItem[],

  testimonials: [
    {
      id: "1",
      name: {
        en: "Eng. Reham",
        ar: "البشمهندسة ريهام",
      },
      role: {
        en: "Founder & Managing Director",
        ar: "مديرة وصاحبة مكتب رواق للديكور",
      },
      company: {
        en: "Rewaq Luxury Interiors",
        ar: "مكتب رواق للتصميم والديكور الفاخر",
      },
      avatar: "RE",
      content: {
        en: "Mahmoud delivered our entire digital ecosystem flawlessly — from the stunning client frontend and interactive 60fps portfolio to the full-featured admin management dashboard and fast backend API. His technical precision, speed, and dedication exceeded our expectations!",
        ar: "البشمهندس محمود بنى وسلم مشروعنا بالكامل باحترافية استثنائية — بدءاً من الموقع الرئيسي للعملاء بحركات 60fps فائقة الجمال ومعرض الأعمال، إلى لوحة التحكم والإدارة المخصصة للمكتب، والباك إند المتكامل. التزام ودقة وسرعة تفوق التوقعات!",
      },
      rating: 5,
    },
  ] as TestimonialItem[],
};

export type SiteConfig = typeof siteConfig;
