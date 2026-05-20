const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
let lastClickedImg = null;

document.querySelectorAll('.zoomable-image').forEach(img => {
    img.addEventListener('click', function() {
        lastClickedImg = this;
        const first = this.getBoundingClientRect();

        modalImg.src = this.src;
        modal.classList.add('active');
        document.body.classList.add('modal-open');

        requestAnimationFrame(() => {
            const last = modalImg.getBoundingClientRect();
            const deltaX = first.left - last.left;
            const deltaY = first.top - last.top;
            const deltaW = first.width / last.width;
            const deltaH = first.height / last.height;

            modalImg.style.transition = 'none';
            modalImg.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`;
            modalImg.style.opacity = '1';
            
            lastClickedImg.style.opacity = '0';

            requestAnimationFrame(() => {
                modalImg.style.transition = 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease-out';
                modalImg.style.transform = 'none';
            });
        });
    });
});

modal.addEventListener('click', () => {
    if (!lastClickedImg) return;

    const first = modalImg.getBoundingClientRect();
    const last = lastClickedImg.getBoundingClientRect();

    const deltaX = last.left - first.left;
    const deltaY = last.top - first.top;
    const deltaW = last.width / first.width;
    const deltaH = last.height / first.height;

    const duration = 450; 
    const easing = 'cubic-bezier(0.16, 1, 0.3, 1)';

    modal.classList.remove('active');

    modalImg.style.transition = `transform ${duration}ms ${easing}, opacity ${duration}ms ease-in-out`;
    modalImg.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`;

    setTimeout(() => {
        if (lastClickedImg) {
            lastClickedImg.style.opacity = '1';
        }
    }, duration * 0.3);

    setTimeout(() => {
        modalImg.style.opacity = '0';
        modalImg.style.transform = 'none';
        modalImg.style.transition = 'none';
        document.body.classList.remove('modal-open');
        lastClickedImg = null;
    }, duration); 
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.click();
    }
});