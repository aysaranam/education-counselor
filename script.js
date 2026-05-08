document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        this.classList.add('active');
        
        document.querySelectorAll('.course-container').forEach(container => {
            container.style.display = 'none';
        });
        
        const selectedContainer = document.getElementById(category);
        if (selectedContainer) {
            selectedContainer.style.display = 'grid';
        }
    });
});

window.addEventListener('load', function() {
    const medicalBtn = document.querySelector('[data-category="medical"]');
    if (medicalBtn) {
        medicalBtn.click();
    }
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        const whatsappMessage = `Hello! I'm interested in educational counseling.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
        
        const whatsappURL = `https://wa.me/919800339477?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappURL, '_blank');
        contactForm.reset();
    });
}
