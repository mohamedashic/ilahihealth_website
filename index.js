// Counter animation
const counters = document.querySelectorAll('.counter');

function startCounting() {
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const steps = 50;
        const stepValue = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += stepValue;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = current.toFixed(1);
            }
        }, duration / steps);
    });
}

// Start counting when section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(document.querySelector('.stats'));

// Close announcement banner
document.querySelector('.close-banner')?.addEventListener('click', function() {
    document.querySelector('.announcement-banner').style.display = 'none';
    document.querySelector('.header').style.top = '0';
    document.body.style.paddingTop = '80px';
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Handle dropdowns in mobile menu
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
});

// Testimonial slider
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelector('.testimonial-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dots.appendChild(dot);
    });

    // Show first slide
    slides[0].classList.add('active');

    // Next slide
    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    // Previous slide
    function prevSlide() {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    // Go to specific slide
    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
        currentSlide = n;
        slides[currentSlide].classList.add('active');
        document.querySelectorAll('.dot')[currentSlide].classList.add('active');
    }

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto advance slides
    setInterval(nextSlide, 5000);
});