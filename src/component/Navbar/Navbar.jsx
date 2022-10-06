import React from 'react';
import ScrollSpy from 'react-scrollspy-navigation';
import file from '../../assets/files/CV_Guerin_Florian.pdf'

export default function Navbar(){
    return (
        <div id="navbar" className='z-50 border-b border-gray flex justify-between items-center w-full sticky top-0 h-20 bg-white'>
            <h2 className='ml-10 text-2xl font-bold tracking-wider text-navBlue'>FLORIAN GUERIN</h2>
            <nav className='flex items-center'>
                <ScrollSpy> {/* Donne la classe active à l'element qui est en ref*/}
                    <a href="#accueil" ref={React.createRef()} >Accueil</a>
                    <a href="#about" ref={React.createRef()}>About Me</a>
                    <a href="#competence" ref={React.createRef()}>Competence</a>
                    <a href="#realisations" ref={React.createRef()}>Réalisations</a>
                    <a href="#contact" ref={React.createRef()}>Contact</a>
                    <a href={file} download>CV</a>
                    {/*Lien à changer lors de l'uploading */}
                </ScrollSpy>
            </nav>
        </div>
    )
}