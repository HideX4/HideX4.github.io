
        // Animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section');
            const pageTitle = document.querySelector('.page-title');
            
            // Observer for sections
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe all sections
            sections.forEach((section, index) => {
                section.style.animationDelay = `${index * 0.2}s`;
                observer.observe(section);
            });

            // Add hover interactions to skill tags
            document.querySelectorAll('.skill-tag').forEach(tag => {
                tag.addEventListener('mouseenter', function() {
                    this.style.background = 'rgba(255, 255, 255, 0.2)';
                });
                
                tag.addEventListener('mouseleave', function() {
                    this.style.background = 'rgba(255, 255, 255, 0.1)';
                });
            });

            // Add click interaction to hobby items
            document.querySelectorAll('.hobby-item').forEach(item => {
                item.addEventListener('click', function() {
                    this.style.transform = 'translateY(-8px) scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = 'translateY(-5px) scale(1)';
                    }, 150);
                });
            });

            // Entrance animation for main elements
            setTimeout(() => {
                sections.forEach((section, index) => {
                    setTimeout(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }, 500);
        });