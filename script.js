ScrollReveal({
    reset: true,
    distance: '200px',
    duration: 2000,
    delay: 1000
});

document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.centers', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 300,
        easing: 'ease-in-out',
        opacity: 0,
        reset: true  // Optional: Re-run animation when it re-enters the viewport
    });

    ScrollReveal().reveal('.title', {
        origin: 'right',
        distance: '100px',
        duration: 1000,
        delay: 500,
    });

    ScrollReveal().reveal('.sub-title', {
        origin: 'left',
        distance: '100px',
        duration: 1000,
        delay: 700,
    });

    ScrollReveal().reveal('.links', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        interval: 100,  // Staggered animation for multiple images
    });
});



