import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useRef, useState } from "react";

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function CompetenceCircle({text, color, percentage}){
    const [value, setValue] = useState(0);
    const circle = useRef(null);

    const updateValue = () =>{
        setValue(percentage)
    }

    const slide = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity:0,
                y: 200
            },
            {
                opacity:1,
                y:0,
                onComplete: updateValue,
                scrollTrigger : {
                    trigger: elem,
                    start: 'top bottom'
                }
            }
        )
    }


    useEffect(()=>{
        slide(circle.current);
    },[])

    return (
    <div>
        <div id={`${text}`} ref={circle} className="w-44 mx-24 mt-5 mb-5">
            <CircularProgressbar 
                value={value} 
                text={`${value}`} 
                background
                backgroundPadding={5}
                strokeWidth={5}
                styles={buildStyles({
                    backgroundColor: color,
                    textColor: '#FFF',
                    pathColor: '#FFF',
                    trailColor: "transparent",
                    pathTransitionDuration: 2
                })} 
            />  
        </div>
        <h4 className='text-3xl text-center mb-10'>{text}</h4>
    </div>
    )
}