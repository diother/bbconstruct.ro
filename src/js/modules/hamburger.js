const object = require('./scrolling')
const body = document.body;
const header = document.querySelector('header');
const icons = header.querySelectorAll('.menu-icon');
const closeButton = header.querySelector('.menu .close');
const links = header.querySelector('.menu .link-container');
const copyright = header.querySelector('.menu .copyright');

export function hamburger() {
    let scroll = object.scroll

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            if (header.classList.contains('active-menu')) {
                header.classList.remove('active-menu')
                body.removeAttribute('style')
    
                scroll.start()
    
                links.classList.remove('active')
                copyright.classList.remove('active')
            }
            else {
                header.classList.add('active-menu')
    
                body.style.overflow = 'hidden'
                scroll.stop()
    
                setTimeout(() => {
                    links.classList.add('active')
                    copyright.classList.add('active')
                }, 300)
            }
        });
    });
    closeButton.addEventListener('click', () => {
        header.classList.remove('active-menu')
        body.removeAttribute('style')
        scroll.start()
    });
}