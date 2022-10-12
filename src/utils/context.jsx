import { useState, useEffect, createContext } from "react";

export const AppContext = createContext()

export function AppProvider({children}){
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width:1024px)").matches);

    /*=== On resizing it check if it's mobile size or bigger===*/
    useEffect(()=>{
        window.addEventListener('resize', function(e){
            if(e.target.innerWidth < 1024){
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        })
    })

    return (
        <AppContext.Provider
            value={{isMobile, setIsMobile}}
        >
            {children}
        </AppContext.Provider>
    )
}