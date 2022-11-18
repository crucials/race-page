import './index.html'
import '@splidejs/splide/css/core'
import './index.scss'

import Splide from '@splidejs/splide'

window.addEventListener('load', () => {
    import('./scripts/event-handler')

    const sliderOptions = {
        perPage: 2, 
        gap: '20px',
        breakpoints: {
            670: {
                perPage: 1
            }
        }
    }
    new Splide('.splide', sliderOptions).mount()

    const decorations = document.querySelectorAll('.decoration')
    const carDecoration = decorations[1]
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                if(entry.target == carDecoration) {
                    decorations.forEach(decoration => {
                        decoration.classList.add('decoration-visible')
                    })
                }
            }
        })
    })
    observer.observe(carDecoration)
})