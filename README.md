# Xai_Portfolio

Apple tasarım estetiğinde hazırlanmış, 9 parçalı (3x3) Bento Grid mimarisine sahip ve tam merkezinde etkileşimli telefon ekranı (mockup) barındıran modern ürün tasarımı & içerik portfolyosu.

## 🌟 Öne Çıkan Özellikler

- **3x3 Bento Grid Mimarisi:**
  - **Merkez Kutu (5. Kutu):** Canlı Dynamic Island animasyonu, bakiye kartı, hızlı aksiyonlar ve hareket akışına sahip gerçekçi iPhone cihaz çerçevesi.
  - **8 Çevre Kutu:** Önem derecesine göre boyutlandırılmış Apple teknik özellik kartları (48 MP Lens, A20 Pro Bionic Çip, Pil & App Store Metriği, Hızlı Şarj Şimşeği, Siri AI Küresi, Erişilebilirlik ve Tasarım Ödülleri).
- **Apple Proje Seçici:** Sayfanın üst kısmındaki açılır liste ile farklı projeler (*Aura Pay*, *Pulse*, *Lumina*) arasında geçiş; hem telefon ekranı hem de bento kartları akıcı animasyonlarla güncellenir.
- **Apple Spotlight Parıltısı:** Kartlar üzerinde fare hareketini takip eden radyal ışık efekti (`js/spotlight.js`).
- **Genişletilebilir Tasarım Galerisi:** Fintech, Otomotiv, IoT, Sağlık ve Tasarım Sistemleri kategorilerine göre filtrelenebilir kartlar.
- **Detay Modalı:** Kartlara tıklandığında açılan vaka analizi penceresi.
- **Sıfır Dış Bağımlılık:** Saf HTML5, Vanilla CSS3 ve modern ES6+ JavaScript.

## 🚀 Başlarken

Projeyi yerel olarak çalıştırmak için:

```bash
# Python ile yerel sunucu başlatma
python -m http.server 3000
```

Tarayıcınızda `http://localhost:3000` adresini açarak portfolyoyu görüntüleyebilirsiniz.

## 📂 Dosya Yapısı

```
portfolio/
├── index.html          # Semantik HTML5 ve bento iskeleti
├── css/
│   ├── style.css       # Apple koyu mod tasarım sistemi ve 3x3 bento grid
│   └── animations.css  # Dynamic island, siri küresi ve mikro-animasyonlar
├── js/
│   ├── data.js         # Proje ve içerik veri kütüphanesi
│   ├── app.js          # Proje değiştirici ve bento render motoru
│   └── spotlight.js    # Kart mouse spotlight takip motoru
└── README.md
```
