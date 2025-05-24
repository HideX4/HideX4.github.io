// Certificate data - Add your certificate images here
const certificateData = {
  powerbi: {
    title: "Power BI Certificates",
    images: [
      "certificates/powerbi/cert1.jpg",
      "certificates/powerbi/cert2.jpg",
      "certificates/powerbi/cert3.jpg",
      "certificates/powerbi/cert4.jpg",
      "certificates/powerbi/cert5.jpg",
      "certificates/powerbi/cert6.jpg",
      "certificates/powerbi/cert7.jpg",
      "certificates/powerbi/cert8.jpg",
      // Add more Power BI certificate image paths
    ]
  },
  python: {
    title: "Python Certificates",
    images: [
      "certificates/python/cert1.jpg",
      "certificates/python/cert2.jpg",
      "certificates/python/cert3.jpg",
      "certificates/python/cert4.jpg",
      "certificates/python/cert5.jpg",
      "certificates/python/cert6.jpg",
      "certificates/python/cert7.jpg",
      "certificates/python/cert8.jpg",
      "certificates/python/cert9.jpg",
      "certificates/python/cert10.jpg",
      "certificates/python/cert11.jpg",
      "certificates/python/cert12.jpg",
      "certificates/python/cert13.jpg",
      "certificates/python/cert14.jpg"
      // Add more Python certificate image paths
    ]
  },
  sql: {
    title: "SQL Certificates",
    images: [
      "certificates/sql/cert1.jpg"
      // Add more SQL certificate image paths
    ]
  },
  linkedin: {
    title: "LinkedIn Learning Certificates",
    images: [
      "certificates/linkedin/cert1.jpg",
      "certificates/linkedin/cert2.jpg",
      "certificates/linkedin/cert3.jpg",
      "certificates/linkedin/cert4.jpg",
      "certificates/linkedin/cert5.jpg",
      "certificates/linkedin/cert6.jpg"
      // Add more LinkedIn certificate image paths
    ]
  }
};

// Current state
let currentCategory = 'powerbi'; // Default category
let currentImageIndex = 0;

// DOM elements
const categoryItems = document.querySelectorAll('.category-item');
const categoryTitle = document.querySelector('.current-category-title');
const certificateImage = document.getElementById('certificateImage');
const currentIndexSpan = document.getElementById('currentIndex');
const totalCountSpan = document.getElementById('totalCount');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Add click listeners to category items
  categoryItems.forEach(item => {
    item.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      switchCategory(category);
    });
  });

  // Navigation button event listeners
  prevBtn.addEventListener('click', showPreviousImage);
  nextBtn.addEventListener('click', showNextImage);

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    switch(e.key) {
      case 'ArrowLeft':
        showPreviousImage();
        break;
      case 'ArrowRight':
        showNextImage();
        break;
      case 'ArrowUp':
        switchToPreviousCategory();
        break;
      case 'ArrowDown':
        switchToNextCategory();
        break;
    }
  });

  // Initialize with first category
  updateDisplay();
});

function switchCategory(category) {
  if (!certificateData[category] || certificateData[category].images.length === 0) {
    alert('No certificates available for this category yet.');
    return;
  }

  // Update active category
  categoryItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-category') === category) {
      item.classList.add('active');
    }
  });

  currentCategory = category;
  currentImageIndex = 0;
  updateDisplay();
}

function updateDisplay() {
  const categoryData = certificateData[currentCategory];
  
  if (!categoryData || categoryData.images.length === 0) {
    return;
  }

  const totalImages = categoryData.images.length;
  
  // Update category title
  categoryTitle.textContent = categoryData.title;
  
  // Update image
  certificateImage.style.opacity = '0.5';
  certificateImage.src = categoryData.images[currentImageIndex];
  certificateImage.alt = `${categoryData.title} - Certificate ${currentImageIndex + 1}`;
  
  // Update counter
  currentIndexSpan.textContent = currentImageIndex + 1;
  totalCountSpan.textContent = totalImages;
  
  // Update navigation buttons
  prevBtn.disabled = currentImageIndex === 0;
  nextBtn.disabled = currentImageIndex === totalImages - 1;
  
  // Handle image load
  certificateImage.onload = function() {
    this.style.opacity = '1';
  };
  
  certificateImage.onerror = function() {
    this.style.opacity = '1';
    this.alt = 'Certificate image not found';
    console.log(`Image not found: ${this.src}`);
  };
}

function showPreviousImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateDisplay();
  }
}

function showNextImage() {
  const totalImages = certificateData[currentCategory].images.length;
  if (currentImageIndex < totalImages - 1) {
    currentImageIndex++;
    updateDisplay();
  }
}

function switchToPreviousCategory() {
  const categories = ['powerbi', 'python', 'sql', 'linkedin'];
  const currentIndex = categories.indexOf(currentCategory);
  const previousIndex = currentIndex > 0 ? currentIndex - 1 : categories.length - 1;
  switchCategory(categories[previousIndex]);
}

function switchToNextCategory() {
  const categories = ['powerbi', 'python', 'sql', 'linkedin'];
  const currentIndex = categories.indexOf(currentCategory);
  const nextIndex = currentIndex < categories.length - 1 ? currentIndex + 1 : 0;
  switchCategory(categories[nextIndex]);
}

// Add smooth entrance animations
function addEntanceAnimations() {
  const sidebar = document.querySelector('.sidebar');
  const contentArea = document.querySelector('.content-area');
  
  sidebar.style.opacity = '0';
  sidebar.style.transform = 'translateX(-50px)';
  contentArea.style.opacity = '0';
  contentArea.style.transform = 'translateX(50px)';
  
  setTimeout(() => {
    sidebar.style.transition = 'all 0.8s ease';
    sidebar.style.opacity = '1';
    sidebar.style.transform = 'translateX(0)';
  }, 200);
  
  setTimeout(() => {
    contentArea.style.transition = 'all 0.8s ease';
    contentArea.style.opacity = '1';
    contentArea.style.transform = 'translateX(0)';
  }, 400);
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', addEntanceAnimations);