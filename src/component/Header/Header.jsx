import image from '../../assets/images/compressed_header2.jpg'
import HeaderText from './HeaderText'
import HeaderScrollBtn from './HeaderScrollBtn'

export default function Header(){
    return (
    <header id="accueil" className="w-screen h-screen bg-bgBlue">
        <img className="w-full h-screen object-cover opacity-60" src ={image} alt="Florian Guerin" />
        <div className='flex flex-col items-center xl:items-start ml-[10%] text-white'>
            <HeaderText />
            <HeaderScrollBtn />
        </div>
    </header>
    )
}