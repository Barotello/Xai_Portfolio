/**
 * Portfolio Data - BARAN DEMİRTAŞ
 * AI Design Specialist | AI Design Evaluator | UI/UX & Product Design
 * GitHub: https://github.com/Barotello
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Baran Demirtaş",
    username: "Barotello",
    title: "AI Design Specialist | AI Design Evaluator | UI/UX & Product Design",
    headline: "Yapay zeka modellerini tasarım standartlarıyla değerlendiriyor, karmaşık sistemleri uçtan uca sezgisel arayüzlere dönüştürüyorum.",
    about: "UI/UX zanaatı ile yapılandırılmış tasarım eleştirisi arasında akıcı bir köprü kuran ürün tasarımcısı ve yapay zeka tasarım değerlendiricisiyim. Öğrenciler için AI destekli CV koçluğu platformu PrepLab.ai'ın kurucu ortağı olarak sıfırdan ürün mimarisi inşa ettim; ASELSAN'da komuta kontrol ekranları ve operasyonel Zabbix gösterge panellerini Figma ile sadeleştirerek kritik bilgiye erişim yollarını kısalttım. Fikirden çalışan React/Flutter arayüzlerine kadar tüm tasarım ve kodlama döngüsünü yönetiyorum.",
    status: "Ankara, Türkiye • Yeni Fırsatlara & Danışmanlığa Açık",
    location: "Ankara, Türkiye",
    email: "barandemirtas2@gmail.com",
    phone: "+90 531 267 3162",
    github: "https://github.com/Barotello",
    stats: [
      { value: "ASELSAN", label: "Sistem Mühendisi (UX/UI)" },
      { value: "PrepLab.ai", label: "Kurucu Ortak & Ürün Tasarımı" },
      { value: "ODTÜ '23", label: "Bilgisayar & Öğretim Tek." },
      { value: "Google UX", label: "Profesyonel Sertifikalı" }
    ],
    socials: {
      github: "https://github.com/Barotello",
      email: "barandemirtas2@gmail.com",
      phone: "+90 531 267 3162",
      linkedin: "https://linkedin.com/in/Barotello",
      location: "Ankara, Türkiye"
    }
  },

  // Bento Vitrini için Öne Çıkan Ana Projeler (CV Odaklı)
  projects: [
    {
      id: "preplab-ai",
      name: "PrepLab.ai — AI Destekli CV Koçluk Platformu",
      badge: "Kurucu Ortak & Ürün Tasarımcısı • 2024 - Günümüz",
      category: "Yapay Zeka & Ürün Tasarımı (React/Figma)",
      year: "2024 - Günümüz",
      headline: "Öğrencileri profesyonel hayata hazırlayan yapay zeka destekli CV koçu.",
      subheadline: "Bilgi mimarisinden yayındaki her ekrana kadar uçtan uca tasarlandı. AI tarafından üretilen ham değerlendirmeleri, öğrenciler için adım adım uygulanabilir ve anlaşılır bir kullanıcı deneyimine dönüştüren etkileşim modeli kurgulandı.",
      primaryColor: "#0A84FF",
      accentGlow: "rgba(10, 132, 255, 0.28)",
      liveUrl: "https://preplab.ai",
      githubUrl: "https://github.com/Barotello",
      appScreen: {
        title: "PrepLab AI Koçluk",
        balance: "88 / 100 CV Skoru",
        growth: "+24 Puan Optimizasyon",
        cardHolder: "BARAN DEMİRTAŞ • KURUCU",
        cardNumber: "AI FEEDBACK ENGINE",
        cardExpiry: "REACT & CLAUDE",
        quickActions: [
          { icon: "wand", label: "AI İncele" },
          { icon: "activity", label: "Analiz" },
          { icon: "plus", label: "Ekle" },
          { icon: "share", label: "Dışa Aktar" }
        ],
        recentTransactions: [
          { name: "Etki Odaklı Fiil Önerisi", category: "Gramer & Anlatım", amount: "Uygulandı", time: "10:14" },
          { name: "ATS Uyumluluk Taraması", category: "Format Denetimi", amount: "%94 Uyum", time: "Dün" },
          { name: "Sektörel Anahtar Kelimeler", category: "AI Eşleştirme", amount: "+8 Kelime", time: "Dün" }
        ]
      },
      bento: {
        topLeft: {
          tag: "AI Tasarım Modeli",
          title: "Eyleme Dönüştürülebilir Çıktı",
          desc: "Karmaşık yapay zeka analizlerini, kullanıcıyı bunaltmayan net renk kodlu geri bildirimlere ve görev kartlarına dönüştüren UI.",
          badge: "Figma & React UI",
          icon: "sparkles"
        },
        topCenter: {
          tag: "Mühendislik & Entegrasyon",
          title: "Claude & LLM Entegrasyonu",
          metric: "< 1.8 sn",
          sub: "Milisaniyeler içinde yapılandırılmış CV skoru",
          badge: "Production Ready",
          icon: "cpu"
        },
        topRight: {
          tag: "Kullanıcı Etkisi",
          metric: "%92",
          highlight: "Mülakat Dönüş Artışı",
          sub: "Kullanıcı testlerinde ölçülen hazırlık skoru",
          icon: "star"
        }
      }
    },
    {
      id: "aselsan-systems",
      name: "ASELSAN — Komuta Kontrol & Zabbix Gösterge Panelleri",
      badge: "Sistem Mühendisi (UX/UI) • 2023 - Günümüz",
      category: "Savunma & Kritik Operasyonel Arayüzler",
      year: "2023 - Günümüz",
      headline: "Aşırı yüklü operasyonel ekranları sadeleştiren görev odaklı arayüz dili.",
      subheadline: "Komuta ve kontrol ekranları ile Zabbix izleme panellerinin arayüz mimarisi üstlenildi. Figma kullanılarak bilgi kalabalığı barındıran ekranlar basitleştirildi; sık kullanılan ekranlara erişim tıklama sayısı azaltılarak kritik bilgiye ulaşım hızlandırıldı.",
      primaryColor: "#30D158",
      accentGlow: "rgba(48, 209, 88, 0.28)",
      liveUrl: null,
      githubUrl: "https://github.com/Barotello",
      appScreen: {
        title: "ASELSAN Zabbix Telemetri",
        balance: "124 Sistem Aktif",
        growth: "%99.99 Görev Güvenilirliği",
        cardHolder: "GÖREV KONTROL PANELİ",
        cardNumber: "KRİTİK VERİ AKIŞI",
        cardExpiry: "SAVUNMA STANDARDI",
        quickActions: [
          { icon: "activity", label: "Telemetri" },
          { icon: "sliders", label: "Sensörler" },
          { icon: "heart", label: "Sağlık" },
          { icon: "share", label: "Rapor" }
        ],
        recentTransactions: [
          { name: "Düğüm 4 Telemetri Senkronizasyonu", category: "Ağ Trafiği", amount: "Stabil", time: "16:42" },
          { name: "Kullanılabilirlik Optimizasyonu", category: "Navigasyon", amount: "-%40 Tıklama", time: "Dün" },
          { name: "Kritik Eşik Alarm Seviyesi", category: "Görsel Uyarı", amount: "Sıfır Hata", time: "Dün" }
        ]
      },
      bento: {
        topLeft: {
          tag: "Operasyonel Hiyerarşi",
          title: "Bilişsel Yükü Azaltan Düzen",
          desc: "Kritik anlarda operatörün göz temasını en önemli duruma yönlendiren renk kontrastı ve net gösterge paneli.",
          badge: "Figma Design System",
          icon: "camera"
        },
        topCenter: {
          tag: "Navigasyon Optimizasyonu",
          title: "Hızlı Bilgiye Erişim",
          metric: "-%40 Clicks",
          sub: "Sık kullanılan ekranlara doğrudan erişim rotası",
          badge: "High Usability",
          icon: "zap"
        },
        topRight: {
          tag: "Standartlaşma",
          title: "Tutarlı Tasarım Dili",
          metric: "%100",
          highlight: "Takım İçi Uyum",
          sub: "Yazılı dokümantasyon & Test ekibi geri bildirimi",
          icon: "award"
        }
      }
    },
    {
      id: "storylink",
      name: "StoryLink — İnteraktif Hikaye & Link Ekosistemi",
      badge: "Kişisel Proje • Vercel Canlıda",
      category: "TypeScript & Web Deneyimi",
      year: "2025",
      headline: "Hikayeleri ve içerikleri dinamik kartlarla buluşturan modern web platformu.",
      subheadline: "TypeScript ve React bileşenleriyle geliştirilmiş, kullanıcıların içeriklerini estetik kartlarla organize edip paylaşabildiği interaktif hikaye ekosistemi.",
      primaryColor: "#BF5AF2",
      accentGlow: "rgba(191, 90, 242, 0.28)",
      liveUrl: "https://storylink-seven.vercel.app",
      githubUrl: "https://github.com/Barotello/storylink",
      appScreen: {
        title: "StoryLink Vitrin",
        balance: "24 Koleksiyon",
        growth: "Global Dağıtım",
        cardHolder: "BARAN • CREATOR",
        cardNumber: "STORYLINK PRO",
        cardExpiry: "VERCEL EDGE",
        quickActions: [
          { icon: "plus", label: "Yeni Link" },
          { icon: "share", label: "Paylaş" },
          { icon: "image", label: "Kapak" },
          { icon: "sliders", label: "Tema" }
        ],
        recentTransactions: [
          { name: "Tasarım İlhamları Koleksiyonu", category: "UI/UX Kartları", amount: "Yayında", time: "14:15" },
          { name: "TypeScript Bileşen Kütüphanesi", category: "Mimari", amount: "+84 Ziyaret", time: "Dün" },
          { name: "Global CDN Optimizasyonu", category: "Edge Network", amount: "45ms TTFB", time: "Aktif" }
        ]
      },
      bento: {
        topLeft: {
          tag: "İçerik Mimarisi",
          title: "Küratörlü Link & Hikaye Motoru",
          desc: "Kullanıcıların dikkat süresini maksimize eden, kart bazlı mikro-içerik hiyerarşisi ve akıcı geçiş efektleri.",
          badge: "TypeScript & Next.js",
          icon: "layers"
        },
        topCenter: {
          tag: "Performans",
          title: "Edge Engine",
          metric: "45ms TTFB",
          sub: "Vercel Edge Network önbelleklemesi",
          badge: "Production Ready",
          icon: "cpu"
        },
        topRight: {
          tag: "Kalite Standardı",
          metric: "100 / 100",
          highlight: "Lighthouse Puanı",
          sub: "SEO, Erişilebilirlik ve En İyi Pratikler",
          icon: "star"
        }
      }
    },
    {
      id: "ai-evaluator",
      name: "AI Design Evaluation & Oyun Arayüzleri",
      badge: "AI Uzmanlığı • Dedektif Modu & ReflexRush",
      category: "AI Output Evaluation & Game UI",
      year: "2024 - 2026",
      headline: "Yapay zeka çıktılarının kullanılabilirlik ve tutarlılık kriterleriyle denetimi.",
      subheadline: "Üretken yapay zeka araçları kullanılarak üretilen görsel ve arayüz varlıklarının kalite, tutarlılık ve kullanılabilirlik kriterlerine göre değerlendirilmesi; Dedektif Modu (AI çok oyunculu dedektif oyunu) ve ReflexRush oyun akışları tasarımı.",
      primaryColor: "#FF9F0A",
      accentGlow: "rgba(255, 159, 10, 0.28)",
      liveUrl: "https://liguamind.vercel.app",
      githubUrl: "https://github.com/Barotello",
      appScreen: {
        title: "AI Değerlendirme Paneli",
        balance: "98.4 Kalite Skoru",
        growth: "Kriter: Rubric v4.2",
        cardHolder: "AI DESIGN EVALUATOR",
        cardNumber: "CLAUDE & HIGGSFIELD",
        cardExpiry: "PROMPT ENGINEERING",
        quickActions: [
          { icon: "wand", label: "Değerlendir" },
          { icon: "activity", label: "Metrik" },
          { icon: "sliders", label: "Kriter" },
          { icon: "share", label: "Rapor" }
        ],
        recentTransactions: [
          { name: "Dedektif Modu Karakter Görselleri", category: "Tutarlılık Denetimi", amount: "Onaylandı", time: "18:20" },
          { name: "Edge-Case Hata Ayıklama", category: "Arayüz Değerlendirmesi", amount: "0 Hata", time: "Dün" },
          { name: "Prompt & Referans Üretimi", category: "Görsel Varlık", amount: "24 Asset", time: "Dün" }
        ]
      },
      bento: {
        topLeft: {
          tag: "Yapılandırılmış Eleştiri",
          title: "Qualitative Rubrics & Değerlendirme",
          desc: "Yapay zeka modellerinin ürettiği arayüz ve grafiklerin insan ergonomisine ve tasarım ilkelerine tam uyum denetimi.",
          badge: "Anthropic Claude Certified",
          icon: "feather"
        },
        topCenter: {
          tag: "AI Boru Hattı",
          title: "Higgsfield & Generative AI",
          metric: "End-to-End",
          sub: "Görsel asset ve storyboard pipeline'ı",
          badge: "AI Filmmaking",
          icon: "cpu"
        },
        topRight: {
          tag: "Hata Tespiti",
          metric: "%100",
          highlight: "Edge-Case Koruması",
          sub: "Kullanıcı deneyimini bozan anomalilerin önlenmesi",
          icon: "shield"
        }
      }
    }
  ],

  // Profesyonel Deneyim Geçmişi (CV)
  experience: [
    {
      role: "Sistem Mühendisi (UX/UI Sorumlulukları)",
      company: "ASELSAN",
      period: "2023 – Günümüz",
      location: "Ankara, Türkiye",
      highlights: [
        "Komuta-kontrol uygulaması ekranları ve Zabbix izleme gösterge panellerinin arayüz tasarımını Figma ile üstlendi.",
        "Aşırı detaylı ve karmaşık operasyonel ekranları görev odaklı net şablonlara dönüştürerek bilişsel yükü hafifletti.",
        "Sık kullanılan ekranlara ulaşmak için gereken tıklama sayılarını azaltarak kritik bilgiye erişim sürelerini kısalttı.",
        "Yazılım araç paketi genelinde tutarlı, modern ve standartlaştırılmış bir arayüz tasarım dili oluşturdu.",
        "Arayüz ve süreç değişiklikleri için teknik gereksinim dokümanları, kurulum kılavuzları ve son kullanıcı eğitim materyalleri hazırladı.",
        "Son kullanıcılar ve test ekiplerinden gelen geri bildirimleri doğrudan kullanılabilirlik iyileştirmelerine dönüştürdü."
      ]
    },
    {
      role: "Kurucu Ortak & Ürün Tasarımcısı",
      company: "PrepLab.ai",
      period: "2024 – Günümüz",
      location: "Ankara / Remote",
      highlights: [
        "Öğrencilerin profesyonel hayata hazırlanmasını sağlayan AI destekli CV koçluğu platformu PrepLab.ai'ı kurdu.",
        "Bilgi mimarisinden yayındaki son ekrana kadar tüm ürünü uçtan uca tasarladı.",
        "Yapay zeka tarafından oluşturulan değerlendirmeleri anlaşılır ve uygulanabilir ekranda gösteren etkileşim modellerini kurguladı.",
        "Figma'da tasarlanan UI arayüzlerini React kullanarak canlı arayüze döktü ve AI/backend entegrasyonuyla entegre etti."
      ]
    },
    {
      role: "Bağımsız Ürün Tasarımcısı & Geliştirici",
      company: "Kişisel Projeler & Girişimler",
      period: "2024 – Günümüz",
      location: "Ankara / Global",
      highlights: [
        "Apple liquid-glass estetiğinde, fare spotlight parıltısı ve akıcı mikro-animasyonlara sahip tek dosya portfolyolar geliştirdi.",
        "BioMap (sağlık takip konsepti) görsel vücut haritası arayüzünü ve ReflexRush oyun UI etkileşim akışlarını tasarladı.",
        "Dedektif Modu (AI tabanlı çok oyunculu dedektif oyunu) için oyun mekaniği ve kullanıcı akışları oluşturdu.",
        "Tasarım sürecinin bütününde üretken yapay zeka araçlarını görsel varlık üretimi ve kalite değerlendirmesi amacıyla aktif kullandı."
      ]
    }
  ],

  // Yetkinlikler (CV'deki 4 ana kategori)
  competencies: [
    {
      category: "Yapay Zeka Tasarım Değerlendirmesi",
      icon: "wand",
      desc: "AI çıktılarının kalite, ergonomi ve kullanılabilirlik kriterleriyle değerlendirilmesi.",
      skills: [
        "AI Output Evaluation",
        "Design Critique",
        "Qualitative Rubrics",
        "Data Annotation",
        "Edge-Case Detection",
        "Reference Generation",
        "Prompt Engineering"
      ]
    },
    {
      category: "Ürün & UI/UX Tasarımı",
      icon: "layers",
      desc: "Kullanıcı ihtiyaçlarını yüksek etkileşimli dijital sistemlere dönüştürme.",
      skills: [
        "Görsel Hiyerarşi",
        "Bilgi Mimarisi (IA)",
        "Wireframing",
        "High-Fidelity Prototipleme",
        "Tasarım Sistemleri (Tokens)",
        "Responsive Tasarım",
        "Erişilebilirlik (WCAG AAA)"
      ]
    },
    {
      category: "Etkileşimli & Web Tasarım",
      icon: "activity",
      desc: "Milisaniyelik akıcılıkta mikro-etkileşimler ve oyunlaştırılmış kullanıcı deneyimleri.",
      skills: [
        "Web Deneyimleri",
        "Mobil Arayüzler (HIG / Material)",
        "Oyun UI Tasarımı (Game UI)",
        "Etkileşim Tasarımı (IxD)",
        "Kullanıcı Akışları (User Flows)",
        "Usability Testing"
      ]
    },
    {
      category: "Araçlar & Teknolojiler",
      icon: "cpu",
      desc: "Tasarımı çalışan koda dönüştüren modern yazılım ve yapay zeka araç seti.",
      skills: [
        "Figma & FigJam",
        "Adobe Creative Cloud",
        "Claude & Claude Code",
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Supabase & Firebase",
        "Vercel & Git/GitHub"
      ]
    }
  ],

  // Eğitim & Sertifikalar
  education: {
    degree: "Bilgisayar ve Öğretim Teknolojileri Eğitimi (B.Sc.)",
    school: "Orta Doğu Teknik Üniversitesi (ODTÜ / METU)",
    year: "2023",
    location: "Ankara, Türkiye"
  },

  certifications: [
    {
      name: "Google UX Design Professional Certificate",
      issuer: "Google / Coursera",
      details: "UX Araştırması, Wireframing, Prototipleme, Yüksek Doğruluklu UI, Tasarım Sistemleri, Erişilebilirlik ve Kullanılabilirlik Testleri"
    },
    {
      name: "Anthropic Claude Certifications",
      issuer: "Anthropic",
      details: "Claude Code in Action, AI Fluency: Framework and Foundations"
    },
    {
      name: "The AI Filmmaking Pipeline",
      issuer: "Higgsfield AI",
      details: "Üretken yapay zeka ile görsel, storyboard ve sinematik asset üretim pipeline'ı"
    },
    {
      name: "Google Data Analytics Foundations",
      issuer: "Google",
      details: "Veri temelli karar verme süreçleri ve analiz metodolojileri"
    }
  ],

  // Galeri Öğeleri
  designGallery: [
    {
      id: "g-preplab",
      title: "PrepLab.ai — AI CV Koçu",
      category: "Yapay Zeka & Ürün",
      type: "Figma & React • Canlı Ürün",
      year: "2024",
      gradient: "linear-gradient(135deg, #0A84FF 0%, #0040DD 100%)",
      accent: "#60A5FA",
      liveUrl: "https://preplab.ai",
      desc: "Öğrencilere yönelik yapay zeka destekli CV iyileştirme, puanlama ve kariyer hazırlık platformu."
    },
    {
      id: "g-aselsan",
      title: "ASELSAN Komuta Kontrol & Zabbix",
      category: "Savunma & Sistem",
      type: "Figma UI • Operasyonel Sistem",
      year: "2023 - 2026",
      gradient: "linear-gradient(135deg, #064E3B 0%, #022C22 100%)",
      accent: "#34D399",
      desc: "Görev odaklı sadeleştirme ile kritik telemetri ekranlarına tıklama sayısını %40 azaltan arayüz dili."
    },
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
      id: "g-dedektif",
      title: "Dedektif Modu & ReflexRush",
      category: "Oyun & Gamification",
      type: "Game UI & Etkileşim Tasarımı",
      year: "2024",
      gradient: "linear-gradient(135deg, #78350F 0%, #451A03 100%)",
      accent: "#FBBF24",
      desc: "Yapay zeka tabanlı çok oyunculu dedektif oyunu kullanıcı akışları ve refleks odaklı oyun arayüzü."
    },
    {
      id: "g-biomap",
      title: "BioMap Sağlık Arayüzü",
      category: "Sağlık & UI Konsepti",
      type: "Mobile UI • Vücut Haritası",
      year: "2024",
      gradient: "linear-gradient(135deg, #831843 0%, #500724 100%)",
      accent: "#F472B6",
      desc: "İnteraktif 3D vücut haritası üzerinden sağlık semptomlarını ve biyometrik verileri görselleştiren mobil konsept."
    },
    {
      id: "g-liguamind",
      title: "LiguaMind AI",
      category: "Yapay Zeka & Dil",
      type: "TypeScript • Vercel App",
      year: "2026",
      gradient: "linear-gradient(135deg, #3B0764 0%, #581C87 100%)",
      accent: "#C084FC",
      liveUrl: "https://liguamind.vercel.app",
      githubUrl: "https://github.com/Barotello/liguamind",
      desc: "Yapay zeka modelleriyle dil pratiği, seviye tespiti ve kişiselleştirilmiş telaffuz koçluğu."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
