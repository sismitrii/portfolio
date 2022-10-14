import image from '../../assets/images/compressed_header.jpg'
import HeaderText from './HeaderText'
import HeaderScrollBtn from './HeaderScrollBtn'

export default function Header(){
    return (
    <header id="accueil" className="w-screen h-screen bg-bgBlue">
        <img className="w-full h-screen object-cover object-bottom opacity-90" src ={image} alt="Florian Guerin" />
        <HeaderText />
        <HeaderScrollBtn />
    </header>
    )
}