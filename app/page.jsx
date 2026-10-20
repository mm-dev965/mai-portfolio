import { FaWhatsapp, FaEnvelope, FaExternalLinkAlt, FaBriefcase, FaCode } from 'react-icons/fa';

export default function Portfolio() {
  const personalInfo = {
    name: "زينب خلف",
    title: "Frontend & Mobile Developer",
    experience: "4 سنوات من الخبرة",
    bio: "مطور ومصمم واجهات برمجية وتطبيقات بخبرة 4 سنوات. أمتلك شغفاً كبيراً بتحويل الأفكار المعقدة إلى منتجات رقمية أنيقة، سريعة، وذات تجربة استخدام ممتازة.",
    whatsapp: "01022877114",
    whatsappLink: "https://wa.me/201022877114",
    email: "hayamahmoud049@gmail.com"
  };

  const projects = [
    {
      title: "Exclusive Tours Egypt",
      category: "شركة سياحة",
      description: "موقع سياحي متكامل يعرض الرحلات والخدمات السياحية في مصر بتصميم جذاب وسلس.",
      link: "https://exclusive-tours-egypt.vercel.app/",
      tags: ["Web Design", "Tourism"],
      logo: "/logos/tour.png"
    },
    {
      title: "Golden Prestige",
      category: "مصنع ملابس وتصميمات",
      description: "الملف التعريفي والتصميمات الخاصة بمصنع وشركات الأزياء والملابس.",
      link: "https://golden-prestige.vercel.app/",
      tags: ["Apparel", "Branding"],
      logo: "/logos/golden.png"
    },
    {
      title: "Tooliano",
      category: "متجر للملابس",
      description: "متجر إلكتروني متكامل لعرض وتسوق الملابس والأزياء بتجربة مستخدم مميزة.",
      link: "https://tooliano.com/",
      tags: ["E-commerce", "Fashion"],
      logo: "/logos/tooliano.png"
    },
    {
      title: "M&M Life Store",
      category: "متجر ملابس وأزياء",
      description: "منصة تجارة إلكترونية متخصصة في الأزياء وملابس العائلة.",
      link: "https://clothing-store-nu-ten.vercel.app/",
      tags: ["Next.js", "E-commerce"],
      logo: "/logos/mmstore.png"
    },
    {
      title: "MM Factory Profile",
      category: "صفحة تعريفيّة واحدة",
      description: "بروفايل تفصيلي سريع ومرتب لخدمات المصنع والأعمال.",
      link: "https://mm-factory-profile.vercel.app/",
      tags: ["Landing Page", "Profile"],
      logo: "/logos/mmstore.png"
    },
    {
      title: "MM Factory Magazine",
      category: "مجلة المصنع",
      description: "مجلة رقمية تعرض أحدث أخبار وتصميمات ومنتجات المصنع.",
      link: "https://mm-factory-magazine.vercel.app/",
      tags: ["Digital Magazine", "Content"],
      logo: "/logos/mmstore.png"
    },
    {
      title: "أسرار الرياضة (Asrar Al-Riyada)",
      category: "موقع رياضي إخباري",
      description: "منصة أخبار رياضية متكاملة تغطي مباريات وأندية الدوري والأحداث الرياضية.",
      link: "https://asrar-elryiada.vercel.app/",
      tags: ["Sports News", "Flutter/Web"],
      logo: "/logos/asrar.png"
    },
    {
      title: "صوت وروح (Sout We Rouh)",
      category: "تطبيق للمواهب والمزيكا والشات",
      description: "منصة تفاعلية تجمع عشاق الموسيقى والمواهب مع ميزات الدردشة الحية.",
      link: "https://soutwerouh-cloud.github.io/sout_we_rouh/",
      tags: ["Interactive App", "Chat & Music"],
      logo: "/logos/sout.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 font-sans relative overflow-hidden" dir="rtl">
      
      {/* علامة مائية خلفية فخمة */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.015] select-none z-0">
        <span className="text-[12vw] font-black tracking-widest text-white uppercase">ZAINAB KHALAF</span>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-slate-800 bg-[#161b22]/90 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-right">
          
          <div className="space-y-4 max-w-2xl flex flex-col items-center md:items-start">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-medium border border-cyan-500/20">
                معرض الأعمال والمهارات البرمجية ✨
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm font-medium border border-emerald-500/20">
                <FaBriefcase className="text-xs" /> {personalInfo.experience}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              أنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{personalInfo.name}</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 w-full">
              <a 
                href={personalInfo.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-medium transition-all shadow-lg shadow-emerald-900/20 w-full sm:w-auto"
              >
                <FaWhatsapp className="text-xl" /> تواصل عبر واتساب ({personalInfo.whatsapp})
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#21262d] hover:bg-[#30363d] text-slate-200 text-sm sm:text-base font-medium transition-all border border-slate-700 shadow-sm w-full sm:w-auto"
              >
                <FaEnvelope className="text-xl text-cyan-400" /> إرسال إيميل
              </a>
            </div>
          </div>

          {/* Programming Icon Box - بديل احترافي معبر عن البرمجة */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-1.5 shadow-2xl shrink-0 mx-auto flex items-center justify-center">
            <div className="w-full h-full bg-[#161b22] rounded-[20px] overflow-hidden relative flex flex-col items-center justify-center gap-3 text-cyan-400 shadow-inner">
              <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shadow-lg">
                <FaCode className="text-4xl sm:text-5xl text-cyan-400 animate-pulse" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-slate-300">Clean Code & Dev</span>
            </div>
          </div>
        </div>
      </header>

      {/* Projects */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">المشروعات المنجزة</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            مجموعة مختارة من التطبيقات ومنصات الويب التي قمت بتطويرها وتصميمها باحترافية.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-[#161b22] rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#21262d] flex items-center justify-center border border-slate-700/60 shadow-inner overflow-hidden">
                    <img 
                      src={project.logo} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2.5 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-[#21262d] text-slate-300 font-medium border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                >
                  استعراض المشروع <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#161b22] mt-16 md:mt-20 relative z-10 shadow-inner">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">{personalInfo.name}</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">Frontend & Mobile Developer</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
            <a href={personalInfo.whatsappLink} className="hover:text-cyan-400 flex items-center gap-2 font-medium">
              <FaWhatsapp className="text-emerald-400 text-lg sm:text-xl" /> {personalInfo.whatsapp}
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 flex items-center gap-2 font-medium">
              <FaEnvelope className="text-cyan-400 text-lg sm:text-xl" /> {personalInfo.email}
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-[11px] sm:text-xs text-slate-500 border-t border-slate-800/80 bg-[#0d1117] flex flex-wrap items-center justify-center gap-2 px-4">
          <span>© 2026 Zainab Khalaf. All rights reserved.</span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="font-semibold text-cyan-400">Official Portfolio</span>
        </div>
      </footer>
    </div>
  );
}