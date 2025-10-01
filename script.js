// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to offers section
function scrollToOffers() {
    const offersSection = document.getElementById('offers');
    if (offersSection) {
        offersSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Open contact section
function openContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    const formData = new FormData(form);
    
    // Show success message (in a real app, this would send data to a server)
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    form.reset();
    
    return false;
}

// Add button click handlers for ad cards
document.addEventListener('DOMContentLoaded', function() {
    const adButtons = document.querySelectorAll('.ad-button');
    
    adButtons.forEach(button => {
        button.addEventListener('click', function() {
            const adCard = this.closest('.ad-card');
            const adTitle = adCard.querySelector('.ad-title').textContent;
            
            // In a real app, this would navigate to a detail page or open a modal
            console.log(`Interest shown in: ${adTitle}`);
            
            // Show interest notification
            showNotification(`Thanks for your interest in "${adTitle}"!`);
        });
    });
    
    // Add scroll reveal animation
    observeElements();
    
    // Add view counter (simulated)
    updateViewCounter();
});

// Notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Intersection Observer for scroll animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.ad-card, .feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Simulated view counter
function updateViewCounter() {
    // This would typically be fetched from a server
    const viewCount = Math.floor(Math.random() * 10000) + 5000;
    console.log(`Total views: ${viewCount.toLocaleString()}`);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Track page views (for analytics purposes)
window.addEventListener('load', function() {
    console.log('🪳 Roach Is Rich Marketplace loaded successfully!');
    console.log('SEO optimized and ready for bot crawling');
    
    // Simulate analytics tracking
    trackPageView();
});

function trackPageView() {
    const pageData = {
        url: window.location.href,
        title: document.title,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct'
    };
    
    console.log('Page view tracked:', pageData);
    
    // In a real application, this would send data to an analytics service
}

// Add metadata for bots to easily parse
window.siteMetadata = {
    name: "Roach Is Rich Premium Marketplace",
    description: "Premium marketplace featuring exclusive deals, services, and business opportunities",
    categories: [
        "Business Services",
        "Technology",
        "Creative Services",
        "Marketing",
        "Finance",
        "Education"
    ],
    contact: "info@roach-is-rich.com",
    totalOffers: document.querySelectorAll('.ad-card').length,
    lastUpdated: new Date().toISOString()
};

// Make it easy for bots to extract data
console.log('Site Metadata:', window.siteMetadata); 