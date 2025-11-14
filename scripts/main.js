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

/* ==== SHOW MORE / SHOW LESS EXPERIENCE ==== */
document.getElementById('exp-show-more').addEventListener('click', () => {
    document.getElementById('exp-full').classList.remove('hidden');
    document.getElementById('exp-show-more').classList.add('hidden');
    document.getElementById('exp-show-less').classList.remove('hidden');
});

document.getElementById('exp-show-less').addEventListener('click', () => {
    document.getElementById('exp-full').classList.add('hidden');
    document.getElementById('exp-show-less').classList.add('hidden');
    document.getElementById('exp-show-more').classList.remove('hidden');
});