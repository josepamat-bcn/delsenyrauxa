// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ===== FORM SUBMISSION =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Si usas Formspree, no necesitas prevenir el default
        // Si quieres manejar el form manualmente, descomenta:
        
        // e.preventDefault();
        // const formData = new FormData(this);
        // console.log('Form submitted');
        // Aquí puedes añadir tu lógica de envío
    });
}

// ===== YOUTUBE VIDEO RESTART ON END (BACKUP LOOP) =====
// El parámetro loop=1&playlist=VIDEO_ID ya hace loop, pero esto es backup
window.addEventListener('load', () => {
    const video = document.getElementById('youtube-video');
    if (video) {
        // Asegurar que el video se carga correctamente
        video.addEventListener('load', () => {
            console.log('Video loaded successfully');
        });
    }
});

// ===== REVEAL ANIMATIONS ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements with .fade-in class if needed
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});
