let lastScrollPosition = 0;
window.addEventListener("scroll", () => {
    const titleBar = document.querySelector(".title-bar");
    const footerBar = document.querySelector(".footer-bar");
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition > lastScrollPosition) {
        // Прокрутка вниз: скрыть панели
        titleBar.style.transform = "translateY(-100%)";
        footerBar.style.transform = "translateY(100%)";
    } else {
        // Прокрутка вверх: показать панели
        titleBar.style.transform = "translateY(0)";
        footerBar.style.transform = "translateY(0)";
    }

    lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
});