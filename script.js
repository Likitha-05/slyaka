const navSlide = () => {
    const toggler = document.querySelector('.toggler');
    const nav = document.querySelector('.nav-links');

    toggler.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();