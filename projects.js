// Add smooth entrance animations for project cards
document.addEventListener('DOMContentLoaded', function() {
  addEntranceAnimations();
  addImageErrorHandling();
});

function addEntranceAnimations() {
  const pageTitle = document.querySelector('.page-title');
  const projectCards = document.querySelectorAll('.project-card');
  
  // Animate page title
  pageTitle.style.opacity = '0';
  pageTitle.style.transform = 'translateY(-30px)';
  
  setTimeout(() => {
    pageTitle.style.transition = 'all 0.8s ease';
    pageTitle.style.opacity = '1';
    pageTitle.style.transform = 'translateY(0)';
  }, 200);
  
  // Animate project cards with staggered effect
  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
      card.style.transition = 'all 0.6s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 400 + (index * 100)); // Stagger each card by 100ms
  });
}

function addImageErrorHandling() {
  const projectImages = document.querySelectorAll('.project-image img');
  
  projectImages.forEach(img => {
    img.addEventListener('error', function() {
      // Create a placeholder div with gradient background
      const placeholder = document.createElement('div');
      placeholder.style.cssText = `
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(255,255,255,0.6);
        font-size: 0.9rem;
        text-align: center;
        padding: 1rem;
      `;
      placeholder.textContent = 'Project Image';
      
      // Replace the img with placeholder
      this.parentNode.replaceChild(placeholder, this);
    });
  });
}

// Add scroll animations for better UX
function addScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      } else {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(50px)';
      }
    });
  }, {
    threshold: 0.1
  });
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      observer.observe(el);
    });
}