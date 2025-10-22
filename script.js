// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;
    const maxScroll = 200;
    const opacity = Math.max(1- scrollY / maxScroll, 0.5);
    navbar.style.background = `rgba(0, 0, 0, ${opacity})`;
});


// Portfolio item hover effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Add loading animation
document.addEventListener('DOMContentLoaded', function () {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});