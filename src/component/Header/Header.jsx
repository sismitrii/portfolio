import image from '../../assets/images/header.JPG'
import HeaderText from './HeaderText'
import HeaderScrollBtn from './HeaderScrollBtn'

export default function Header(){
    return (
    <header className="w-screen h-screen">
        <img className="w-screen h-screen object-cover object-center opacity-75" src ={image} alt="Florian Guerin" />
        <HeaderText />
        <HeaderScrollBtn />
    </header>
    )
}