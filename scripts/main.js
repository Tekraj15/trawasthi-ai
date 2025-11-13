function toggleMenu() {
    const nav = document.querySelector('.bottom-nav');
    nav.classList.toggle('open');
}

// Add smooth scrolling for any internal links (e.g., if adding anchors later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});