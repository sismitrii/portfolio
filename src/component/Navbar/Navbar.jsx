import React, { useContext, useState } from 'react';
import ScrollSpy from 'react-scrollspy-navigation';
import { AppContext } from '../../utils/context';

import file from '../../assets/files/CV_Guerin_Florian.pdf'
import NavbarMobile from './NavbarMobile';

export default function Navbar(){
    const {isMobile} = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div id="navbar" className={`z-50 border-b flex justify-between w-full sticky top-0 ${isOpen ? "h-screen" : "h-20"} bg-white duration-500`}>
            <h2 className='ml-10 mt-6 text-xl sm:text-2xl font-bold tracking-wider text-navBlue'>FLORIAN GUERIN</h2>
            {isMobile ? 
                <NavbarMobile isOpen={isOpen} setIsOpen={setIsOpen} />
            :
            <nav id='desktopNav' className='flex items-center mt-5'>
            <ScrollSpy> {/* Donne la classe active à l'element qui est en ref*/}
                <a href="#accueil" ref={React.createRef()} >Accueil</a>
                <a href="#about" ref={React.createRef()}>À propos</a>
                <a href="#competence" ref={React.createRef()}>Compétences</a>
                <a href="#realisations" ref={React.createRef()}>Réalisations</a>
                <a href="#contact" ref={React.createRef()}>Contact</a>
                <a href={file} download>CV</a>
                {/*Lien à changer lors de l'uploading */}
            </ScrollSpy>
        </nav>
            }

        </div>
    )
}