// Intersection Observer for skill card animations
const skillCards = document.querySelectorAll('.skill-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

skillCards.forEach(card => {
    observer.observe(card);
});

// Resume download functionality
document.getElementById('download-resume').addEventListener('click', () => {
    // Replace with actual resume URL
    const resumeUrl = 'path/to/resume.pdf';
});

// Contact form functionality
function showContactForm() {
    const form = document.getElementById('contactForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('contactButton').addEventListener('click', showContactForm);

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Progress bar animation
const progressBars = document.querySelectorAll('.progress');

progressBars.forEach(bar => {
    const width = bar.getAttribute('data-progress');
    bar.style.width = width;
});