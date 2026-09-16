/**
 * Portfolio Data - Projeler ve Bento Grid İçerikleri
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Emre Yıldız",
    role: "Kıdemli Ürün Tasarımcısı & UI/UX Mimarı",
    tagline: "Apple estetiğinde dijital ürünler, kusursuz mikro-etkileşimler ve tasarım sistemleri inşa ediyorum.",
    status: "Yeni projeler için uygun",
    availableForHire: true,
    location: "İstanbul / Uzaktan (Global)",
    stats: [
      { value: "7+", label: "Yıl Deneyim" },
      { value: "45+", label: "Teslim Edilen Ürün" },
      { value: "1.4M+", label: "Aktif Kullanıcı" },
      { value: "3", label: "Tasarım Ödülü" }
    ],
    socials: {
      github: "https://github.com",
      dribbble: "https://dribbble.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "iletisim@emreyildiz.design"
    }
  },

  projects: [
    {
      id: "aura-pay",
      name: "Aura Pay - Yeni Nesil Finans",
      badge: "Öne Çıkan Proje",
      category: "Fintech & Mobil",
      year: "2025",
      headline: "Finansal deneyimi yeniden tanımlamak.",
      subheadline: "Karmaşık bankacılık işlemlerini, Apple sadeliği ve milisaniyelik akıcılıkla buluşturan yeni nesil dijital cüzdan.",
      primaryColor: "#0A84FF",
      accentGlow: "rgba(10, 132, 255, 0.25)",
      appScreen: {
        title: "Aura Cüzdan",
        balance: "₺148.920,40",
        growth: "+14.8% bu ay",
        cardHolder: "EMRE YILDIZ",
        cardNumber: "•••• 8842",
        cardExpiry: "09/29",
        quickActions: [
          { icon: "arrow-up-right", label: "Gönder" },
          { icon: "plus", label: "Yatır" },
          { icon: "qr-code", label: "Karekod" },
          { icon: "sliders", label: "Bütçe" }
        ],
        recentTransactions: [
          { name: "Apple Store Zorlu", category: "Teknoloji", amount: "-₺4.299,00", time: "14:20" },
          { name: "Serbest Tasarım Hakediş", category: "Gelir", amount: "+₺35.000,00", time: "Dün" },
          { name: "Blue Bottle Coffee", category: "Kahve & Yemek", amount: "-₺185,50", time: "Dün" }
        ]
      },
      bento: {
        topLeft: {
          tag: "Tasarım Mimarisi",
          title: "Kusursuz Görsel Hiyerarşi",
          desc: "Kullanıcının tek bir bakışta tüm finansal durumunu algılayabilmesi için 8pt grid ve özel mikro-kontrast dengesi.",
          badge: "48 MP Netliğinde UX",
          icon: "camera"
        },
        topCenter: {
          tag: "Tasarım Sistemi",
          title: "Aura Engine v2",
          metric: "%60 daha hızlı",
          sub: "6 çekirdekli bileşen mimarisi",
          badge: "Figma Tokens",
          icon: "cpu"
        },
        topRight: {
          tag: "Performans & Etki",
          metric: "4.9 ★",
          highlight: "App Store Puanı",
          sub: "120.000+ aktif kullanıcı değerlendirmesi",
          icon: "star"
        },
        midLeft: {
          tag: "Kullanıcı Akışı",
          metric: "15 saniyede",
          highlight: "Para Transferi",
          desc: "Biyometrik doğrulama ile sürtünmesiz onay akışı.",
          icon: "zap"
        },
        midRight: {
          tag: "Akıllı Zeka",
          title: "Yapay Zeka Destekli Bütçe Asistanı",
          desc: "Harcama alışkanlıklarını analiz ederek birikim hedeflerine rehberlik eden öngörücü model.",
          icon: "sparkles"
        },
        bottomLeft: {
          tag: "Erişilebilirlik",
          metric: "WCAG AAA",
          highlight: "%100 Uyum",
          desc: "Dinamik tipografi boyutlandırma ve yüksek kontrast modu.",
          icon: "eye"
        },
        bottomCenter: {
          tag: "Kusursuz Detaylar",
          title: "Haptik & Mikro-Etkileşim",
          desc: "Her basışta Apple Taptic Engine benzeri tatmin edici geri bildirim.",
          badge: "120Hz Akıcılık",
          icon: "layers"
        },
        bottomRight: {
          tag: "Takdir & Ödül",
          title: "Yılın Finans Uygulaması",
          metric: "Design Awards '24",
          sub: "Best Mobile Experience Seçildi",
          icon: "award"
        }
      }
    },
    {
      id: "pulse-health",
      name: "Pulse - Biyometrik Sağlık",
      badge: "Sağlık & Yaşam",
      category: "HealthTech & iOS",
      year: "2024",
      headline: "Bedeninizin dilini konuşan arayüz.",
      subheadline: "Apple HealthKit entegrasyonlu, kardiyovasküler ritimleri ve uyku evrelerini gerçek zamanlı görselleştiren medikal tasarım.",
      primaryColor: "#30D158",
      accentGlow: "rgba(48, 209, 88, 0.25)",
      appScreen: {
        title: "Pulse Canlı",
        balance: "72 BPM",
        growth: "Dinlenme nabzı normal",
        cardHolder: "SAĞLIK PROFİLİ",
        cardNumber: "EKG STABİL",
        cardExpiry: "V02 MAX 54",
        quickActions: [
          { icon: "activity", label: "EKG Çek" },
          { icon: "moon", label: "Uyku" },
          { icon: "heart", label: "Kalp" },
          { icon: "droplet", label: "Oksijen" }
        ],
        recentTransactions: [
          { name: "Derin Uyku Evresi", category: "7s 42dk", amount: "88 Puan", time: "07:30" },
          { name: "Aralıklı Kardiyo", category: "520 kcal", amount: "42 dk", time: "Dün" },
          { name: "Stres Düzeyi", category: "Optimal", amount: "Düşük", time: "Dün" }
        ]
      },
      bento: {
        topLeft: {
          tag: "Medikal Tasarım",
          title: "Klinik Düzeyde Hassasiyet",
          desc: "Kardiyologlar ve medikal danışmanlarla birlikte geliştirilen renk ve alarm göstergeleri.",
          badge: "FDA Standardı UI",
          icon: "heart"
        },
        topCenter: {
          tag: "Veri İşleme",
          title: "Pulse Bio-Core",
          metric: "1ms Gecikme",
          sub: "Gerçek zamanlı EKG renderı",
          badge: "HealthKit 2",
          icon: "cpu"
        },
        topRight: {
          tag: "Pil & Optimizasyon",
          metric: "36 Saate",
          highlight: "kadar kesintisiz",
          sub: "arka plan biyometrik izleme",
          icon: "battery-charging"
        },
        midLeft: {
          tag: "Anlık Uyarı",
          metric: "< 2 saniyede",
          highlight: "Aritmi Tespiti",
          desc: "Kritik eşik aşıldığında dinamik ada üzerinden doğrudan bildirim.",
          icon: "bell"
        },
        midRight: {
          tag: "Ses & Siri",
          title: "Eller Serbest Sağlık Raporu",
          desc: "Antrenman esnasında Siri ile nabız bölgesi ve tempo sesli yönlendirmesi.",
          icon: "mic"
        },
        bottomLeft: {
          tag: "Gizlilik",
          metric: "On-Device",
          highlight: "%100 Şifreli",
          desc: "Tüm biyometrik veriler yalnızca cihazda işlenir.",
          icon: "shield"
        },
        bottomCenter: {
          tag: "Veri Görselleştirme",
          title: "Dinamik Halka Mimarisi",
          desc: "Apple Fitness tarzı üç boyutlu aktivite ve toparlanma halkaları.",
          badge: "Metal Shaders",
          icon: "circle"
        },
        bottomRight: {
          tag: "Kullanıcı Sadakati",
          title: "Günlük Aktiflik Oranı",
          metric: "%84 Retention",
          sub: "30 günlük retention rekoru",
          icon: "trending-up"
        }
      }
    },
    {
      id: "lumina-studio",
      name: "Lumina - Yaratıcı AI Stüdyosu",
      badge: "Yeni Çıkan",
      category: "Yapay Zeka & Mac/iPad",
      year: "2025",
      headline: "Fikirlerinizi ışık hızında gerçeğe dönüştürün.",
      subheadline: "Tasarımcılar ve 3D sanatçıları için donanım hızlandırmalı, düğüm tabanlı üretken yapay zeka çalışma alanı.",
      primaryColor: "#BF5AF2",
      accentGlow: "rgba(191, 90, 242, 0.25)",
      appScreen: {
        title: "Lumina Canvas",
        balance: "4K Render",
        growth: "RTX & Metal Hızlandırma",
        cardHolder: "PROMPT ENGINE v4",
        cardNumber: "LATENT 1024D",
        cardExpiry: "PRO STUDIO",
        quickActions: [
          { icon: "wand", label: "Üret" },
          { icon: "image", label: "Upscale" },
          { icon: "sliders", label: "Ağırlık" },
          { icon: "share", label: "Dışa Aktar" }
        ],
        recentTransactions: [
          { name: "Cyberpunk Şehir Gece", category: "8K 60FPS", amount: "Hazır", time: "11:05" },
          { name: "Ürün Fotoğraf Çekimi", category: "Studio Işığı", amount: "Tamamlandı", time: "Dün" },
          { name: "3D Vektör Karakter", category: "SVG & GLB", amount: "Kaydedildi", time: "Dün" }
        ]
      },
      bento: {
        topLeft: {
          tag: "Görsel Güç",
          title: "Düğümsüz Akış Mimarisi",
          desc: "Geleneksel karmaşık nod sistemlerini sadeleştiren devrimsel sürükle-bırak tuval arayüzü.",
          badge: "Infinite Canvas",
          icon: "grid"
        },
        topCenter: {
          tag: "AI Motoru",
          title: "Neural Fusion",
          metric: "4 Kat Daha Hızlı",
          sub: "Yerel Neural Engine işlemcisi",
          badge: "Apple Silicon",
          icon: "cpu"
        },
        topRight: {
          tag: "Topluluk",
          metric: "2.5M+",
          highlight: "Oluşturulan Görsel",
          sub: "İlk 3 ayda global sanatçılar tarafından",
          icon: "users"
        },
        midLeft: {
          tag: "Gecikme Süresi",
          metric: "0.4 sn",
          highlight: "Canlı Önizleme",
          desc: "Fırça darbesi atıldığı anda difüzyon katmanı güncellenir.",
          icon: "zap"
        },
        midRight: {
          tag: "Tipografi & UI",
          title: "Minimalist Pro Palet",
          desc: "Gözü yormayan derin monokrom tonlar ve içerik odaklı ışıklandırma.",
          icon: "feather"
        },
        bottomLeft: {
          tag: "Format Desteği",
          metric: "ProRes 4444",
          highlight: "& OpenEXR",
          desc: "Kayıpsız renk derinliği ve alfa kanalı çıktısı.",
          icon: "file-text"
        },
        bottomCenter: {
          tag: "Hassasiyet",
          title: "Apple Pencil Pro Desteği",
          desc: "Sıkıştırma hareketiyle anında araç paleti açma ve haptik direnç.",
          badge: "Pencil Hover",
          icon: "edit-3"
        },
        bottomRight: {
          tag: "Endüstri Etkisi",
          title: "ProductHunt #1",
          metric: "Günün Ürünü",
          sub: "Golden Kitty Adaylığı",
          icon: "award"
        }
      }
    }
  ],

  designGallery: [
    {
      id: "g1",
      title: "Vortex Kripto Terminali",
      category: "Fintech",
      type: "Mobil & Web",
      year: "2024",
      gradient: "linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)",
      accent: "#818CF8",
      desc: "Milisaniyelik emir defteri ve derinlik grafikleriyle profesyonel yatırımcılar için tasarlanmış karanlık mod arayüzü."
    },
    {
      id: "g2",
      title: "Zenith Otomotiv OS",
      category: "İçerik & Otomotiv",
      type: "Araç İçi Arayüz (CarPlay)",
      year: "2025",
      gradient: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
      accent: "#38BDF8",
      desc: "Göz temasını minimuma indiren, dokunsal ve sesli geri bildirimlerle zenginleştirilmiş elektrikli araç gösterge paneli."
    },
    {
      id: "g3",
      title: "Nova Akıllı Ev Hub'ı",
      category: "IoT & Donanım",
      type: "Tablet & Mobil",
      year: "2024",
      gradient: "linear-gradient(135deg, #14532D 0%, #064E3B 100%)",
      accent: "#4ADE80",
      desc: "Matter protokolü uyumlu, 3 boyutlu interaktif ev planı üzerinde sıcaklık ve ışık kontrolü."
    },
    {
      id: "g4",
      title: "Komorebi Meditasyon",
      category: "Yaşam Tarzı",
      type: "iOS & watchOS",
      year: "2025",
      gradient: "linear-gradient(135deg, #451A03 0%, #78350F 100%)",
      accent: "#FBBF24",
      desc: "Japon bahçesi estetiğinde, nefes senkronizasyonu sağlayan haptik ve ambiyans ses tasarımı."
    },
    {
      id: "g5",
      title: "Chronos Tasarım Sistemi",
      category: "Sistem & Kütüphane",
      type: "Figma & Kod Token'ları",
      year: "2024",
      gradient: "linear-gradient(135deg, #3B0764 0%, #581C87 100%)",
      accent: "#C084FC",
      desc: "180+ temel atom, 42 sayfa şablonu ve tam erişilebilirlik (WCAG 2.1 AAA) sertifikalı kurumsal tasarım dili."
    },
    {
      id: "g6",
      title: "Sora Seyahat Rehberi",
      category: "Mobil Deneyim",
      type: "iOS Uygulaması",
      year: "2024",
      gradient: "linear-gradient(135deg, #701A75 0%, #4A044E 100%)",
      accent: "#F472B6",
      desc: "Çevrimdışı haritalar, yerel küratör önerileri ve dinamik hava durumu kartlarıyla kişiselleştirilmiş rota çizimi."
    }
  ],

  skills: [
    { category: "Ürün Tasarımı", items: ["UI/UX Mimarisi", "Mobil Arayüz (iOS / HIG)", "Tasarım Sistemleri (Tokens)", "Etkileşim & Mikro-Animasyon", "Erişilebilirlik (A11y)"] },
    { category: "Araçlar & Yazılımlar", items: ["Figma & FigJam", "Principle & ProtoPie", "Spline (3D Web)", "Cinema 4D", "Adobe After Effects"] },
    { category: "Kod & Uygulama", items: ["HTML5 & Semantik Web", "Modern CSS & Animasyonlar", "JavaScript (ES6+)", "SwiftUI Arayüz Temelleri", "Tailwind & Webflow"] }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
