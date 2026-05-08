// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('active');
    });
}

// Contact Form with WhatsApp Integration
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = e.target[0].value;
        const email = e.target[1].value;
        const phone = e.target[2].value;
        const message = e.target[3].value;
        
        const whatsappMessage = `Hello, I am interested in your counseling services.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
        const whatsappURL = `https://wa.me/919800339477?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappURL, '_blank');
        contactForm.reset();
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animations on scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.career-card, .course-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});
