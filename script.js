const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// Dark Mode
if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
}

document.getElementById('dark').addEventListener('click', function() {
    if (localStorage.getItem('dark-mode') !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    document.querySelectorAll('header, .logo, li a, .btn, .grid-card, .project-card').forEach(function(element) {
        element.classList.add('dark-mode');
    });
    localStorage.setItem('dark-mode', 'enabled');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    document.querySelectorAll('header, .logo, li a, .btn, .grid-card, .project-card').forEach(function(element) {
        element.classList.remove('dark-mode');
    });
    localStorage.setItem('dark-mode', 'disabled');
}

document.querySelector('.scroll-button.left').addEventListener('click', () => {
    document.querySelector('.projects-grid').scrollBy({
        left: -430,
        behavior: 'smooth'
    });
});

document.querySelector('.scroll-button.right').addEventListener('click', () => {
    document.querySelector('.projects-grid').scrollBy({
        left: 430, 
        behavior: 'smooth'
    });
});

