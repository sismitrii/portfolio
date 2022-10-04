import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

export default function HeaderScrollBtn(){
    return(
    <a href="#sec-2" className="w-10 h-20 absolute bottom-20 left-1/2 -translate-x-1/2 border-2 border-black rounded-3xl flex justify-center">
        <FontAwesomeIcon className="relative top-3 text-2xl animate-arrowDown" icon={faAngleDown}/>
    </a>
    )
}