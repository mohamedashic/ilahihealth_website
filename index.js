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