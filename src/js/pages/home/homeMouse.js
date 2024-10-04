const mouseCursor = document.querySelector('.mouse-cursor')
const heroSection = document.querySelector('.hero-section')
const glideTrack = document.querySelector('.glide__track')
const infoContainers = document.querySelectorAll('.info-section .second-column .container')

export function homeMouse() {
    if(document.body.classList.contains('touch')) return
    
    heroCursor()
    glideCursor()
    infoCursor()
    resetCursor()
}
function heroCursor() {
    heroSection.addEventListener('mouseover', function() {
        mouseCursor.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' id='arrow'><path d='M24 40 21.9 37.85 34.25 25.5H8V22.5H34.25L21.9 10.15L24 8L40 24Z'/></svg>"
        mouseCursor.classList.add('hero-cursor')
    })
}
function glideCursor() {
    glideTrack.addEventListener('mouseenter', function() {
        mouseCursor.innerHTML = "<span>Trage</span>"
        mouseCursor.classList.add('glide-cursor')
    })
    glideTrack.addEventListener('mousedown', function() {
        mouseCursor.classList.add('drag')
    })
    glideTrack.addEventListener('mouseup', function() {
        mouseCursor.classList.remove('drag')
    })
}
function infoCursor() {
    infoContainers.forEach(container => {
        ['mouseenter','mouseleave'].forEach( event => 
            container.addEventListener(event, function(e) {
                const rect = container.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top

                container.style.setProperty('--x', x + 'px')
                container.style.setProperty('--y', y + 'px')
            })
        )
    })
}
function resetCursor() {
    heroSection.addEventListener('mouseleave', removeCursor)
    glideTrack.addEventListener('mouseleave', removeCursor)
}
function removeCursor() {
    mouseCursor.classList.remove('hero-cursor')
    mouseCursor.classList.remove('glide-cursor')
    mouseCursor.innerHTML = ''
}