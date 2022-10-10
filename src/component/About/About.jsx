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
            <div className="flex flex-col w-1/2 mx-auto" ref={slided}>
                <SectionTitle colored={false}>
                    ABOUT ME
                </SectionTitle>
                <article className='w-[490px] m-auto text-lg '>
                    <p>Je me présente <strong className="text-navBlue font-bolder">Florian</strong>, 26 ans.</p>
                    <p className="mb-6"> Ancien navigateur aérien qui après 6 ans de bons et loyaux services à déçider de se consacrer à 100% à sa passion : le <strong className="text-navBlue font-bolder">Developpement Web</strong> !</p>
                    <p>Lors de de mes 5 derniers mois en tant que militaire, j'ai pu suivre une formation de developpeur Web qui m'a permis d'approfondir mes connaissances. </p>
                    {/* <p>La passion pour l'informatique qui m'anime est de longue date. Je pense que je devais avoir 13 ans la première fois que j'ai "codé" (en C sur) </p>   */}
                    
                </article>
                <a href="#contact" id="contact-ancre" className="self-end block w-fit mt-14 p-4 text-xl bg-navBlue hover:bg-white hover:text-navBlue">CONTACT ME !</a>
            </div>
        </section>
    )
}