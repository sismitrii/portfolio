import SectionTitle from "../General/SectionTitle"

import { useEffect, useRef } from "react"
import { slide } from "../../utils/function"

export default function About(){
    const slided = useRef(null)

    useEffect(()=>{
        slide(slided.current)
    },[])

    return(
        <section id='about'className ='w-full h-[100vh] border-b-2 bg-bgBlue text-white flex justify-center items-center'>
            <div className="flex flex-col w-full p-10 md:w-[800px] xl:w-1/2 mx-auto" ref={slided}>
                <SectionTitle colored={false}>
                    À PROPOS
                </SectionTitle>
                <article className=' w-auto md:w-[550px] m-auto text-base sm:text-lg '>
                    <p className="mb-6"> Ancien navigateur aérien, j'ai décidé, après 6 ans de bons et loyaux services, de me consacrer à 100 % à ma passion : le <strong className="text-navBlue font-bolder">Développement Web</strong> !</p>
                    <p>Lors de mes 5 derniers mois en tant que militaire, j'ai suivi une formation qui m'a permis d'obtenir la certification professionnelle <strong className="text-navBlue font-bolder">Développeur Web RNCP 5</strong> (Bac+2). </p>                    
                </article>
                <button 
                    onClick={()=>document.querySelector('#contact').scrollIntoView({behavior:"smooth"})} // not rigth way to do.. but scroll spy component is 
                    id="contact-ancre" 
                    className="self-end mt-14 p-4 text-lg md:text-xl bg-navBlue hover:bg-white hover:text-navBlue"
                    >
                        ME CONTACTER !
                    </button>
            </div>
        </section>
    )
}