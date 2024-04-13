document.addEventListener('DOMContentLoaded', function() {
    // smooth scroll functionality sa navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // fill pag clinick yung heart
    document.querySelectorAll('.menu-card .fav-button').forEach(function(button) {
        button.addEventListener('click', function() {
            const heartIcon = button.querySelector('i');
            // Toggle the solid heart class
            heartIcon.classList.toggle('fas');
            // Toggle the outline heart class
            heartIcon.classList.toggle('far');
            // Toggle the red color class
            button.classList.toggle('red');
        });
    });

    // Slider functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.team-slider img');

    function showSlides() {
        slides.forEach(slide => slide.classList.remove('active'));
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].classList.add('active');
        setTimeout(showSlides, 3000); // papalit image every 3 seconds
    }

    showSlides();
});
