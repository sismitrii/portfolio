import emailjs from '@emailjs/browser';
import { useState } from "react";

import SectionTitle from "../General/SectionTitle"
import ContactDataField from './ContactDataField';


export default function Contact(){

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
                        key={`${dataField.message}-${index}`} 
                        dataField={dataField} 
                        areFocused={areFocused} 
                        setAreFocused={setAreFocused} />
                ))}
                {/* <label 
                    className={`${!areFocused.name && "translate-y-[35px] text-gray-500"} lg:top-9 text-lg lg:text-xl pl-3 duration-500`} 
                    htmlFor="name"
                >
                    Nom
                </label>
                <input 
                    className={`border h-10 text-lg lg:h-12 lg:text-xl pl-3 duration-500 ${areFocused.email ? "mb-3" : "-mb-3"}`}
                    type="text" 
                    id="name" 
                    name="name" 
                    onFocus={()=>setAreFocused({...areFocused, name:true})}
                    onBlur={(e)=>{e.target.value === "" && setAreFocused({...areFocused, name:false})}}
                /> 

                <label 
                    className={`${!areFocused.email && "translate-y-[35px] text-gray-500"} text-lg lg:text-xl pl-3 duration-500`} 
                    htmlFor="user_mail"
                >
                    Adresse mail
                </label>
                <input 
                    className={`h-10 text-lg lg:h-12 lg:text-xl pl-3 duration-500 ${areFocused.message ? "mb-3" : "-mb-3"}`}
                    type="email" 
                    id="user_mail" 
                    name="user_mail"
                    onFocus={()=>setAreFocused({...areFocused, email:true})}
                    onBlur={(e)=>{e.target.value === "" && setAreFocused({...areFocused, email:false})}} 
                /> 

                <label 
                    className={`${!areFocused.message && "translate-y-[35px] text-gray-500"} text-lg lg:text-xl pl-3 duration-500`} 
                    htmlFor="message"
                >
                    Message
                </label>


                <textarea 
                    className="text-lg lg:h-12 lg:text-xl p-3 duration-500"
                    id="message" 
                    name="message"
                    onFocus={()=>setAreFocused({...areFocused, message:true})}
                    onBlur={(e)=>{e.target.value === "" && setAreFocused({...areFocused, message:false})}} 
                />  */}

                <button 
                    className="border h-12 font-semibold text-2xl bg-navBlue text-white mt-5"
                    type="submit" 
                    value="Envoyer"
                >
                Envoyer
                </button>
            </form>
        </section>
    )
}