// script.js

// Theme toggling
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Project filtering
const filters = document.querySelectorAll('.filter');
filters.forEach(filter => {
    filter.addEventListener('click', () => {
        const category = filter.dataset.category;
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            if (project.dataset.category === category || category === 'all') {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Form handling
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form submission
    const formData = new FormData(form);
    // Display message or send data to server
});

// Scroll animations
const scrollElements = document.querySelectorAll('.scroll-animation');
const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});
scrollElements.forEach(element => {
    elementObserver.observe(element);
});

// Smooth navigation
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});