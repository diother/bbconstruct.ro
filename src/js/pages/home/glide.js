import Glide from '@glidejs/glide';
export const glide = new Glide('.glide', {
    perView: 2,
    bound: 'true',
    gap: 1,
    breakpoints: {
        991: {
            perView: 1,
            peek: {
                before: 0,
                after: 100
            }
        },
        575: {
            perView: 1,
            peek: {
                before: 0,
                after: 0
            }
        }
    }
})