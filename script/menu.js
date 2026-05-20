const infoBtn = document.getElementById('infoBtn');
const infoClose = document.getElementById('infoClose');
const infoPanel = document.getElementById('infoPanel');

infoBtn.addEventListener('click', () => {
    infoPanel.classList.add('is-open');
});

infoClose.addEventListener('click', () => {
    infoPanel.classList.remove('is-open');
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.mobile-nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

infoPanel.addEventListener('scroll', () => {
    const header = infoPanel.querySelector('.mobile-info-header');
    if (infoPanel.scrollTop > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});