
document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let message;
    if (currentHour < 12) {
        message = 'Good Morning! I am Aarti Thube';
    } else if (currentHour < 18) {
        message = 'Good Afternoon! I am Aarti Thube';
    } else {
        message = 'Good Evening! I am Aarti Thube';
    }
    greeting.textContent = message;
});

window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`.nav-link[href*=${id}]`).classList.add('active');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        setTimeout(() => {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    });
});
