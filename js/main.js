/**
 * PORTFÓLIO PESSOAL - MARIA CLARA NUNES LOPES
 * JavaScript Funcional: Navegação, Animações, Validação e Interatividade
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ===================================================================
     1. ANO DINÂMICO NO RODAPÉ
  =================================================================== */
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* ===================================================================
     2. ALTERNADOR DE TEMA (MODO CLARO / MODO ESCURO)
     - Alternância suave sem recarregar
     - Ícone 🌙 no modo escuro, ☀️ no modo claro
     - Persistência das preferências no localStorage
     - Funcionamento em Desktop e Mobile
  =================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');

  const updateThemeButtonState = (theme) => {
    if (!themeToggleBtn) return;
    if (theme === 'light') {
      themeToggleBtn.setAttribute('aria-label', 'Ativar modo escuro (modo claro ativo)');
      themeToggleBtn.setAttribute('title', 'Ativar modo escuro');
    } else {
      themeToggleBtn.setAttribute('aria-label', 'Ativar modo claro (modo escuro ativo)');
      themeToggleBtn.setAttribute('title', 'Ativar modo claro');
    }
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('portfolio-theme', theme);
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.warn('LocalStorage inacessível para salvar o tema:', e);
    }
    updateThemeButtonState(theme);
  };

  // Detecta tema inicial previamente salvo ou preferência
  const initialTheme = document.documentElement.getAttribute('data-theme') ||
    localStorage.getItem('portfolio-theme') ||
    localStorage.getItem('theme') ||
    'dark';
  applyTheme(initialTheme);

  // Evento de clique para alternar o tema
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = activeTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
    });
  }

  /* ===================================================================
     3. NAVEGAÇÃO & HEADER SCROLL
  =================================================================== */
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Adiciona sombra e fundo escurecido ao rolar a página
  const handleHeaderScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Executa na inicialização

  // Menu Hambúrguer Mobile
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fecha o menu ao clicar em qualquer link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Fecha ao clicar fora do menu
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ===================================================================
     3. DESTAQUE DO LINK ATIVO AO ROLAR (SCROLL SPY)
  =================================================================== */
  const sections = document.querySelectorAll('section[id]');

  const highlightNavOnScroll = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  /* ===================================================================
     4. ANIMAÇÕES AO APARECER NA TELA (INTERSECTION OBSERVER)
  =================================================================== */
  const revealElements = document.querySelectorAll('.reveal-fade-up');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // Animação das Barras de Habilidade
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const skillsSection = document.getElementById('habilidades');

    if (skillsSection && skillBars.length > 0) {
      const skillsObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              skillBars.forEach((bar) => {
                const targetWidth = bar.getAttribute('data-width');
                if (targetWidth) {
                  bar.style.width = targetWidth;
                }
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      skillsObserver.observe(skillsSection);
    }
  } else {
    // Fallback para navegadores sem IntersectionObserver
    revealElements.forEach((el) => el.classList.add('revealed'));
    document.querySelectorAll('.skill-bar-fill').forEach((bar) => {
      bar.style.width = bar.getAttribute('data-width') || '80%';
    });
  }

  /* ===================================================================
     5. COPIAR E-MAIL COM UM CLIQUE
  =================================================================== */
  const copyBtn = document.getElementById('btn-copy-email');
  const copyText = document.getElementById('copy-text');
  const emailAddress = 'mariaclaralp013@gmail.com';

  if (copyBtn && copyText) {
    copyBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(emailAddress);
        } else {
          // Fallback para ambientes sem suporte a Clipboard API
          const tempInput = document.createElement('textarea');
          tempInput.value = emailAddress;
          tempInput.style.position = 'fixed';
          tempInput.style.opacity = '0';
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        const originalText = copyText.textContent;
        copyText.textContent = 'Copiado!';
        copyBtn.style.borderColor = '#10b981';
        copyBtn.style.color = '#a7f3d0';

        setTimeout(() => {
          copyText.textContent = originalText;
          copyBtn.style.borderColor = '';
          copyBtn.style.color = '';
        }, 2500);
      } catch (err) {
        console.warn('Erro ao copiar e-mail:', err);
      }
    });
  }

  /* ===================================================================
     6. FORMULÁRIO DE CONTATO: VALIDAÇÃO & ENVIO REAL TRANSPARENTE
     Regra: "Formulário de contato com validação e mensagem de retorno;
             não simular o envio de mensagens sem configurar um serviço."
     Funcionamento:
     1. Validação estrita dos campos (nome, e-mail formato correto, mensagem).
     2. Ao validar com sucesso, aciona o mailto com os dados estruturados
        para abertura imediata no cliente de e-mail do usuário.
     3. Exibe mensagem de feedback clara e transparente.
  =================================================================== */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const subjectInput = document.getElementById('form-subject');
  const messageInput = document.getElementById('form-message');
  const feedbackBox = document.getElementById('form-feedback');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  // Validador de E-mail via Regex
  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(String(email).trim());
  };

  // Limpa mensagens de erro individuais ao digitar
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      nameInput.classList.remove('error');
      if (nameError) nameError.classList.remove('visible');
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      emailInput.classList.remove('error');
      if (emailError) emailError.classList.remove('visible');
    });
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      messageInput.classList.remove('error');
      if (messageError) messageError.classList.remove('visible');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;

      // Validação do Nome
      const nameVal = nameInput ? nameInput.value.trim() : '';
      if (!nameVal || nameVal.length < 2) {
        hasError = true;
        if (nameInput) nameInput.classList.add('error');
        if (nameError) nameError.classList.add('visible');
      }

      // Validação do E-mail
      const emailVal = emailInput ? emailInput.value.trim() : '';
      if (!emailVal || !isValidEmail(emailVal)) {
        hasError = true;
        if (emailInput) emailInput.classList.add('error');
        if (emailError) emailError.classList.add('visible');
      }

      // Validação da Mensagem
      const messageVal = messageInput ? messageInput.value.trim() : '';
      if (!messageVal || messageVal.length < 10) {
        hasError = true;
        if (messageInput) messageInput.classList.add('error');
        if (messageError) messageError.classList.add('visible');
      }

      if (hasError) {
        if (feedbackBox) {
          feedbackBox.className = 'form-feedback error';
          feedbackBox.textContent = 'Por favor, corrija os campos destacados acima antes de enviar.';
        }
        return;
      }

      // Dados Válidos: Prepara o envio real via mailto direto
      const subjectVal = (subjectInput && subjectInput.value.trim()) 
        ? subjectInput.value.trim() 
        : `Contato de ${nameVal} através do Portfólio`;

      const emailBody = `Olá, Maria Clara!\n\n` +
        `Nome do Remetente: ${nameVal}\n` +
        `E-mail: ${emailVal}\n` +
        `Assunto: ${subjectVal}\n\n` +
        `Mensagem:\n${messageVal}\n\n` +
        `-----------------------------------------\n` +
        `Mensagem enviada a partir do Portfólio Pessoal.`;

      const mailtoUrl = `mailto:mariaclaralp013@gmail.com?subject=${encodeURIComponent(subjectVal)}&body=${encodeURIComponent(emailBody)}`;

      // Feedback transparente e real
      if (feedbackBox) {
        feedbackBox.className = 'form-feedback info';
        feedbackBox.innerHTML = `
          <strong>✓ Validação concluída com sucesso!</strong><br>
          Seu cliente de e-mail está sendo aberto com os dados preenchidos para envio direto a <strong>mariaclaralp013@gmail.com</strong>.
        `;
      }

      // Aciona o cliente de e-mail real do usuário
      window.location.href = mailtoUrl;

      // Limpa os campos após o acionamento
      contactForm.reset();
    });
  }

  /* ===================================================================
     7. BOTÃO VOLTAR AO TOPO
  =================================================================== */
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});
