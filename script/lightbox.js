document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.zoomable-image');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeButton = document.querySelector('.close-button');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex'; // Показываем модальное окно (flex для центрирования)
            modalImage.src = img.src; // Устанавливаем источник изображения
            modalImage.alt = img.alt; // Копируем alt-текст

            // Находим подпись. Предполагаем, что подпись находится в следующем <p> с классом 'caption'
            let captionElement = img.nextElementSibling;
            if (captionElement && captionElement.classList.contains('caption')) {
                modalCaption.textContent = captionElement.textContent;
            } else {
                modalCaption.textContent = ''; // Если подписи нет, очищаем
            }

            // Добавляем обработчик для закрытия при клике вне картинки
            setTimeout(() => { // Небольшая задержка, чтобы клик по картинке не сразу закрыл модалку
                modal.addEventListener('click', closeModalOutside);
            }, 50);
        });
    });

    closeButton.addEventListener('click', () => {
        closeModal();
    });

    // Закрытие по кнопке Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.add('closing'); // Добавляем класс для анимации закрытия
        modal.removeEventListener('click', closeModalOutside); // Удаляем обработчик клика вне
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('closing'); // Удаляем класс после завершения анимации
        }, 300); // Время должно соответствовать animation-duration в CSS
    }

    function closeModalOutside(event) {
        // Если клик был не по самой картинке и не по ее дочерним элементам
        if (event.target === modal || event.target === modalCaption) {
            closeModal();
        }
    }
});