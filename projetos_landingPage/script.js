  // Animação de entrada para o conteúdo do hero
        document.addEventListener('DOMContentLoaded', function() {
            const heroContent = document.querySelector('.hero-content');
            heroContent.style.animation = 'fadeInUp 1s ease forwards';
            
            // Inicializar o observador para as animações de scroll
            initScrollAnimations();
        });

        // Smooth scrolling para links de navegação (APENAS para âncoras internas)
        document.querySelectorAll('nav a, .btn[href*="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                // Verificar se é um link de âncora interna
                const targetId = this.getAttribute('href');
                
                // Se não for um link de âncora ou for apenas '#', não fazer nada
                if (!targetId || targetId === '#' || !targetId.startsWith('#')) {
                    return;
                }
                
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        // Configurar observador de interseção para animações de scroll
        function initScrollAnimations() {
            const animatedElements = document.querySelectorAll(
                'section, .section-title, .problem-card, .solution-card, .goal-card, .tech-item, .comparison-card, .cta'
            );

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, { threshold: 0.15 });

            animatedElements.forEach(el => observer.observe(el));
        }

        // Menu toggle para mobile
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Fechar menu ao clicar em um link (mobile)
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const teamMembers = document.querySelectorAll('.team-member');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 200);
                    }
                });
            }, { threshold: 0.1 });

            teamMembers.forEach(member => {
                member.style.opacity = '0';
                member.style.transform = 'translateY(30px)';
                member.style.transition = 'all 0.6s ease';
                observer.observe(member);
            });
        });

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        