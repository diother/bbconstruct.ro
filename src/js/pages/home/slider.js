const object = require('./../../modules/scrolling')
const sliderSection = document.querySelector('.slider-section')
const container = sliderSection.querySelectorAll('.container')
const heading = sliderSection.querySelectorAll('h1')

let scroll 

let maxPosition
let speed = 1
let position = 0
let animationOn = false

let last = 0
let skewMax = .57
let speedMax = .5

export function slider() {
    scroll = object.scroll
    const step = () => {
        position += speed;
        if (position > maxPosition) {
            position = 0
        }
        container.forEach(element => {
            element.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${-position}, 0, 0, 1)`
        });
        if(animationOn) {
            window.requestAnimationFrame(step)
        }
    }
    scroll.on('call', (call, state, obj) => {
        if(obj.id == 'slider') {
            if(state == 'enter') {
                if(!animationOn) {
                    animationOn = true
                    window.requestAnimationFrame(step)
                }
            }
            else {
                if(animationOn) {
                    animationOn = false
                    heading.forEach(element => {
                        element.style.transform = `skew(0, 0)`
                    });
                    position = 0
                }
            }
        }
    })
    const mobile = window.matchMedia('(max-width: 639px)')
    const tablet = window.matchMedia('(min-width: 640px) and (max-width: 959px)')
    const laptop = window.matchMedia('(min-width: 960px) and (max-width: 1279px)')
    const desktop = window.matchMedia('(min-width: 1280px)')

    function handleDesktopChange() {
        if ( !desktop.matches ) return
        maxPosition = container[0].offsetWidth
    }
    function handleLaptopChange() {
        if ( !laptop.matches ) return
        maxPosition = container[0].offsetWidth
    }
    function handleTabletChange() {
        if ( !tablet.matches ) return
        maxPosition = container[0].offsetWidth
    }
    function handleMobileChange() {
        if ( !mobile.matches ) return
        maxPosition = container[0].offsetWidth
    }
    desktop.addEventListener('change', handleDesktopChange)
    laptop.addEventListener('change', handleLaptopChange)
    tablet.addEventListener('change', handleTabletChange)
    mobile.addEventListener('change', handleMobileChange)

    window.addEventListener('load', function () {
        handleDesktopChange()
        handleLaptopChange()
        handleTabletChange()
        handleMobileChange()
    })

    if(document.body.classList.contains('no-touch')) {
        noTouch()
    }
}
function noTouch() { 
    scroll.on('scroll', sliderFancy)
}
function sliderFancy(e) {
    if(!animationOn) return

    let delta = Math.abs(last - e.scroll.y)
    last = e.scroll.y

    heading.forEach(element => {
        element.style.transform = `skew(${-delta * skewMax}deg, 0)`
    });

    position += Math.trunc(delta * speedMax)

    if(position > maxPosition)
        position = 0;

    container.forEach(element => {
        element.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${-position}, 0, 0, 1)`
    })
}