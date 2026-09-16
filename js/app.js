/**
 * Apple Bento Grid Portfolio Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentProjectId = PORTFOLIO_DATA.projects[0].id;

  // DOM Elements
  const projectSelect = document.getElementById('projectSelect');
  const bentoGrid = document.getElementById('bentoGrid');
  const galleryGrid = document.getElementById('galleryGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const activeProjectLabel = document.getElementById('activeProjectLabel');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyToast = document.getElementById('copyToast');

  // Modal Elements
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalContent = document.getElementById('modalContent');

  // Tema Renkleri Paleti
  const THEME_COLORS = [
    { name: 'Apple Mavi', color: '#0A84FF', glow: 'rgba(10, 132, 255, 0.28)' },
    { name: 'Neon Yeşil', color: '#30D158', glow: 'rgba(48, 209, 88, 0.28)' },
    { name: 'Mor', color: '#BF5AF2', glow: 'rgba(191, 90, 242, 0.28)' },
    { name: 'Kehribar', color: '#FF9F0A', glow: 'rgba(255, 159, 10, 0.28)' },
    { name: 'Mercan', color: '#FF375F', glow: 'rgba(255, 55, 95, 0.28)' },
    { name: 'Açık Mavi', color: '#64D2FF', glow: 'rgba(100, 210, 255, 0.28)' }
  ];

  let activeCustomTheme = localStorage.getItem('portfolio_theme') || null;

  // 1. Proje Seçiciyi Doldur (Apple Model Selector)
  function initProjectSelector() {
    if (!projectSelect) return;
    projectSelect.innerHTML = '';
    
    PORTFOLIO_DATA.projects.forEach(project => {
      const option = document.createElement('option');
      option.value = project.id;
      option.textContent = project.name;
      projectSelect.appendChild(option);
    });

    projectSelect.value = currentProjectId;
    projectSelect.addEventListener('change', (e) => {
      switchProject(e.target.value);
    });
  }

  // 1.1 Hızlı Proje Haplarını Doldur (Pill Switcher)
  function initProjectPills() {
    const pillsContainer = document.getElementById('projectQuickPills');
    if (!pillsContainer) return;

    pillsContainer.innerHTML = PORTFOLIO_DATA.projects.map(p => `
      <button class="project-pill-btn ${p.id === currentProjectId ? 'active' : ''}" 
              data-project-id="${p.id}"
              onclick="switchProject('${p.id}')">
        <span class="pill-indicator-dot"></span>
        <span>${p.name}</span>
      </button>
    `).join('');
  }

  // 1.2 Tema Renk Paletini Doldur (Navbar)
  function initThemePalette() {
    const navSwatches = document.getElementById('navThemeSwatches');
    const currentColor = activeCustomTheme || THEME_COLORS[0].color;

    if (navSwatches) {
      navSwatches.innerHTML = THEME_COLORS.map(t => `
        <button class="theme-swatch ${t.color === currentColor ? 'active' : ''}" 
                style="background-color: ${t.color};"
                data-color="${t.color}"
                data-glow="${t.glow}"
                title="${t.name}"
                onclick="applyThemeColor('${t.color}', '${t.glow}')">
        </button>
      `).join('');
    }

    if (activeCustomTheme) {
      const match = THEME_COLORS.find(t => t.color === activeCustomTheme) || THEME_COLORS[0];
      applyThemeColor(match.color, match.glow, false);
    }
  }

  // Tema Rengi Uygulama
  window.applyThemeColor = function(color, glow, save = true) {
    activeCustomTheme = color;
    if (save) {
      localStorage.setItem('portfolio_theme', color);
    }

    document.documentElement.style.setProperty('--project-accent', color);
    document.documentElement.style.setProperty('--project-glow', glow);
    document.documentElement.style.setProperty('--apple-blue', color);

    // Aktif buton sınıflarını güncelle
    document.querySelectorAll('.theme-swatch').forEach(el => {
      if (el.dataset.color === color) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  };

  // 2. Proje Değiştirme Fonksiyonu
  window.switchProject = function(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    currentProjectId = projectId;
    if (projectSelect) {
      projectSelect.value = projectId;
    }

    // Proje hapları aktif durumunu güncelle
    document.querySelectorAll('.project-pill-btn').forEach(btn => {
      if (btn.dataset.projectId === projectId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Eğer kullanıcı özel bir tema seçmediyse projenin kendi rengini kullan
    if (!activeCustomTheme) {
      document.documentElement.style.setProperty('--project-accent', project.primaryColor);
      document.documentElement.style.setProperty('--project-glow', project.accentGlow);
    }

    if (activeProjectLabel) {
      activeProjectLabel.textContent = project.name;
    }

    // Bento Grid'i Yeniden Render Et (Geçiş Animasyonuyla)
    renderBentoGrid(project);
    
    // Spotlight kart listesini güncelle
    if (window.spotlight) {
      window.spotlight.refreshCards();
    }
  };

  // 3. Bento Grid Render Motoru: Üstte 3 Kutu, Ortada Büyük Canlı Telefon
  function renderBentoGrid(p) {
    const b = p.bento;
    const s = p.appScreen;

    bentoGrid.innerHTML = `
      <!-- ÜSTTE 3 TANE KUTUCUK -->
      <div class="bento-top-row">
        <!-- KUTU 1: Sol Üst (Kamera / Hassasiyet / Mimari) -->
        <div class="bento-card animate-update" onclick="openProjectModal('${p.id}', 'topLeft')">
          <div class="card-header">
            <div class="card-tag">${b.topLeft.tag}</div>
            <div class="card-title">${b.topLeft.title}</div>
          </div>
          <div class="card-body">
            <div class="card-camera-visual">
              <div class="camera-lens-inner"></div>
            </div>
          </div>
          <div class="card-footer">
            <span class="card-pill-badge">${b.topLeft.badge}</span>
            <span class="card-desc" style="font-size:0.75rem;">${b.topLeft.desc.substring(0, 42)}...</span>
          </div>
        </div>

        <!-- KUTU 2: Üst Orta (A20 / Apple Silicon Çip & Çekirdek Gücü) -->
        <div class="bento-card animate-update" onclick="openProjectModal('${p.id}', 'topCenter')">
          <div class="card-header">
            <div class="card-tag">${b.topCenter.tag}</div>
          </div>
          <div class="card-body">
            <div class="bionic-chip">
              <svg class="chip-apple-logo" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.61 1.34-.55.63-1.03 1.68-.9 2.7.99.08 2.02-.51 2.59-1.19z"/>
              </svg>
              <div class="chip-name">CORE</div>
              <div class="chip-badge">PRO</div>
            </div>
            <div class="card-metric-label" style="font-weight:600; color:#fff; margin-top:10px;">${b.topCenter.metric}</div>
            <div class="card-desc" style="font-size:0.75rem;">${b.topCenter.sub}</div>
          </div>
          <div class="card-footer">
            <span class="card-pill-badge">${b.topCenter.badge}</span>
          </div>
        </div>

        <!-- KUTU 3: Sağ Üst (Pil / Performans / Memnuniyet) -->
        <div class="bento-card animate-update" onclick="openProjectModal('${p.id}', 'topRight')">
          <div class="card-header">
            <div class="card-tag">${b.topRight.tag}</div>
            <div class="card-title">${b.topRight.highlight}</div>
          </div>
          <div class="card-body">
            <div class="card-metric-huge">${b.topRight.metric}</div>
            <div class="battery-icon-wrapper">
              <div class="battery-visual">
                <div class="battery-fill"></div>
              </div>
              <span style="font-size:0.75rem; color:var(--apple-green); font-weight:600;">Optimal</span>
            </div>
          </div>
          <div class="card-footer">
            <span class="card-desc" style="font-size:0.75rem;">${b.topRight.sub}</span>
          </div>
        </div>
      </div>

      <!-- ALTTRA: SOLDA PROJELER LİSTESİ, SAĞDA TELEFON (SPLIT STAGE) -->
      <div class="bento-split-stage">
        <!-- SOL PANEL: PROJELER LİSTESİ -->
        <div class="bento-project-list-panel">
          <div class="panel-header">
            <div class="panel-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
              </svg>
            </div>
            <div>
              <div class="panel-title">Projeler</div>
              <div class="panel-subtitle">İncelemek için seçin</div>
            </div>
          </div>

          <div class="panel-projects-list">
            ${PORTFOLIO_DATA.projects.map(item => `
              <button class="panel-project-item ${item.id === p.id ? 'active' : ''}" 
                      onclick="switchProject('${item.id}')"
                      title="${item.name}">
                <div>
                  <div class="panel-project-name">${item.name.split(' - ')[0]}</div>
                  <div class="panel-project-meta">${item.category} • ${item.year}</div>
                </div>
                <span class="panel-project-dot"></span>
              </button>
            `).join('')}
          </div>

          <div class="panel-active-summary">
            <div style="font-weight:600; color:#fff; margin-bottom:4px;">${p.badge}</div>
            <div>${p.headline}</div>
          </div>
        </div>

        <!-- SAĞ SAHNE: BÜYÜK TELEFON MOCKUP'I -->
        <div class="bento-phone-stage screen-update" id="centerAppCard">
          <div class="stage-ambient-glow"></div>
          
          <!-- Büyük & Net Flagship iPhone -->
          <div class="iphone-frame-lg">
            <!-- Dynamic Island & Durum Çubuğu -->
            <div class="phone-top-bar">
              <span>09:41</span>
              <div class="dynamic-island">
                <div class="island-camera"></div>
                <div class="island-wave"></div>
              </div>
              <span>5G 100%</span>
            </div>

            <!-- Telefon İçi Uygulama Ekranı -->
            <div class="phone-screen">
              <!-- Üst Cüzdan/Profil Kartı -->
              <div class="app-hero-card">
                <div class="app-card-glow"></div>
                <div class="app-balance-label">${s.title}</div>
                <div class="app-balance-val">${s.balance}</div>
                <span class="app-balance-badge">${s.growth}</span>
                <div class="app-card-meta">
                  <span>${s.cardHolder}</span>
                  <span>${s.cardNumber}</span>
                </div>
              </div>

              <!-- Hızlı Aksiyon Butonları -->
              <div class="app-actions-row">
                ${s.quickActions.map(action => `
                  <div class="app-action-btn" title="${action.label}">
                    <svg class="app-action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      ${getIconPath(action.icon)}
                    </svg>
                    <span class="app-action-label">${action.label}</span>
                  </div>
                `).join('')}
              </div>

              <!-- Son İşlemler / Akış Listesi -->
              <div class="app-activity-list">
                <div class="app-activity-header">Canlı Veri & Akış</div>
                ${s.recentTransactions.map(item => `
                  <div class="app-activity-item">
                    <div class="app-item-info">
                      <span class="app-item-title">${item.name}</span>
                      <span class="app-item-cat">${item.category} • ${item.time}</span>
                    </div>
                    <span class="app-item-amount">${item.amount}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Home Gösterge Çubuğu -->
            <div class="phone-home-indicator"></div>
          </div>

          <div style="margin-top: 18px; text-align: center; z-index: 2;">
            <div style="font-size: 1.2rem; font-weight: 700; color: #fff; letter-spacing:-0.02em;">${p.name}</div>
            <div style="font-size: 0.88rem; color: var(--text-muted); margin-top:4px; max-width:480px; line-height:1.45;">${p.subheadline}</div>
          </div>
        </div>
      </div>
    `;
  }

  // SVG Helper
  function getIconPath(name) {
    switch (name) {
      case 'arrow-up-right':
        return '<path d="M7 17L17 7M17 7H7M17 7V17"/>';
      case 'plus':
        return '<path d="M12 5v14M5 12h14"/>';
      case 'qr-code':
        return '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM17 17h4v4h-4z"/>';
      case 'sliders':
        return '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>';
      case 'activity':
      case 'heart':
        return '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>';
      case 'moon':
        return '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
      case 'droplet':
        return '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>';
      case 'wand':
        return '<path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M17.8 6.2L19 5M3 21l9-9"/>';
      case 'image':
        return '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>';
      case 'share':
        return '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/>';
      default:
        return '<circle cx="12" cy="12" r="3"/>';
    }
  }

  // 4. Tasarım Galerisi Render Motoru
  function renderGallery(filter = 'all') {
    if (!galleryGrid) return;
    
    const filtered = filter === 'all' 
      ? PORTFOLIO_DATA.designGallery 
      : PORTFOLIO_DATA.designGallery.filter(item => item.category.toLowerCase().includes(filter.toLowerCase()));

    galleryGrid.innerHTML = filtered.map(item => `
      <div class="gallery-card" onclick="openGalleryModal('${item.id}')">
        <div class="gallery-card-preview" style="background: ${item.gradient}">
          <div style="font-weight:700; font-size:1.4rem; color:#ffffff; opacity:0.85; text-shadow:0 2px 10px rgba(0,0,0,0.5);">
            ${item.title.split(' ')[0]}
          </div>
        </div>
        <div class="gallery-card-body">
          <div>
            <div class="gallery-tag">${item.category} • ${item.year}</div>
            <div class="gallery-item-title">${item.title}</div>
            <div class="gallery-item-desc">${item.desc}</div>
          </div>
          <div style="margin-top:14px; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.75rem; color:var(--text-muted);">${item.type}</span>
            <span style="font-size:0.78rem; color:${item.accent}; font-weight:600;">Detayları Gör →</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Filtre Butonları Dinleyicisi
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });

  // 5. Yetkinlikler Bölümü Render
  function renderSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    if (!skillsContainer) return;

    skillsContainer.innerHTML = PORTFOLIO_DATA.skills.map(s => `
      <div>
        <div class="skill-category-title">${s.category}</div>
        <div class="skill-tags">
          ${s.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // 6. E-posta Kopyalama
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = PORTFOLIO_DATA.profile.socials.email;
      navigator.clipboard.writeText(email).then(() => {
        if (copyToast) {
          copyToast.style.display = 'block';
          setTimeout(() => {
            copyToast.style.display = 'none';
          }, 2500);
        }
      });
    });
  }

  // 7. Modal Yönetimi
  window.openProjectModal = function(projectId, sectionKey) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project || !modalOverlay) return;

    modalContent.innerHTML = `
      <div style="font-size:0.8rem; color:${project.primaryColor}; font-weight:600; text-transform:uppercase; margin-bottom:8px;">
        ${project.category} • ${project.year}
      </div>
      <h3 style="font-size:1.8rem; font-weight:700; color:#fff; margin-bottom:12px;">${project.name}</h3>
      <p style="font-size:1.05rem; color:var(--text-muted); line-height:1.5; margin-bottom:24px;">
        ${project.subheadline}
      </p>
      
      <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:20px; margin-bottom:24px;">
        <h4 style="font-size:0.95rem; font-weight:600; color:#fff; margin-bottom:8px;">Tasarım Yaklaşımı ve Mimari</h4>
        <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.5;">
          ${project.bento.topLeft.desc} Bu proje geliştirilirken Apple İnsan Arayüz Yönergeleri (HIG) esas alınmış, kontrast seviyeleri ve dokunsal geri bildirimler kusursuzlaştırılmıştır.
        </p>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px;">
        <div style="background:rgba(255,255,255,0.03); padding:14px; border-radius:12px; border:1px solid rgba(255,255,255,0.06);">
          <div style="font-size:0.75rem; color:var(--text-muted);">Performans Metriği</div>
          <div style="font-size:1.2rem; font-weight:700; color:#fff; margin-top:4px;">${project.bento.topCenter.metric}</div>
        </div>
        <div style="background:rgba(255,255,255,0.03); padding:14px; border-radius:12px; border:1px solid rgba(255,255,255,0.06);">
          <div style="font-size:0.75rem; color:var(--text-muted);">Kullanıcı Değerlendirmesi</div>
          <div style="font-size:1.2rem; font-weight:700; color:#fff; margin-top:4px;">${project.bento.topRight.metric}</div>
        </div>
      </div>

      <div style="display:flex; justify-content:flex-end;">
        <button class="btn-primary" onclick="closeModal()">Anladım</button>
      </div>
    `;

    modalOverlay.style.display = 'flex';
  };

  window.openGalleryModal = function(galleryId) {
    const item = PORTFOLIO_DATA.designGallery.find(g => g.id === galleryId);
    if (!item || !modalOverlay) return;

    modalContent.innerHTML = `
      <div style="height:140px; border-radius:16px; background:${item.gradient}; margin-bottom:20px; display:flex; align-items:center; justify-content:center;">
        <span style="font-size:1.6rem; font-weight:700; color:#fff;">${item.title}</span>
      </div>
      <div style="font-size:0.8rem; color:${item.accent}; font-weight:600; text-transform:uppercase; margin-bottom:6px;">
        ${item.category} • ${item.year}
      </div>
      <h3 style="font-size:1.7rem; font-weight:700; color:#fff; margin-bottom:12px;">${item.title}</h3>
      <p style="font-size:1rem; color:var(--text-muted); line-height:1.5; margin-bottom:20px;">
        ${item.desc}
      </p>
      <div style="display:flex; justify-content:space-between; align-items:center; padding-top:16px; border-top:1px solid rgba(255,255,255,0.08);">
        <span style="font-size:0.85rem; color:var(--text-muted);">${item.type}</span>
        <button class="btn-secondary" onclick="closeModal()">Kapat</button>
      </div>
    `;

    modalOverlay.style.display = 'flex';
  };

  window.closeModal = function() {
    if (modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Başlangıç Yüklemesi
  initProjectSelector();
  initProjectPills();
  initThemePalette();
  switchProject(currentProjectId);
  renderGallery('all');
  renderSkills();
});
