document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.zoomable-image');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');

    images.forEach(img => {
        img.addEventListener('click', () => {
            const imageUrl = img.src;
            const imageAlt = img.alt;

            modal.style.display = 'none';
            modalImage.src = '#';
            modalImage.alt = '';

            const preloader = new Image();
            preloader.src = imageUrl;

            preloader.onload = () => {
                modalImage.src = imageUrl;
                modalImage.alt = imageAlt;
                modal.style.display = 'flex';

                modal.addEventListener('click', closeModalOutside);
            };

            preloader.onerror = () => {
                console.error('Ошибка загрузки изображения:', imageUrl);
            };
        });
    });

    function closeModal() {
        setTimeout(() => {
            modal.style.display = 'none';
            modalImage.src = '#';
            modalImage.alt = '';
            modal.removeEventListener('click', closeModalOutside);
        }, 0);
    }

    function closeModalOutside(event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
});