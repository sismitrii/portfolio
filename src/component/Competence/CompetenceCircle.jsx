import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useRef, useState, useEffect, useCallback } from "react";
import { slide } from '../../utils/function';

export default function CompetenceCircle({text, color, percentage}){
    const [value, setValue] = useState(0);
    const circle = useRef(null);

    const updateValue = useCallback(() =>{
        setValue(percentage)
    },[setValue, percentage])

    useEffect(()=>{
        slide(circle.current,updateValue);
    },[updateValue])

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