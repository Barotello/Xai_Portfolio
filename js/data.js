/**
 * Portfolio Data - Baran (@Barotello) Projeleri ve Bento Grid İçerikleri
 * GitHub: https://github.com/Barotello
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Baran",
    username: "Barotello",
    role: "Full-Stack Geliştirici & UI/UX Mimarı",
    tagline: "Modern TypeScript ekosistemi, yapay zeka entegrasyonları ve Apple estetiğinde akıcı web deneyimleri üretiyorum.",
    status: "Yeni projelere & iş birliklerine açık",
    availableForHire: true,
    location: "Türkiye / Uzaktan",
    stats: [
      { value: "7+", label: "Açık Kaynak Proje" },
      { value: "TypeScript", label: "Ana Uzmanlık" },
      { value: "Next.js", label: "Modern Mimari" },
      { value: "Vercel", label: "Canlı Dağıtım" }
    ],
    socials: {
      github: "https://github.com/Barotello",
      linkedin: "https://linkedin.com/in/Barotello",
      twitter: "https://x.com/Barotello",
      email: "iletisim@barotello.dev"
    }
  },

  projects: [
    {
      id: "storylink",
      name: "StoryLink - İnteraktif Hikaye Platformu",
      badge: "Canlı Yayında • Vercel",
      category: "TypeScript & Web Platformu",
      year: "2025",
      headline: "Hikayeleri ve içerikleri dinamik linklerle buluşturan modern deneyim.",
      subheadline: "TypeScript ve modern web bileşenleriyle geliştirilmiş, kullanıcıların içeriklerini estetik kartlarla organize edip paylaşabildiği interaktif hikaye ekosistemi.",
      primaryColor: "#0A84FF",
      accentGlow: "rgba(10, 132, 255, 0.28)",
      liveUrl: "https://storylink-seven.vercel.app",
      githubUrl: "https://github.com/Barotello/storylink",
      appScreen: {
        title: "StoryLink Feed",
        balance: "24 Koleksiyon",
        growth: "%100 Etkileşim Skoru",
        cardHolder: "BARAN • CREATOR",
        cardNumber: "STORYLINK PRO",
        cardExpiry: "Vercel Edge",
        quickActions: [
          { icon: "plus", label: "Yeni Link" },
          { icon: "share", label: "Paylaş" },
          { icon: "image", label: "Kapak" },
          { icon: "sliders", label: "Tema" }
        ],
        recentTransactions: [
          { name: "Tasarım İlhamları Koleksiyonu", category: "Kategori: UI/UX", amount: "Canlı", time: "14:15" },
          { name: "Frontend Kaynak Kütüphanesi", category: "Kategori: Kod", amount: "+84 Ziyaret", time: "Dün" },
          { name: "StoryLink Vercel Deployment", category: "Edge Network", amount: "99.9% Uptime", time: "Aktif" }
        ]
      },
      bento: {
        topLeft: {
          tag: "İçerik Mimarisi",
          title: "Küratörlü Link & Hikaye Motoru",
          desc: "Kullanıcıların dikkat süresini maksimize eden, kart bazlı mikro-içerik hiyerarşisi ve akıcı geçiş efektleri.",
          badge: "TypeScript & Next.js",
          icon: "camera"
        },
        topCenter: {
          tag: "Teknoloji Yığını",
          title: "Next.js & Vercel Edge",
          metric: "45ms TTFB",
          sub: "Global CDN önbellekleme & Sıfır Gecikme",
          badge: "Production Ready",
          icon: "cpu"
        },
        topRight: {
          tag: "Performans",
          metric: "100 / 100",
          highlight: "Lighthouse Skoru",
          sub: "SEO, Erişilebilirlik ve En İyi Pratikler",
          icon: "star"
        }
      }
    },
    {
      id: "liguamind",
      name: "LiguaMind - AI Dil & Bilişsel Asistan",
      badge: "Yapay Zeka • Vercel",
      category: "AI & Dil Eğitimi",
      year: "2026",
      headline: "Yapay zeka ile kişiselleştirilmiş bilişsel dil koçu.",
      subheadline: "Kullanıcının öğrenme hızına ve hata örüntülerine adapte olan, doğal dil işleme algoritmalarıyla zenginleştirilmiş akıllı kelime ve telaffuz asistanı.",
      primaryColor: "#BF5AF2",
      accentGlow: "rgba(191, 90, 242, 0.28)",
      liveUrl: "https://liguamind.vercel.app",
      githubUrl: "https://github.com/Barotello/liguamind",
      appScreen: {
        title: "LiguaMind Seviye",
        balance: "Level B2+",
        growth: "Günlük Seri: 24 Gün",
        cardHolder: "DİL ÖĞRENME PLATFORMU",
        cardNumber: "1,420 KELİME",
        cardExpiry: "AI AKTİF",
        quickActions: [
          { icon: "wand", label: "AI Sohbet" },
          { icon: "activity", label: "Quiz" },
          { icon: "heart", label: "Seri" },
          { icon: "sliders", label: "Seviye" }
        ],
        recentTransactions: [
          { name: "Gündelik Konuşma Pratiği", category: "Yapay Zeka Diyaloğu", amount: "+45 XP", time: "11:20" },
          { name: "Deyimler ve Kalıplar Testi", category: "Hafıza Kartları", amount: "10/10", time: "Dün" },
          { name: "Telaffuz Değerlendirmesi", category: "Ses Algılama", amount: "%96 Doğruluk", time: "Dün" }
        ]
      },
      bento: {
        topLeft: {
          tag: "Bilişsel Tasarım",
          title: "Aralıklı Tekrar Algoritması",
          desc: "Ebbinghaus unutma eğrisini kıran, unutulmaya yakın kelimeleri tam zamanında hatırlatan akıllı mekanizma.",
          badge: "Adaptive NLP",
          icon: "sparkles"
        },
        topCenter: {
          tag: "AI Çekirdeği",
          title: "Ligua-Neural v2",
          metric: "Gerçek Zamanlı",
          sub: "Anlık gramer ve bağlam düzeltmesi",
          badge: "TypeScript AI",
          icon: "cpu"
        },
        topRight: {
          tag: "Etki & Verim",
          metric: "3 Kat",
          highlight: "Daha Hızlı Öğrenme",
          sub: "Geleneksel yöntemlere kıyasla kalıcılık",
          icon: "zap"
        }
      }
    },
    {
      id: "mathgame",
      name: "MathGame - Zihinsel Hız & Skor Arenası",
      badge: "Açık Kaynak • GitHub",
      category: "TypeScript & Gamification",
      year: "2026",
      headline: "Zihinsel aritmetik reflekslerini zirveye taşıyan matematik oyunu.",
      subheadline: "Zamana karşı yarışan, seviye bazlı zorluk artışı ve akıcı mikro-animasyonlarla oyuncuyu motive eden dinamik TypeScript oyun motoru.",
      primaryColor: "#30D158",
      accentGlow: "rgba(48, 209, 88, 0.28)",
      liveUrl: "https://github.com/Barotello/MathGame",
      githubUrl: "https://github.com/Barotello/MathGame",
      appScreen: {
        title: "MathGame Arena",
        balance: "3,840 Skor",
        growth: "Streak x18 Doğru",
        cardHolder: "MATEMATİK ŞAMPİYONU",
        cardNumber: "LEVEL 52 ULTRA",
        cardExpiry: "MIT LİSANS",
        quickActions: [
          { icon: "arrow-up-right", label: "Başla" },
          { icon: "activity", label: "Zamanlı" },
          { icon: "heart", label: "Can: 3/3" },
          { icon: "sliders", label: "Zorluk" }
        ],
        recentTransactions: [
          { name: "Hızlı Çarpma Aritmetiği", category: "Zorluk: Uzman", amount: "+520 Puan", time: "18:40" },
          { name: "Kombinasyon Bulmacası", category: "Süre: 45 sn", amount: "Rekor", time: "Dün" },
          { name: "Günlük Meydan Okuma", category: "Rozet Kazanıldı", amount: "★ Altın", time: "Dün" }
        ]
      },
      bento: {
        topLeft: {
          tag: "Oyun Dinamiği",
          title: "Refleks Odaklı Arayüz",
          desc: "Klavye ve dokunmatik girişlerde milisaniyelik geri bildirim sağlayan tepkisel oyun akışı.",
          badge: "Zero Latency",
          icon: "zap"
        },
        topCenter: {
          tag: "Performans Motoru",
          title: "Math Engine v1",
          metric: "60 FPS",
          sub: "Saf TypeScript matematik mantığı",
          badge: "Open Source",
          icon: "cpu"
        },
        topRight: {
          tag: "Doğruluk Oranı",
          metric: "%99.4",
          highlight: "Girdi Hassasiyeti",
          sub: "Kusursuz puanlama ve zaman kontrolü",
          icon: "award"
        }
      }
    },
    {
      id: "insightful-parsomen",
      name: "Insightful Parsomen - Bilgi & Analiz",
      badge: "Büyük Ölçekli • 65MB",
      category: "TypeScript & Dokümantasyon",
      year: "2026",
      headline: "Derin okuma ve yapılandırılmış bilgi mimarisi.",
      subheadline: "Karmaşık bilgi kümelerini, eski parşömenlerin estetiğiyle modern veri görselleştirmesini bir araya getirerek sunan kapsamlı bilgi sistemi.",
      primaryColor: "#FF9F0A",
      accentGlow: "rgba(255, 159, 10, 0.28)",
      liveUrl: "https://github.com/Barotello/insightful_parsomen",
      githubUrl: "https://github.com/Barotello/insightful_parsomen",
      appScreen: {
        title: "Parsomen İndeksi",
        balance: "184 Döküman",
        growth: "Tam Metin İndeksleme",
        cardHolder: "BİLGİ MİMARİSİ",
        cardNumber: "PARSOMEN 65MB",
        cardExpiry: "OFFLINE READY",
        quickActions: [
          { icon: "image", label: "Okuma" },
          { icon: "sliders", label: "Filtre" },
          { icon: "share", label: "Dışa Aktar" },
          { icon: "plus", label: "Not Ekle" }
        ],
        recentTransactions: [
          { name: "Modern Sistem Tasarımı Notları", category: "Yazılım Mimarisi", amount: "İndekslendi", time: "16:00" },
          { name: "Algoritmik Veri Yapıları", category: "Teknik Doküman", amount: "42 Sayfa", time: "Dün" },
          { name: "Felsefe & Bilişsel Modeller", category: "Analiz Metni", amount: "Güncellendi", time: "Dün" }
        ]
      },
      bento: {
        topLeft: {
          tag: "Tipografik Disiplin",
          title: "Göz Yormayan Okuma Alanı",
          desc: "Uzun süreli teknik okumalarda bilişsel yorgunluğu azaltmak için optimize edilmiş satır açıklığı ve kontrast.",
          badge: "Readability First",
          icon: "feather"
        },
        topCenter: {
          tag: "Veri Altyapısı",
          title: "Local Indexed DB",
          metric: "< 5ms",
          sub: "Anlık arama & Hiyerarşik etiketleme",
          badge: "TypeScript Core",
          icon: "cpu"
        },
        topRight: {
          tag: "Kapasite",
          metric: "65 MB+",
          highlight: "Yapılandırılmış İçerik",
          sub: "Geniş arşiv ve görsel veri tabanı",
          icon: "layers"
        }
      }
    }
  ],

  designGallery: [
    {
      id: "g-storylink",
      title: "StoryLink Platformu",
      category: "Web & İçerik",
      type: "TypeScript • Vercel App",
      year: "2025",
      gradient: "linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)",
      accent: "#818CF8",
      liveUrl: "https://storylink-seven.vercel.app",
      githubUrl: "https://github.com/Barotello/storylink",
      desc: "Kullanıcıların kartlar üzerinden hikaye ve link koleksiyonları oluşturabildiği dinamik içerik platformu."
    },
    {
      id: "g-liguamind",
      title: "LiguaMind AI",
      category: "Yapay Zeka",
      type: "TypeScript • Vercel App",
      year: "2026",
      gradient: "linear-gradient(135deg, #3B0764 0%, #581C87 100%)",
      accent: "#C084FC",
      liveUrl: "https://liguamind.vercel.app",
      githubUrl: "https://github.com/Barotello/liguamind",
      desc: "Yapay zeka modelleriyle dil pratiği, seviye tespiti ve kişiselleştirilmiş telaffuz koçluğu."
    },
    {
      id: "g-mathgame",
      title: "MathGame Zeka Arenası",
      category: "Gamification",
      type: "TypeScript • Açık Kaynak",
      year: "2026",
      gradient: "linear-gradient(135deg, #064E3B 0%, #047857 100%)",
      accent: "#34D399",
      githubUrl: "https://github.com/Barotello/MathGame",
      desc: "Matematik reflekslerini ve zihinsel hızı test eden seviyeli ve zaman sınırlı oyun motoru."
    },
    {
      id: "g-parsomen",
      title: "Insightful Parsomen",
      category: "Dokümantasyon",
      type: "TypeScript • Kapsamlı Proje",
      year: "2026",
      gradient: "linear-gradient(135deg, #78350F 0%, #92400E 100%)",
      accent: "#FBBF24",
      githubUrl: "https://github.com/Barotello/insightful_parsomen",
      desc: "Derin okuma, yapısal bilgi arşivi ve tam metin indeksleme yeteneğine sahip 65MB'lık zengin kütüphane."
    },
    {
      id: "g-myhelper",
      title: "MyHelper Araç Kutusu",
      category: "Verimlilik",
      type: "CSS & Web Aracı",
      year: "2026",
      gradient: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
      accent: "#38BDF8",
      githubUrl: "https://github.com/Barotello/MyHelper",
      desc: "Web geliştirmede günlük iş akışlarını hızlandırmak için geliştirilmiş stil ve yardımcı kod araç seti."
    },
    {
      id: "g-portfolio-v1",
      title: "Baran Portfolio v1",
      category: "Portfolyo",
      type: "TypeScript • Vercel App",
      year: "2025",
      gradient: "linear-gradient(135deg, #4C1D95 0%, #6D28D9 100%)",
      accent: "#A78BFA",
      liveUrl: "https://baran-portfolio-kappa.vercel.app",
      githubUrl: "https://github.com/Barotello/Baran_portfolio",
      desc: "Baran'ın ilk interaktif kişisel portfolyo deneyimi ve projeler vitrini."
    },
    {
      id: "g-xai-portfolio",
      title: "Xai_Portfolio (Apple Bento)",
      category: "Apple Bento",
      type: "JavaScript & Vanilla CSS",
      year: "2026",
      gradient: "linear-gradient(135deg, #18181B 0%, #27272A 100%)",
      accent: "#0A84FF",
      githubUrl: "https://github.com/Barotello/Xai_Portfolio",
      desc: "Apple Bento Grid mimarisine sahip, canlı telefon ekranlı ve tema motorlu amiral gemisi vitrin."
    }
  ],

  skills: [
    { 
      category: "Diller & Temel Teknolojiler", 
      items: ["TypeScript", "JavaScript (ES6+)", "HTML5 & Semantik Web", "Modern CSS3 & Grid", "TailwindCSS"] 
    },
    { 
      category: "Framework & Kütüphaneler", 
      items: ["Next.js (App Router)", "React.js", "Vercel Edge Platform", "Node.js", "RESTful API Mimarisi"] 
    },
    { 
      category: "Arayüz & Sistem Tasarımı", 
      items: ["Apple HIG Estetiği", "Bento Grid Mimarisi", "Mikro-Etkileşimler", "Responsive Tasarım", "Lighthouse & SEO"] 
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
