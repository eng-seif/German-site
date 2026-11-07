// ========================================================
// German A2 Lernportal - Application Controller
// ========================================================

class GermanPortalApp {
  constructor() {
    this.data = GERMAN_A2_DATA;
    this.currentView = 'dashboard'; // 'dashboard', 'chapter', 'flashcards', 'exam'
    this.currentChapterId = 1;
    this.currentTab = 'grammar'; // 'grammar', 'vocab', 'redemittel', 'quiz'
    
    // Vocab State
    this.vocabSearch = '';
    this.vocabGenderFilter = 'all';

    // Quiz State
    this.quizState = {
      questions: [],
      currentIndex: 0,
      score: 0,
      selectedOption: null,
      answered: false,
      userAnswers: []
    };

    // Flashcards State
    this.allVocab = [];
    this.fcIndex = 0;
    this.fcFlipped = false;

    // Local Storage Progress
    this.progress = this.loadProgress();

    // Audio Engine Configuration
    this.audioSettings = this.loadAudioSettings();
    this.speechRate = this.audioSettings.speed || 0.88;
    this.selectedVoiceId = this.audioSettings.voiceId || 'cloud_de';
    this.germanVoices = [];
    this.currentAudioPlayer = null;

    this.init();
    this.initAudioEngine();
  }

  init() {
    // Collect all vocab for flashcards / stats
    this.data.chapters.forEach(ch => {
      ch.vocabulary.forEach(v => {
        this.allVocab.push({ ...v, chapterNumber: ch.number, chapterTitle: ch.titleDE });
      });
    });

    this.bindGlobalEvents();
    this.initTheme();
    this.render();
  }

  // ----------------------------------------------------
  // LocalStorage Persistence
  // ----------------------------------------------------
  loadProgress() {
    const saved = localStorage.getItem('german_a2_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return {
      completedQuizzes: {}, // chapterId: highestScore
      theme: 'light'
    };
  }

  saveProgress() {
    localStorage.setItem('german_a2_progress', JSON.stringify(this.progress));
  }

  initTheme() {
    const theme = this.progress.theme || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    this.updateThemeButtonIcon(theme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    this.progress.theme = next;
    this.saveProgress();
    this.updateThemeButtonIcon(next);
  }

  updateThemeButtonIcon(theme) {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
      btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      btn.title = theme === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي';
    }
  }

  // ----------------------------------------------------
  // Audio Engine & Persistence
  // ----------------------------------------------------
  loadAudioSettings() {
    const saved = localStorage.getItem('german_a2_audio_settings');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return { speed: 0.88, voiceId: 'cloud_de' };
  }

  saveAudioSettings() {
    localStorage.setItem('german_a2_audio_settings', JSON.stringify({
      speed: this.speechRate,
      voiceId: this.selectedVoiceId
    }));
  }

