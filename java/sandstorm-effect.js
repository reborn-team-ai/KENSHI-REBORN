const sandstormContainer = document.querySelector('.sandstorm-container');

// Функция для создания частицы
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Рандомное начальное положение
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 20}vh`;

    // Рандомный размер частицы
    const size = Math.random() * 5 + 2; // Размер от 2px до 7px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Рандомная продолжительность анимации
    const duration = Math.random() * 3 + 3; // От 3 до 6 секунд
    particle.style.animationDuration = `${duration}s`;

    // Добавляем частицу в контейнер
    sandstormContainer.appendChild(particle);

    // Удаляем частицу после завершения анимации
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Постоянное добавление частиц
setInterval(createParticle, 200); // Создаём новую частицу каждые 200ms
