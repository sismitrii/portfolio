import { useState } from "react"

export default function ContactDataField({dataField, areFocused, setAreFocused}){
    const [textHeight, setTextHeight] = useState("150px")

    async function handleKeyUp(e){
        await setTextHeight("auto")
        const scrollHeight = e.target.scrollHeight;
        await setTextHeight(scrollHeight+"px");
    }
    return (
        <>
            <label 
                className={`${!areFocused[dataField.id] ? "text-gray-500" : "-translate-y-[20px]"} z-10 lg:top-9 text-lg lg:text-xl pl-3  mb-2 duration-500`} 
                htmlFor={`${dataField.id}`}
                >
                    {`${dataField.label}`}
            </label>
            {dataField.type === "textarea" ? 
            <textarea
                style={{height: textHeight}}
                className={`${!areFocused[dataField.id] ? "-translate-y-[42px]" : "-translate-y-[22px]"} min-h-[100px] lg:text-xl pl-3 pt-2 duration-500 -mb-5 resize-none`}
                onChange={(e)=>handleKeyUp(e)}
                maxLength={500}
                name={dataField.id}
                id={dataField.id}
                onFocus={()=>setAreFocused({...areFocused, message:true})}
                onBlur={(e)=>{e.target.value === "" && setAreFocused({...areFocused, message:false})}} 
            />
            :
            <input 
                className={`${!areFocused[dataField.id] ? "-translate-y-[42px]": "-translate-y-[22px]"} border h-10 text-lg lg:h-12 lg:text-xl pl-3 duration-500`}
                type={`${dataField.type}`} 
                id={`${dataField.id}`} 
                name={`${dataField.id}`} 
                onFocus={()=>setAreFocused(dataField.id === "name" ? {...areFocused, name:true} : {...areFocused, email :true})}
                onBlur={(e)=>{e.target.value === "" && setAreFocused(dataField.id === "name" ? {...areFocused, name:false}: {...areFocused, email:false})}}
            />
            }

        </>
    )
}