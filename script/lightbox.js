document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.zoomable-image');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex'; // Показываем модальное окно (flex для центрирования)
            modalImage.src = img.src; // Устанавливаем источник изображения
            modalImage.alt = img.alt; // Копируем alt-текст

            // Добавляем обработчик для закрытия при клике вне картинки
            setTimeout(() => { // Небольшая задержка, чтобы клик по картинке не сразу закрыл модалку
                modal.addEventListener('click', closeModalOutside);
            }, 50);
        });
    });

    closeButton.addEventListener('click', () => {
        closeModal();
    });

    function closeModal() {
        modal.classList.add('closing'); // Добавляем класс для анимации закрытия
        modal.removeEventListener('click', closeModalOutside); // Удаляем обработчик клика вне
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('closing'); // Удаляем класс после завершения анимации
        }, 100); // Время должно соответствовать animation-duration в CSS
    }

    function closeModalOutside(event) {
        // Если клик был не по самой картинке и не по ее дочерним элементам
        if (event.target === modal) {
            closeModal();
        }
    }
});