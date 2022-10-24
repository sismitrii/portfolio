import image from '../../assets/images/compressed_header2.jpg'
import HeaderText from './HeaderText'
import HeaderScrollBtn from './HeaderScrollBtn'
import { useContext } from 'react'
import { AppContext } from '../../utils/context'

export default function Header(){
    const {orientation} = useContext(AppContext)
    return (
    <header id="accueil" className="relative w-screen h-screen bg-bgBlue">
        <img className="w-full h-screen object-cover opacity-60" src ={image} alt="Florian Guerin" />
        <div className={`flex flex-col ${orientation === 'portrait' ? "items-center" : "items-start ml-[5%]"} xl:items-start text-white`}>
            <HeaderText />
            <HeaderScrollBtn />
        </div>
    </header>
    )
}