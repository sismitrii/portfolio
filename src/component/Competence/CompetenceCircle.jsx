import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from "react";

export default function CompetenceCircle({text, color, percentage}){
    const [value, setValue] = useState(percentage);
    return (
    <div>
        <div className="w-44 mx-24 mt-5 mb-5">
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
                    pathTransitionDuration: 0.50
                })} 
            />  
        </div>
        <h4 className='text-3xl text-center mb-10'>{text}</h4>
    </div>
    )
}