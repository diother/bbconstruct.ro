import LocomotiveScroll from 'locomotive-scroll'

const body = document.body
const header = body.querySelector('header')

export function scrolling() {
    if (touchTest()) {
        body.classList.add('touch')
    }
    else {
        body.classList.add('no-touch')
        noTouch()
    }
    const scroll = new LocomotiveScroll({ 
        el: document.querySelector('[data-scroll-container]'),
        repeat: true,
        smooth: true,
        lerp: .1,
        multiplier: .5,
        direction: 'vertical',
        gestureDirection: 'vertical',
        firefoxMultiplier: 200,
        tablet: {
            smooth: false,
            breakpoint: 1024,
            direction: 'vertical',
            horizontalGesture: false
        },
        smartphone: {
            smooth: false,
            breakpoint: 768,
            direction: 'vertical',
            horizontalGesture: false
        },
        reloadOnContextChange: true
    }
    )
    exports.scroll = scroll
    
    scroll.on('scroll', showLogo)
}
function touchTest() {
    return ( window.matchMedia("(pointer: coarse)").matches )
}
function showLogo(e) {
    if (e.scroll.y < 45) {
        if ( !header.classList.contains('show-logo') ) {
            header.classList.add('show-logo')
        }
    }
    else {
        if ( header.classList.contains('show-logo') ) {
            header.classList.remove('show-logo')
        }    
    }
}
function noTouch() {
    logoFancy()
}
function logoFancy() {
    const logoIcon = document.querySelector('.d-header .logo-icon')
    const logo = document.querySelector('.d-header .logo')

    logoIcon.addEventListener('mouseover', () => {
        logo.style.opacity = '1'
        logo.style.zIndex = '3'
    });

    logoIcon.addEventListener('mouseout', () => {
        logo.removeAttribute('style')
    })
}