  initAudioEngine() {
    if ('speechSynthesis' in window) {
      const updateVoices = () => {
        const all = window.speechSynthesis.getVoices();
        this.germanVoices = all.filter(v => 
          v.lang && (v.lang.toLowerCase().startsWith('de') || v.lang.toLowerCase().includes('german'))
        );
        this.populateVoiceSelect();
      };

      updateVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateVoices;
      }
    }
    this.bindAudioModalEvents();
  }

  populateVoiceSelect() {
    const select = document.getElementById('audioVoiceSelect');
    if (!select) return;

    select.innerHTML = '<option value="cloud_de">🌟 نطق ألماني استوديو فائق الجودة (Google Native German HD)</option>';

    this.germanVoices.forEach((voice, index) => {
      const opt = document.createElement('option');
      opt.value = `local_${index}`;
      opt.textContent = `💻 ${voice.name} (${voice.lang})`;
      select.appendChild(opt);
    });

    if (this.selectedVoiceId) {
      select.value = this.selectedVoiceId;
    }
  }

  bindAudioModalEvents() {
    const modal = document.getElementById('audioSettingsModal');
    const openBtn = document.getElementById('audioSettingsBtn');
    const closeBtn = document.getElementById('btnCloseAudioModal');
    const testBtn = document.getElementById('btnTestVoice');
    const voiceSelect = document.getElementById('audioVoiceSelect');
    const speedChips = document.querySelectorAll('#audioSpeedChips .speed-chip');

    if (openBtn && modal) {
      openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
      });
    }

    if (voiceSelect) {
      voiceSelect.addEventListener('change', (e) => {
        this.selectedVoiceId = e.target.value;
        this.saveAudioSettings();
      });
    }

    if (speedChips) {
      speedChips.forEach(chip => {
        const spd = parseFloat(chip.getAttribute('data-speed'));
        chip.classList.toggle('active', Math.abs(spd - this.speechRate) < 0.05);

        chip.addEventListener('click', () => {
          speedChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          this.speechRate = parseFloat(chip.getAttribute('data-speed'));
          this.saveAudioSettings();
        });
      });
    }

    if (testBtn) {
      testBtn.addEventListener('click', () => {
        this.speakGerman('Guten Tag! Ich lerne Deutsch für Niveau A2.', testBtn);
      });
    }
  }

  cleanGermanText(rawText) {
    if (!rawText) return '';
    let text = rawText.trim();
    // Turn slashes into pauses
    text = text.replace(/\s*\/\s*/g, ', ');
    // Remove grammatical abbreviations in parenthesis
    text = text.replace(/\([A-Za-z0-9\s,\/\+-]+\)/g, '');
    // Clean dash prefixes and multiple spaces
    text = text.replace(/^[–\-—]\s*/, '').replace(/\s+/g, ' ').trim();
    return text;
  }

  // ----------------------------------------------------
  // Audio Speech Synthesis & HD Native Stream
  // ----------------------------------------------------
  speakGerman(rawText, btnElement = null) {
    const text = this.cleanGermanText(rawText);
    if (!text) return;

    if (btnElement) {
      btnElement.classList.add('is-speaking');
    }
    const removePulse = () => {
      if (btnElement) {
        btnElement.classList.remove('is-speaking');
      }
    };

    // Stop ongoing sounds
    if (this.currentAudioPlayer) {
      this.currentAudioPlayer.pause();
      this.currentAudioPlayer = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    // 1. If user selected a local SpeechSynthesis German voice
    if (this.selectedVoiceId.startsWith('local_') && 'speechSynthesis' in window) {
      const idx = parseInt(this.selectedVoiceId.replace('local_', ''));
      const voice = this.germanVoices[idx];
      if (voice) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = voice;
        utterance.lang = voice.lang || 'de-DE';
        utterance.rate = this.speechRate;
        utterance.onend = removePulse;
        utterance.onerror = removePulse;
        window.speechSynthesis.speak(utterance);
        return;
      }
    }

    // 2. Default & Highest Fidelity: Studio Native German HD Stream (Google de-DE)
    try {
      const encoded = encodeURIComponent(text);
      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=de&client=tw-ob&q=${encoded}`;
      const audio = new Audio(audioUrl);
      audio.playbackRate = this.speechRate;
      this.currentAudioPlayer = audio;

      audio.onended = removePulse;
      audio.onerror = () => {
        this.fallbackLocalSpeech(text, removePulse);
      };

      audio.play().catch(() => {
        this.fallbackLocalSpeech(text, removePulse);
      });
    } catch (e) {
      this.fallbackLocalSpeech(text, removePulse);
    }
  }

  fallbackLocalSpeech(text, onDone) {
    if (!('speechSynthesis' in window)) {
      if (onDone) onDone();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = this.speechRate;
    if (this.germanVoices.length > 0) {
      utterance.voice = this.germanVoices[0];
    }
    utterance.onend = onDone;
    utterance.onerror = onDone;
    window.speechSynthesis.speak(utterance);
  }

  // ----------------------------------------------------
  // Event Listeners
  // ----------------------------------------------------
  bindGlobalEvents() {
    // Theme toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        this.toggleTheme();
      });
    }

    // Logo click -> go home
    const logoSec = document.querySelector('.logo-section');
    if (logoSec) {
      logoSec.addEventListener('click', () => {
        this.closeMobileDrawer();
        this.navigate('dashboard');
      });
    }

    // Mobile Hamburger & Drawer controls
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerCloseBtn = document.getElementById('drawerCloseBtn');

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        this.toggleMobileDrawer();
      });
    }
    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', () => {
        this.closeMobileDrawer();
      });
    }
    if (drawerOverlay) {
      drawerOverlay.addEventListener('click', () => {
        this.closeMobileDrawer();
      });
    }

    // Navigation links in sidebar
    document.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', (e) => {
        this.closeMobileDrawer();
        const target = el.getAttribute('data-nav');
        if (target.startsWith('chapter-')) {
          const chId = parseInt(target.replace('chapter-', ''));
          this.navigateToChapter(chId);
        } else {
          this.navigate(target);
        }
      });
    });

    // Mobile Bottom Bar Navigation
    document.querySelectorAll('[data-bottom-nav]').forEach(el => {
      el.addEventListener('click', () => {
        const target = el.getAttribute('data-bottom-nav');
        if (target === 'chapters') {
          this.toggleMobileDrawer();
        } else if (target === 'dashboard') {
          this.closeMobileDrawer();
          this.navigate('dashboard');
        } else if (target === 'flashcards') {
          this.closeMobileDrawer();
          this.navigate('flashcards');
        } else if (target === 'exam') {
          this.closeMobileDrawer();
          this.navigate('exam');
        }
      });
    });
  }

  toggleMobileDrawer(forceState) {
    const sidebar = document.querySelector('.app-sidebar');
    const overlay = document.getElementById('drawerOverlay');
    if (!sidebar) return;
    const shouldOpen = forceState !== undefined ? forceState : !sidebar.classList.contains('drawer-open');
    sidebar.classList.toggle('drawer-open', shouldOpen);
    if (overlay) overlay.classList.toggle('active', shouldOpen);
    document.body.style.overflow = shouldOpen && window.innerWidth <= 992 ? 'hidden' : '';
  }

  closeMobileDrawer() {
    this.toggleMobileDrawer(false);
  }

  navigate(view) {
    this.currentView = view;
    if (view === 'flashcards') {
      this.fcIndex = 0;
      this.fcFlipped = false;
    } else if (view === 'exam') {
      this.startMasterExam();
    }
    this.updateSidebarActiveState();
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToChapter(chId, tab = 'grammar') {
    this.currentView = 'chapter';
    this.currentChapterId = chId;
    this.currentTab = tab;
    this.vocabSearch = '';
    this.vocabGenderFilter = 'all';

    if (tab === 'quiz') {
      this.startChapterQuiz(chId);
    }

    this.updateSidebarActiveState();
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateSidebarActiveState() {
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.remove('active');
    });

    let activeNav = this.currentView;
    if (this.currentView === 'chapter') {
      activeNav = `chapter-${this.currentChapterId}`;
    }

    const activeEl = document.querySelector(`[data-nav="${activeNav}"]`);
    if (activeEl) {
      activeEl.classList.add('active');
    }

    // Update bottom nav active state
    document.querySelectorAll('.bottom-nav-item').forEach(el => {
      el.classList.remove('active');
    });
    let bottomTarget = this.currentView;
    if (this.currentView === 'chapter') {
      bottomTarget = 'chapters';
    }
    const activeBottomEl = document.querySelector(`[data-bottom-nav="${bottomTarget}"]`);
    if (activeBottomEl) {
      activeBottomEl.classList.add('active');
    }
  }

  // ----------------------------------------------------
  // Render Orchestrator
  // ----------------------------------------------------
  render() {
    const mainContainer = document.getElementById('mainContent');
    if (!mainContainer) return;

    switch (this.currentView) {
      case 'dashboard':
        mainContainer.innerHTML = this.renderDashboard();
        this.bindDashboardEvents();
        break;
      case 'chapter':
        mainContainer.innerHTML = this.renderChapterView();
        this.bindChapterEvents();
        break;
      case 'flashcards':
        mainContainer.innerHTML = this.renderFlashcardsView();
        this.bindFlashcardsEvents();
        break;
      case 'exam':
        mainContainer.innerHTML = this.renderExamView();
        this.bindQuizEvents();
        break;
    }
  }

  // ----------------------------------------------------
  // 1. Dashboard View
  // ----------------------------------------------------
  renderDashboard() {
    const totalWords = this.allVocab.length;
    const completedCount = Object.keys(this.progress.completedQuizzes || {}).length;
    const totalChapters = this.data.chapters.length;
    let totalGrammar = 0;
    this.data.chapters.forEach(ch => { totalGrammar += ch.grammar.length; });

    let chaptersCardsHtml = '';
    this.data.chapters.forEach(ch => {
      const highestScore = this.progress.completedQuizzes[ch.id];
      const isPassed = highestScore !== undefined && highestScore >= 70;

      chaptersCardsHtml += `
        <div class="chapter-card" data-open-chapter="${ch.id}">
          <div class="chapter-top">
            <span class="chapter-pill" style="background: ${ch.themeColor}15; color: ${ch.themeColor};">
              ${ch.badge}
            </span>
            <div class="chapter-num" style="background: ${ch.themeColor};">
              ${ch.number}
            </div>
          </div>
          <h3 class="chapter-title-de">${ch.titleDE}</h3>
          <p class="chapter-title-ar">${ch.titleAR}</p>
          <p class="chapter-desc">${ch.desc}</p>
          <div class="chapter-footer">
            <span style="color: var(--text-muted);">
              📚 ${ch.grammar.length} قواعد • 🗂️ ${ch.vocabulary.length} كلمة • ❓ ${ch.quiz.length} أسئلة
            </span>
            <span class="btn-open-chapter">
              ${isPassed ? `✅ تم النجاح (${highestScore}%)` : 'ابدأ المذاكرة &larr;'}
            </span>
          </div>
        </div>
      `;
    });

    return `
      <!-- Hero Banner -->
      <section class="hero-card">
        <h2 class="hero-title">Willkommen! مرحباً بك في بوابة الألمانية A2 🇩🇪</h2>
        <p class="hero-subtitle">
          موقعك التفاعلي المتكامل لمذاكرة وفهم كتاب Netzwerk neu A2 (المستوى A2.1 كاملاً من الدرس الأول إلى الدرس السادس). شروحات مبسطة جداً، اختبارات فورية ذكية، بطاقات كلمات ناطقة، وتدريب متكامل على المحادثات.
        </p>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-value">${totalChapters}</div>
            <div class="stat-label">دروس تفاعلية</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${totalWords}</div>
            <div class="stat-label">مفردة وكلمة ناطقة ومترجمة</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${totalGrammar}</div>
            <div class="stat-label">قواعد مشروحة بالتفصيل</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${completedCount} / ${totalChapters}</div>
            <div class="stat-label">اختبارات مكتملة</div>
          </div>
        </div>
      </section>

      <!-- Chapters List -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <h3 style="font-size: 1.35rem; font-weight: 800;">📖 الدروس المقررة في Netzwerk neu A2</h3>
        <span style="color: var(--text-muted); font-size: 0.9rem;">اختر درساً للبدء في المذاكرة</span>
      </div>

      <div class="chapters-grid">
        ${chaptersCardsHtml}
      </div>

      <!-- Quick Learning Tools Section -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-top: 1rem;">
        <div class="nav-card" style="cursor: pointer;" data-nav="flashcards">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🎴</div>
          <h4 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.35rem;">مدرب البطاقات التفاعلية (Flashcards)</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">
            راجع واحفظ جميع الكلمات والأفعال مع الاستماع للنطق الألماني السليم وتقليب البطاقة لتأكيد الحفظ.
          </p>
          <span style="color: var(--primary); font-weight: 700; font-size: 0.9rem;">تمرن الآن &larr;</span>
        </div>

        <div class="nav-card" style="cursor: pointer;" data-nav="exam">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🏆</div>
          <h4 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.35rem;">الاختبار الشامل للدروس (Master Test)</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">
            اختبر جاهزيتك لمستوى A2 من خلال اختبار شامل يجمع أسئلة القواعد والمفردات من الدروس الأربعة معاً.
          </p>
          <span style="color: var(--primary); font-weight: 700; font-size: 0.9rem;">ابدأ الاختبار الشامل &larr;</span>
        </div>
      </div>
    `;
  }

  bindDashboardEvents() {
    document.querySelectorAll('[data-open-chapter]').forEach(el => {
      el.addEventListener('click', () => {
        const id = parseInt(el.getAttribute('data-open-chapter'));
        this.navigateToChapter(id);
      });
    });

    // Scope to the main content only; the sidebar [data-nav] items already
    // have their own handler (otherwise a second handler fires on every sidebar click)
    document.querySelectorAll('#mainContent [data-nav]').forEach(el => {
      el.addEventListener('click', (e) => {
        const target = el.getAttribute('data-nav');
        this.navigate(target);
      });
    });
  }

  // ----------------------------------------------------
  // 2. Chapter View
  // ----------------------------------------------------
  renderChapterView() {
    const ch = this.data.chapters.find(c => c.id === this.currentChapterId);
    if (!ch) return '';

    let tabContentHtml = '';
    switch (this.currentTab) {
      case 'grammar':
        tabContentHtml = this.renderGrammarTab(ch);
        break;
      case 'vocab':
        tabContentHtml = this.renderVocabTab(ch);
        break;
      case 'redemittel':
        tabContentHtml = this.renderRedemittelTab(ch);
        break;
      case 'quiz':
        tabContentHtml = this.renderQuizTab(ch);
        break;
    }

    return `
      <!-- Chapter Header -->
      <section class="chapter-header">
        <div class="chapter-banner">
          <div class="ch-titles">
            <span class="chapter-pill" style="background: ${ch.themeColor}15; color: ${ch.themeColor}; margin-bottom: 0.5rem; display: inline-block;">
              ${ch.badge}
            </span>
            <h2>${ch.titleDE}</h2>
            <p>${ch.titleAR}</p>
          </div>
          <button class="btn-icon" id="btnAudioTitle" title="استمع لاسم الدرس" style="width: 46px; height: 46px; font-size: 1.3rem;">
            🔊
          </button>
        </div>

        <div style="background: var(--bg-surface-alt); padding: 0.85rem 1.15rem; border-radius: var(--radius-md); font-size: 0.92rem;">
          <strong style="color: var(--text-main);">🎯 أهداف الدرس (Lernziele):</strong>
          <ul style="margin-right: 1.5rem; margin-top: 0.35rem; color: var(--text-muted); display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.4rem;">
            ${ch.objectives.map(obj => `<li>${obj}</li>`).join('')}
          </ul>
        </div>

        <!-- Navigation Tabs -->
        <div class="tabs-nav">
          <button class="tab-btn ${this.currentTab === 'grammar' ? 'active' : ''}" data-tab="grammar">
            📚 ملخص القواعد الشامل (${ch.grammar.length})
          </button>
          <button class="tab-btn ${this.currentTab === 'vocab' ? 'active' : ''}" data-tab="vocab">
            🗂️ جدول الكلمات والمفردات (${ch.vocabulary.length})
          </button>
          <button class="tab-btn ${this.currentTab === 'redemittel' ? 'active' : ''}" data-tab="redemittel">
            💬 المحادثات والتعبيرات (Redemittel)
          </button>
          <button class="tab-btn ${this.currentTab === 'quiz' ? 'active' : ''}" data-tab="quiz">
            ❓ اختبار الدرس التفاعلي (Quiz)
          </button>
        </div>
      </section>

      <!-- Active Tab Content -->
      <section class="tab-content">
        ${tabContentHtml}
      </section>
    `;
  }

  bindChapterEvents() {
    const ch = this.data.chapters.find(c => c.id === this.currentChapterId);

    // Audio for chapter title
    const btnAudioTitle = document.getElementById('btnAudioTitle');
    if (btnAudioTitle && ch) {
      btnAudioTitle.addEventListener('click', () => {
        this.speakGerman(ch.titleDE, btnAudioTitle);
      });
    }

    // Tabs switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.currentTab = tab;
        if (tab === 'quiz') {
          this.startChapterQuiz(this.currentChapterId);
        }
        this.render();
      });
    });

    // Sub-tab specific bindings
    if (this.currentTab === 'vocab') {
      this.bindVocabTabEvents();
    } else if (this.currentTab === 'redemittel') {
      this.bindRedemittelEvents();
    } else if (this.currentTab === 'quiz') {
      this.bindQuizEvents();
    } else if (this.currentTab === 'grammar') {
      this.bindGrammarAudioEvents();
    }
  }

  // ----------------------------------------------------
  // 2.A Grammar Tab
  // ----------------------------------------------------
  renderGrammarTab(ch) {
    let html = '<div class="grammar-container">';
    ch.grammar.forEach(item => {
      html += `
        <div class="grammar-card">
          <div class="grammar-header">
            <h3 class="grammar-title">
              <span>📖</span>
              ${item.title}
            </h3>
            <span class="grammar-badge">${item.badge}</span>
          </div>

          <div class="grammar-explanation">
            ${item.explanation}
          </div>

          ${item.rules ? item.rules.map(r => `
            <div class="rule-box">
              <h4>📌 ${r.rule}</h4>
              <p>${r.detail}</p>
              ${r.points ? `
                <ul>
                  ${r.points.map(pt => `<li>${pt}</li>`).join('')}
                </ul>
              ` : ''}
              ${r.table ? `<div style="overflow-x: auto;">${r.table}</div>` : ''}
              ${r.examples ? `
                <div class="examples-list">
                  ${r.examples.map(ex => `
                    <div class="example-item">
                      <div class="ex-de">
                        ${ex.de.replace(ex.highlight, `<span class="ex-highlight">${ex.highlight}</span>`)}
                      </div>
                      <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <span class="ex-ar">${ex.ar}</span>
                        <button class="btn-audio" data-speak="${ex.de}" title="استمع للجملة">🔊</button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          `).join('') : ''}

          ${item.tip ? `
            <div class="tip-box">
              <span style="font-size: 1.3rem;">💡</span>
              <div>
                <strong>ملحوظة ذهبية:</strong> ${item.tip}
              </div>
            </div>
          ` : ''}
        </div>
      `;
    });
    html += '</div>';
    return html;
  }

  bindGrammarAudioEvents() {
    document.querySelectorAll('[data-speak]').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-speak');
        this.speakGerman(text, btn);
      });
    });
  }

  // ----------------------------------------------------
  // 2.B Vocabulary Tab
  // ----------------------------------------------------
  renderVocabTab(ch) {
    // Filter words
    const filteredVocab = ch.vocabulary.filter(v => {
      const matchSearch = this.vocabSearch === '' || 
        v.word.toLowerCase().includes(this.vocabSearch.toLowerCase()) ||
        v.meaning.includes(this.vocabSearch) ||
        (v.example && v.example.toLowerCase().includes(this.vocabSearch.toLowerCase()));

      let matchGender = true;
      if (this.vocabGenderFilter !== 'all') {
        if (this.vocabGenderFilter === 'der') matchGender = v.gender === 'der';
        else if (this.vocabGenderFilter === 'die') matchGender = v.gender === 'die';
        else if (this.vocabGenderFilter === 'das') matchGender = v.gender === 'das';
        else if (this.vocabGenderFilter === 'verb') matchGender = v.type === 'Verb';
        else if (this.vocabGenderFilter === 'adj') matchGender = v.type === 'Adjektiv';
      }
      return matchSearch && matchGender;
    });

    let vocabCardsHtml = '';
    if (filteredVocab.length === 0) {
      vocabCardsHtml = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-surface); border-radius: var(--radius-lg);">
          <p style="font-size: 1.2rem; color: var(--text-muted);">لم يتم العثور على كلمات مطابقة للبحث 🔍</p>
        </div>
      `;
    } else {
      filteredVocab.forEach(v => {
        let genderClass = 'gender-der';
        let genderLabel = v.gender;
        if (v.gender === 'die') { genderClass = 'gender-die'; genderLabel = 'die'; }
        else if (v.gender === 'das') { genderClass = 'gender-das'; genderLabel = 'das'; }
        else if (v.type === 'Verb') { genderClass = 'gender-verb'; genderLabel = 'Verb'; }
        else if (v.type === 'Adjektiv') { genderClass = 'gender-adj'; genderLabel = 'Adj'; }
        else if (v.gender === '-') { genderClass = 'gender-other'; genderLabel = v.type === 'Ausdruck' ? 'Ausdruck' : v.type; }

        vocabCardsHtml += `
          <div class="vocab-card">
            <div class="vocab-top">
              <span class="vocab-gender-tag ${genderClass}">${genderLabel}</span>
              <button class="btn-audio" data-speak-word="${v.word.replace('/', '')}" title="استمع لنطق الكلمة">🔊</button>
            </div>
            <div class="vocab-word">${v.word}</div>
            ${v.plural && v.plural !== '-' ? `<div class="vocab-plural">Plural: ${v.plural}</div>` : '<div class="vocab-plural">&nbsp;</div>'}
            <div class="vocab-meaning">${v.meaning}</div>
            ${v.example ? `
              <div class="vocab-example-box">
                <span class="vex-de">${v.example}</span>
                <span class="vex-ar">${v.example_ar}</span>
              </div>
            ` : ''}
          </div>
        `;
      });
    }

    return `
      <!-- Vocab Filters and Controls -->
      <div class="vocab-controls">
        <div class="search-box">
          <input type="text" class="search-input" id="vocabSearchInput" placeholder="ابحث عن كلمة بالألمانية أو العربية..." value="${this.vocabSearch}">
          <span class="search-icon">🔍</span>
        </div>
        <div class="gender-filters">
          <button class="filter-btn ${this.vocabGenderFilter === 'all' ? 'active' : ''}" data-filter="all">الكل</button>
          <button class="filter-btn ${this.vocabGenderFilter === 'der' ? 'active' : ''}" data-filter="der">der (مذكر)</button>
          <button class="filter-btn ${this.vocabGenderFilter === 'die' ? 'active' : ''}" data-filter="die">die (مؤنث)</button>
          <button class="filter-btn ${this.vocabGenderFilter === 'das' ? 'active' : ''}" data-filter="das">das (محايد)</button>
          <button class="filter-btn ${this.vocabGenderFilter === 'verb' ? 'active' : ''}" data-filter="verb">أفعال Verben</button>
          <button class="filter-btn ${this.vocabGenderFilter === 'adj' ? 'active' : ''}" data-filter="adj">صفات Adjektive</button>
        </div>
      </div>

      <!-- Vocab Cards Grid -->
      <div class="vocab-grid">
        ${vocabCardsHtml}
      </div>
    `;
  }

  bindVocabTabEvents() {
    const searchInput = document.getElementById('vocabSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.vocabSearch = e.target.value;
        const ch = this.data.chapters.find(c => c.id === this.currentChapterId);
        document.querySelector('.tab-content').innerHTML = this.renderVocabTab(ch);
        this.bindVocabTabEvents();
        // Restore focus to input
        const newInp = document.getElementById('vocabSearchInput');
        newInp.focus();
        newInp.selectionStart = newInp.selectionEnd = newInp.value.length;
      });
    }

    document.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.vocabGenderFilter = btn.getAttribute('data-filter');
        const ch = this.data.chapters.find(c => c.id === this.currentChapterId);
        document.querySelector('.tab-content').innerHTML = this.renderVocabTab(ch);
        this.bindVocabTabEvents();
      });
    });

    document.querySelectorAll('[data-speak-word]').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-speak-word');
        this.speakGerman(text, btn);
      });
    });
  }

  // ----------------------------------------------------
  // 2.C Redemittel Tab
  // ----------------------------------------------------
  renderRedemittelTab(ch) {
    let html = '<div class="redemittel-container">';
    ch.redemittel.forEach(cat => {
      html += `
        <div class="redemittel-card">
          <h3 class="redemittel-cat-title">🗨️ ${cat.category}</h3>
          <div class="phrases-list">
            ${cat.items.map(item => `
              <div class="phrase-row">
                <div class="phrase-de">${item.de}</div>
                <div style="display: flex; align-items: center; gap: 0.85rem;">
                  <span class="phrase-ar">${item.ar}</span>
                  <button class="btn-audio" data-speak-phrase="${item.de}" title="استمع لنطق الجملة">🔊</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });
    html += '</div>';
    return html;
  }

  bindRedemittelEvents() {
    document.querySelectorAll('[data-speak-phrase]').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-speak-phrase');
        this.speakGerman(text, btn);
      });
    });
  }

  // ----------------------------------------------------
  // 2.D Quiz Tab / System
  // ----------------------------------------------------
  startChapterQuiz(chapterId) {
    const ch = this.data.chapters.find(c => c.id === chapterId);
    if (!ch) return;

    this.quizState = {
      isMasterExam: false,
      title: `اختبار الدرس: ${ch.titleDE}`,
      chapterId: ch.id,
      questions: [...ch.quiz],
      currentIndex: 0,
      score: 0,
      selectedOption: null,
      answered: false,
      userAnswers: []
    };
  }

  startMasterExam() {
    // Combine questions from all 4 chapters
    let allQuestions = [];
    this.data.chapters.forEach(ch => {
      ch.quiz.forEach(q => {
        allQuestions.push({ ...q, chapterName: ch.titleDE });
      });
    });
    // Shuffle questions
    allQuestions.sort(() => Math.random() - 0.5);

    this.quizState = {
      isMasterExam: true,
      title: "🏆 الاختبار الشامل لمستوى Deutsch A2 (الدروس 1-6)",
      questions: allQuestions,
      currentIndex: 0,
      score: 0,
      selectedOption: null,
      answered: false,
      userAnswers: []
    };
  }

  renderQuizTab() {
    return this.renderQuizUI();
  }

  renderExamView() {
    return this.renderQuizUI();
  }

  renderQuizUI() {
    const { questions, currentIndex, score, answered, selectedOption } = this.quizState;

    // Check if finished
    if (currentIndex >= questions.length) {
      return this.renderQuizResults();
    }

    const currentQ = questions[currentIndex];
    const progressPercent = Math.round(((currentIndex) / questions.length) * 100);

    const letters = ['A', 'B', 'C', 'D'];

    return `
      <div class="quiz-wrapper">
        <div class="quiz-header">
          <div>
            <h3 style="font-size: 1.3rem; font-weight: 800;">${this.quizState.title}</h3>
            <span style="font-size: 0.85rem; color: var(--text-muted);">
              السؤال ${currentIndex + 1} من إجمالي ${questions.length}
            </span>
          </div>
          <div class="quiz-progress-text">
            النتيجة الحالية: ${score} نقطة
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-fill" style="width: ${progressPercent}%;"></div>
        </div>

        <div class="question-box">
          <div class="question-text">${currentQ.question}</div>
          <div class="options-grid">
            ${currentQ.options.map((opt, idx) => {
              let optClass = '';
              if (answered) {
                optClass = 'disabled ';
                if (idx === currentQ.correct) {
                  optClass += 'correct';
                } else if (idx === selectedOption) {
                  optClass += 'wrong';
                }
              }

              return `
                <button class="option-btn ${optClass}" data-opt-idx="${idx}" ${answered ? 'disabled' : ''}>
                  <span class="option-letter">${letters[idx]}</span>
                  <span style="flex: 1; direction: ltr; text-align: left;">${opt}</span>
                </button>
              `;
            }).join('')}
          </div>

          <!-- Explanation Feedback Box -->
          <div class="quiz-feedback" id="quizFeedbackBox" style="${answered ? 'display: block;' : 'display: none;'}">
            ${answered ? `
              <div class="feedback-title ${selectedOption === currentQ.correct ? 'feedback-success' : 'feedback-error'}">
                ${selectedOption === currentQ.correct ? '🎉 إجابة صحيحة! أحسنت!' : '❌ إجابة خاطئة! انتبه للقاعدة:'}
              </div>
              <div class="feedback-text">
                ${currentQ.explanation}
              </div>
            ` : ''}
          </div>

          <!-- Next Button -->
          ${answered ? `
            <div class="quiz-actions">
              <button class="btn-primary" id="btnNextQuizQ">
                ${currentIndex + 1 < questions.length ? 'السؤال التالي &larr;' : 'عرض النتيجة النهائية 🏆'}
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  renderQuizResults() {
    const { questions, score, isMasterExam, chapterId } = this.quizState;
    const total = questions.length;
    const percentage = Math.round((score / total) * 100);
    const passed = percentage >= 70;

    // Save score in localStorage
    if (!isMasterExam && chapterId) {
      if (!this.progress.completedQuizzes[chapterId] || percentage > this.progress.completedQuizzes[chapterId]) {
        this.progress.completedQuizzes[chapterId] = percentage;
        this.saveProgress();
      }
    }

    return `
      <div class="quiz-wrapper">
        <div class="quiz-result-card">
          <div class="result-icon">${passed ? '🎉' : '📖'}</div>
          <h2 style="font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem;">
            ${passed ? 'مبروك! لقد اجتزت الاختبار بنجاح!' : 'نتيجة جيدة، لكنك تحتاج إلى مراجعة بعض النقاط!'}
          </h2>
          <div class="result-score">${percentage}%</div>
          <p class="result-msg">
            حصلت على <strong>${score}</strong> من إجمالي <strong>${total}</strong> إجابة صحيحة.
            ${passed 
              ? 'أداؤك متميز جداً ويدل على استيعابك الرائع للقواعد والمفردات في هذا المستوى!'
              : 'لا تقلق! يمكنك مراجعة ملخص القواعد وجدول الكلمات ثم إعادة الاختبار لتحقيق نسبة 100%.'}
          </p>

          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <button class="btn-primary" id="btnRestartQuiz">
              🔄 إعادة هذا الاختبار من البداية
            </button>
            <button class="btn-secondary" id="btnBackToLesson">
              📚 العودة للدرس
            </button>
          </div>
        </div>
      </div>
    `;
  }

  bindQuizEvents() {
    // Option Click
    document.querySelectorAll('[data-opt-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.quizState.answered) return;
        const optIdx = parseInt(btn.getAttribute('data-opt-idx'));
        this.handleQuizAnswer(optIdx);
      });
    });

    // Next Question Click
    const btnNext = document.getElementById('btnNextQuizQ');
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        this.quizState.currentIndex++;
        this.quizState.answered = false;
        this.quizState.selectedOption = null;
        this.render();
      });
    }

    // Restart Quiz Click
    const btnRestart = document.getElementById('btnRestartQuiz');
    if (btnRestart) {
      btnRestart.addEventListener('click', () => {
        if (this.quizState.isMasterExam) {
          this.startMasterExam();
        } else {
          this.startChapterQuiz(this.quizState.chapterId);
        }
        this.render();
      });
    }

    // Back to Lesson Click
    const btnBack = document.getElementById('btnBackToLesson');
    if (btnBack) {
      btnBack.addEventListener('click', () => {
        if (this.quizState.isMasterExam) {
          this.navigate('dashboard');
        } else {
          this.navigateToChapter(this.quizState.chapterId, 'grammar');
        }
      });
    }
  }

  handleQuizAnswer(selectedIdx) {
    const { questions, currentIndex } = this.quizState;
    const currentQ = questions[currentIndex];
    const isCorrect = selectedIdx === currentQ.correct;

    this.quizState.answered = true;
    this.quizState.selectedOption = selectedIdx;
    if (isCorrect) {
      this.quizState.score++;
    }

    this.render();
  }

  // ----------------------------------------------------
  // 3. Flashcards View
  // ----------------------------------------------------
  renderFlashcardsView() {
    if (this.allVocab.length === 0) return '';
    const word = this.allVocab[this.fcIndex];

    let genderColor = 'var(--der-color)';
    let genderBg = 'var(--der-bg)';
    if (word.gender === 'die') { genderColor = 'var(--die-color)'; genderBg = 'var(--die-bg)'; }
    else if (word.gender === 'das') { genderColor = 'var(--das-color)'; genderBg = 'var(--das-bg)'; }

    return `
      <div class="flashcards-container">
        <div style="text-align: center; margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.85rem; font-weight: 800; margin-bottom: 0.35rem;">🎴 بطاقات الاستذكار التفاعلية (Flashcards)</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">
            البطاقة ${this.fcIndex + 1} من ${this.allVocab.length} • اضغط على البطاقة لتقليبها ورؤية المعنى بالعربية 🔄
          </p>
        </div>

        <div class="flashcard-scene" id="flashcardScene">
          <div class="flashcard ${this.fcFlipped ? 'is-flipped' : ''}" id="flashcardCard">
            <!-- Front Face: German -->
            <div class="card-face card-face-front">
              <span class="fc-hint">الدرس ${word.chapterNumber}: ${word.chapterTitle} • انقر لقلب البطاقة</span>
              <span class="vocab-gender-tag" style="background: ${genderBg}; color: ${genderColor}; margin-bottom: 1rem;">
                ${word.gender !== '-' ? word.gender : word.type}
              </span>
              <div class="fc-word">${word.word}</div>
              ${word.plural && word.plural !== '-' ? `<div class="fc-plural">Plural: ${word.plural}</div>` : ''}
              
              <button class="btn-audio" id="btnFcAudio" title="استمع للنطق" style="width: 44px; height: 44px; font-size: 1.25rem; margin-top: 0.75rem;">
                🔊
              </button>
            </div>

            <!-- Back Face: Arabic & Example -->
            <div class="card-face card-face-back">
              <span class="fc-hint">الترجمة والمثال السياقي</span>
              <div class="fc-meaning">${word.meaning}</div>
              ${word.example ? `
                <div class="fc-example">
                  <div style="font-family: var(--font-german); font-weight: 700; direction: ltr; margin-bottom: 0.35rem;">
                    ${word.example}
                  </div>
                  <div style="color: var(--text-muted); font-size: 0.9rem;">
                    ${word.example_ar}
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        </div>

        <div class="flashcard-controls">
          <button class="btn-secondary" id="btnPrevFc" ${this.fcIndex === 0 ? 'disabled' : ''}>
            &rarr; البطاقة السابقة
          </button>
          <button class="btn-secondary" id="btnShuffleFc" title="ترتيب عشوائي">
            🔀 عشوائي
          </button>
          <button class="btn-primary" id="btnNextFc">
            البطاقة التالية &larr;
          </button>
        </div>
      </div>
    `;
  }

  bindFlashcardsEvents() {
    const card = document.getElementById('flashcardCard');
    const scene = document.getElementById('flashcardScene');
    if (scene && card) {
      scene.addEventListener('click', (e) => {
        // Prevent flipping if audio button clicked
        if (e.target.closest('#btnFcAudio')) return;
        this.fcFlipped = !this.fcFlipped;
        card.classList.toggle('is-flipped', this.fcFlipped);
      });
    }

    const audioBtn = document.getElementById('btnFcAudio');
    if (audioBtn) {
      audioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = this.allVocab[this.fcIndex];
        this.speakGerman(word.word, audioBtn);
      });
    }

    const nextBtn = document.getElementById('btnNextFc');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.fcIndex < this.allVocab.length - 1) {
          this.fcIndex++;
          this.fcFlipped = false;
          this.render();
        }
      });
    }

    const prevBtn = document.getElementById('btnPrevFc');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.fcIndex > 0) {
          this.fcIndex--;
          this.fcFlipped = false;
          this.render();
        }
      });
    }

    const shuffleBtn = document.getElementById('btnShuffleFc');
    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => {
        this.allVocab.sort(() => Math.random() - 0.5);
        this.fcIndex = 0;
        this.fcFlipped = false;
        this.render();
      });
    }
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new GermanPortalApp();
});
