import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";

import SectionTitle from "../General/SectionTitle"
import ContactDataField from './ContactDataField';


export default function Contact(){
    const inputs = useRef([])
    const [isSended, setIsSended] = useState(false);
    const formTab = [
        {
            id: "name",
            label: "Nom",
            type:"text"
        },
        {
            id: "email",
            label: "Adresse mail",
            type:"email"
        },
        {
            id: "message",
            label: "Message",
            type:"textarea"
        },
    ]

    const [areFocused, setAreFocused] = useState({name: false, email: false, message:false})

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_zcgce0s', 'template_awnsviv', e.target, 'CdKX8qOegUowP4SZ8')
        .then((res)=> console.log(res))
        .catch((err)=>console.error(err))
    }

    return (
        <section id="contact" className="w-screen flex flex-col items-center p-20 bg-stone-200">
            <SectionTitle colored>
                ME CONTACTER
            </SectionTitle>
            <form 
                className="flex flex-col w-full max-w-[700px] min-w-[300px]"
                onSubmit={(e)=>sendEmail(e)}
            >
                {formTab.map((dataField, index)=>(
                    <ContactDataField 
                        inputs={inputs}
                        index = {index}
                        key={`${dataField.message}-${index}`} 
                        dataField={dataField} 
                        areFocused={areFocused} 
                        setAreFocused={setAreFocused} />
                ))}
                <button 
                    className="border h-12 font-semibold text-2xl bg-navBlue text-white mt-5"
                    type="submit" 
                    value="Envoyer"
                    onClick={()=>{
                        inputs.current.forEach((ref)=>{
                            ref.value = "";
                        })
                        setIsSended(true)
                        setTimeout(()=>{setIsSended(false)}, 5000)
                    }}
                >
                Envoyer
                </button>
                {isSended && <p className='text-center mt-7 text-xl'>Votre message a bien été envoyé !</p>}
            </form>
        </section>
    )
}