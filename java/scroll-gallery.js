const gallery = document.querySelector('.gallery');
let scrollAmount = 0;

// Функция для бесконечной прокрутки
function infiniteScroll() {
    scrollAmount -= 0.5; // Скорость прокрутки, уменьшите/увеличьте значение для изменения скорости
    if (Math.abs(scrollAmount) >= gallery.scrollWidth / 2) {
        scrollAmount = 0; // Сбрасываем позицию, создавая бесшовный эффект
    }
    gallery.style.transform = `translateX(${scrollAmount}px)`; // Перемещаем галерею
    requestAnimationFrame(infiniteScroll); // Запускаем анимацию
}

// Дублирование контента галереи для плавной прокрутки
function duplicateGallery() {
    gallery.innerHTML += gallery.innerHTML; // Удваиваем содержимое галереи
}

// Запускаем скрипт
duplicateGallery();
infiniteScroll();
