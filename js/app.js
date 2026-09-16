/**
 * Apple Bento Grid Portfolio Application Logic
 * BARAN DEMİRTAŞ - AI Design Specialist & Product Designer
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const galleryGrid = document.getElementById('galleryGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyToast = document.getElementById('copyToast');

  // Modal Elements
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalContent = document.getElementById('modalContent');

  // 1. Pure Sleek Dark Mode (Black & Blue)
  function initThemeMode() {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('portfolio_theme_mode');
  }

  // 2. Render Professional Experience (CV)
  function renderExperience() {
    const container = document.getElementById('experienceContainer');
    if (!container || !PORTFOLIO_DATA.experience) return;

    container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
      <div class="experience-card">
        <div class="experience-header">
          <div class="experience-role-group">
            <h3 class="experience-role">${exp.role}</h3>
            <div class="experience-company-row">
              <span class="experience-company">${exp.company}</span>
              <span class="experience-location">• ${exp.location}</span>
            </div>
          </div>
          <span class="experience-period">${exp.period}</span>
        </div>

        <ul class="experience-highlights">
          ${exp.highlights.map(item => `
            <li class="experience-item">
              <span class="experience-bullet"></span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  // 3. Render Core Competencies (CV)
  function renderCompetencies() {
    const container = document.getElementById('competenciesContainer');
    if (!container || !PORTFOLIO_DATA.competencies) return;

    container.innerHTML = PORTFOLIO_DATA.competencies.map(comp => `
      <div class="competency-card">
        <div>
          <div class="competency-head">
            <div class="competency-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${getIconPath(comp.icon)}
              </svg>
            </div>
            <h4 class="competency-title">${comp.category}</h4>
          </div>
          <p class="competency-desc">${comp.desc}</p>
        </div>

        <div class="competency-skills-list">
          ${comp.skills.map(skill => `
            <span class="competency-skill-pill">${skill}</span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 4. Render Education & Certifications
  function renderCredentials() {
    const eduContainer = document.getElementById('educationCard');
    const certsContainer = document.getElementById('certificationsContainer');

    if (eduContainer && PORTFOLIO_DATA.education) {
      const edu = PORTFOLIO_DATA.education;
      eduContainer.innerHTML = `
        <div>
          <span class="education-badge">Undergraduate Degree</span>
          <h3 class="education-school">${edu.school}</h3>
          <p class="education-degree">${edu.degree}</p>
        </div>
        <div class="education-meta">
          <span>Graduation: <strong>${edu.year}</strong></span>
          <span>•</span>
          <span>${edu.location}</span>
        </div>
      `;
    }

    if (certsContainer && PORTFOLIO_DATA.certifications) {
      certsContainer.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
        <div class="cert-card">
          <div>
            <div class="cert-issuer">${cert.issuer}</div>
            <h4 class="cert-title">${cert.name}</h4>
          </div>
          <p class="cert-desc">${cert.details}</p>
        </div>
      `).join('');
    }
  }

  // 5. Render Projects Gallery
  function renderGallery(filter = 'all') {
    if (!galleryGrid) return;
    
    const filtered = filter === 'all' 
      ? PORTFOLIO_DATA.designGallery 
      : PORTFOLIO_DATA.designGallery.filter(item => 
          item.category.toLowerCase().includes(filter.toLowerCase()) ||
          item.title.toLowerCase().includes(filter.toLowerCase())
        );

    galleryGrid.innerHTML = filtered.map(item => `
      <div class="gallery-card" onclick="openGalleryModal('${item.id}')" tabindex="0" role="button" aria-label="${item.title}">
        <div class="gallery-card-preview" style="background: ${item.gradient}">
          <div class="card-watermark">${item.title.split('—')[0].trim()}</div>
          <div class="card-floating-badge">${item.year}</div>
        </div>
        <div class="gallery-card-body">
          <div>
            <div class="gallery-tag">${item.category}</div>
            <h3 class="gallery-item-title">${item.title}</h3>
            <p class="gallery-item-desc">${item.desc}</p>
          </div>
          <div class="gallery-card-footer">
            <span class="gallery-tech-pill">${item.type}</span>
            <span class="gallery-action-link" style="color:${item.accent};">${item.liveUrl ? 'Live App ↗' : 'Details →'}</span>
          </div>
        </div>
      </div>
    `).join('');

    // Re-bind interactions & animation on gallery update
    if (window.appleInteractions) {
      window.appleInteractions.refreshCards();
      galleryGrid.querySelectorAll('.gallery-card').forEach((c, idx) => {
        c.classList.add('reveal-element');
        c.style.animationDelay = `${idx * 0.05}s`;
        c.classList.add('is-visible');
      });
    }

    updateCarouselProgress();
  }

  // Apple Fluid Carousel Controls & Progress
  const prevBtn = document.getElementById('prevProjectBtn');
  const nextBtn = document.getElementById('nextProjectBtn');
  const progressBar = document.getElementById('carouselProgressBar');

  function updateCarouselProgress() {
    if (!galleryGrid || !progressBar) return;
    const maxScroll = galleryGrid.scrollWidth - galleryGrid.clientWidth;
    if (maxScroll <= 0) {
      progressBar.style.width = '100%';
      progressBar.style.transform = 'none';
      return;
    }
    const ratio = galleryGrid.scrollLeft / maxScroll;
    const barWidthPercent = Math.max(20, Math.min(60, (galleryGrid.clientWidth / galleryGrid.scrollWidth) * 100));
    progressBar.style.width = `${barWidthPercent}%`;
    const moveRange = (100 - barWidthPercent);
    progressBar.style.transform = `translateX(${ratio * (galleryGrid.clientWidth * (1 - barWidthPercent / 100))}px)`;
  }

  if (galleryGrid) {
    galleryGrid.addEventListener('scroll', updateCarouselProgress, { passive: true });

    // Drag-to-scroll momentum
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    galleryGrid.addEventListener('mousedown', (e) => {
      // ignore if clicking link or button directly
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
      isDown = true;
      startX = e.pageX - galleryGrid.offsetLeft;
      scrollStart = galleryGrid.scrollLeft;
      galleryGrid.style.scrollBehavior = 'auto';
      galleryGrid.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', () => {
      if (!isDown) return;
      isDown = false;
      if (galleryGrid) {
        galleryGrid.style.scrollBehavior = 'smooth';
        galleryGrid.style.cursor = '';
      }
    });

    galleryGrid.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - galleryGrid.offsetLeft;
      const walk = (x - startX) * 1.4;
      galleryGrid.scrollLeft = scrollStart - walk;
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (galleryGrid) {
        galleryGrid.scrollBy({ left: -390, behavior: 'smooth' });
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (galleryGrid) {
        galleryGrid.scrollBy({ left: 390, behavior: 'smooth' });
      }
    });
  }

  // Filter Buttons Listener
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
      if (galleryGrid) {
        galleryGrid.scrollTo({ left: 0, behavior: 'smooth' });
      }
    });
  });

  // 6. Copy Email Handler
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = PORTFOLIO_DATA.profile.email;
      navigator.clipboard.writeText(email).then(() => {
        if (copyToast) {
          copyToast.style.display = 'block';
          setTimeout(() => {
            copyToast.style.display = 'none';
          }, 2600);
        }
      });
    });
  }

  // 7. Modal Handlers
  function openGalleryModal(galleryId) {
    const item = PORTFOLIO_DATA.designGallery.find(g => g.id === galleryId);
    if (!item || !modalOverlay) return;

    modalContent.innerHTML = `
      <div style="height:140px; border-radius:16px; background:${item.gradient}; margin-bottom:20px; display:flex; align-items:center; justify-content:center;">
        <span style="font-size:1.6rem; font-weight:700; color:#fff;">${item.title.split('—')[0].trim()}</span>
      </div>
      <div style="font-size:0.8rem; color:${item.accent}; font-weight:600; text-transform:uppercase; margin-bottom:6px;">
        ${item.category} • ${item.year}
      </div>
      <h3 style="font-size:1.7rem; font-weight:700; color:#fff; margin-bottom:12px;">${item.title}</h3>
      <p style="font-size:1rem; color:var(--text-muted); line-height:1.5; margin-bottom:20px;">
        ${item.desc}
      </p>
      <div style="display:flex; justify-content:space-between; align-items:center; padding-top:16px; border-top:1px solid rgba(255,255,255,0.08); flex-wrap:wrap; gap:10px;">
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          ${item.liveUrl ? `<a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size:0.85rem; padding:8px 16px;">Live App ↗</a>` : ''}
          ${item.githubUrl ? `<a href="${item.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="font-size:0.85rem; padding:8px 16px;">GitHub Repo ↗</a>` : ''}
        </div>
        <button class="btn-secondary" onclick="closeModal()">Close</button>
      </div>
    `;

    modalOverlay.style.display = 'flex';
  }
  window.openGalleryModal = openGalleryModal;

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  }
  window.closeModal = closeModal;

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // SVG Helper
  function getIconPath(name) {
    switch (name) {
      case 'arrow-up-right':
        return '<path d="M7 17L17 7M17 7H7M17 7V17"/>';
      case 'plus':
        return '<path d="M12 5v14M5 12h14"/>';
      case 'sliders':
        return '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>';
      case 'activity':
      case 'heart':
        return '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>';
      case 'wand':
      case 'sparkles':
        return '<path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M17.8 6.2L19 5M3 21l9-9"/>';
      case 'image':
        return '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>';
      case 'share':
        return '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/>';
      case 'layers':
        return '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>';
      case 'cpu':
        return '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>';
      default:
        return '<circle cx="12" cy="12" r="3"/>';
    }
  }

  // Initialize
  initThemeMode();
  renderExperience();
  renderCompetencies();
  renderCredentials();
  renderGallery('all');
});
