const mouseCursor = document.querySelector('.mouse-cursor')
const trace = document.querySelectorAll('.trace-button')

export function mouse() {
    if(document.body.classList.contains('touch')) return

    customCursorMain()
    traceButtons()
}
function customCursorMain() {
    ['mousemove','pointermove'].forEach( event => 
        window.addEventListener(event, function(e) {
            const mouseY = e.clientY
            const mouseX = e.clientX

            mouseCursor.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${mouseX}, ${mouseY}, 0, 1)`
        })
    )
}
function traceButtons() {
    trace.forEach(b => b.addEventListener('mousemove', function(e) {
        mouseCursor.className = 'mouse-cursor trace-cursor'
        mouseCursor.innerHTML = ''

        const rect = b.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        let movement = 80

        const xMove = (x - rect.width / 2) / rect.width * movement
        const yMove = (y - rect.height / 2) / rect.width * movement
        const child = b.firstElementChild

        child.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${xMove}, ${yMove}, 0, 1)`
    }))

    trace.forEach(b => b.addEventListener('mouseleave', function() {
        const child = b.firstElementChild
        child.style.transform = ''

        mouseCursor.classList.remove('trace-cursor')
    }))
}