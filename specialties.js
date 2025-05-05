document.addEventListener('DOMContentLoaded', function() {
    const specialtyCards = document.querySelectorAll('.specialty-card');

    specialtyCards.forEach(card => {
        card.addEventListener('click', function() {
            const specialty = this.getAttribute('data-specialty');
            // Navigate to booking page with specialty parameter
            window.location.href = `booking.html?specialty=${specialty}`;
        });

        // Add hover animation
        card.addEventListener('mouseenter', function() {
            this.querySelector('.specialty-icon').style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseleave', function() {
            this.querySelector('.specialty-icon').style.transform = 'scale(1)';
        });
    });
});