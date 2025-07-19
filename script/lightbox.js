document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.zoomable-image');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImage.src = img.src;
            modalImage.alt = img.alt;

            setTimeout(() => {
                modal.addEventListener('click', closeModalOutside);
            }, 50);
        });
    });

    closeButton.addEventListener('click', () => {
        closeModal();
    });

    function closeModal() {
        modal.classList.add('closing');
        modal.removeEventListener('click', closeModalOutside);
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('closing');
        }, 100);
    }

    function closeModalOutside(event) {
        if (event.target === modal) {
            closeModal();
        }
    }
});