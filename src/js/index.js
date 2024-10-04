import './../scss/style.scss'

// Javascript Functions
import { scrolling } from './modules/scrolling'
import { hamburger } from './modules/hamburger'
import { entrance } from './modules/entrance'
import { mouse } from './modules/mouse'
import { lazy } from './modules/lazyload'

// Specific Functions for Pages
async function homeLoad() {
    let { slider } = await import('./pages/home/slider')
    let { glide } = await import('./pages/home/glide')
    let { homeMouse } = await import('./pages/home/homeMouse')
    
    slider()
    glide.mount()
    homeMouse()
}

// Instantiate Functions
scrolling()
hamburger()
entrance()
mouse()

// Instantiate Specific Functions
if (document.body.classList.contains('home')) {
    homeLoad()
}