import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)


export const slide = (elem, onComplete,delay, duration) => {
    gsap.fromTo(
        elem,
        {
            opacity:0,
            y: 200
        },
        {
            opacity:1,
            y:0,
            onComplete: onComplete,
            scrollTrigger : {
                trigger: elem,
                start: 'top bottom'
            }
        }
    )
}