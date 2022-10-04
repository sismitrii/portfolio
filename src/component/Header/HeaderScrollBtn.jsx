import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

export default function HeaderScrollBtn(){
    return(
    <a href="#about" className="w-8 xl:w-10 h-16 xl:h-20 absolute bottom-4 xl:bottom-10 left-1/2 -translate-x-1/2 border-2 border-black rounded-3xl flex justify-center">
        <FontAwesomeIcon className="relative top-2 sm:top-3 text-2xl animate-arrowDown" icon={faAngleDown}/>
    </a>
    )
}