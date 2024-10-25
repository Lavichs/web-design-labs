let currentSection = 0;
const sections = document.querySelectorAll('.section');

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Прокрутка вниз
        if (currentSection < sections.length - 1) {
            currentSection++;
            scrollToSection(currentSection);
        }
    } else {
        // Прокрутка вверх
        if (currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
        }
    }
});

// Функция для плавной прокрутки к секции
function scrollToSection(index) {
    const targetSection = sections[index];
    // Прокручиваем к нужной секции
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });
}
