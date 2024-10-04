const object = require('./scrolling')

export function entrance() {
    scroll = object.scroll
    scroll.on('scroll', reveal)

    window.addEventListener('load', () => {
        reveal()
        document.body.classList.remove('preload')
        setTimeout(() => {
            scroll.update()
        }, 2000)
    })
}
function reveal() {
    const reveals = document.querySelectorAll('[entrance-animation]');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {

            if(reveal.hasAttribute('entrance-delay')) {
                let delay = reveal.getAttribute('entrance-delay');

                setTimeout(() => {
                    reveal.setAttribute('entrance-active', '');
                }, delay);
            }
            else {
                reveal.setAttribute('entrance-active', '');
            }
        }
    })
}