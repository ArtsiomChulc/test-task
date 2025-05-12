window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const onUpHandler = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}