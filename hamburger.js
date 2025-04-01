document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.mobile-nav').classList.toggle('visible');
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.mobile-nav').classList.remove('visible');
    });
});
