import file from '../../assets/files/CV_Guerin_Florian.pdf'

export default function NavbarMobile({isOpen, setIsOpen}){
    
    return(
    <div className='w-[150px] flex flex-col items-center mt-5'>
        <div 
            className='w-[60px] h-[45px] relative mr-5 duration-500 ease-in-out cursor-pointer mb-16' 
            onClick={()=>setIsOpen(!isOpen)}
        >
            <span className={`block absolute w-full h-[9px] bg-navBlue rounded-[9px] duration-300 ease-in-out 
                ${isOpen ? "top-[18px] -rotate-[135deg]":"top-[0px]"} `}></span>
            <span className={`block absolute w-full h-[9px] bg-navBlue rounded-[9px] duration-300 ease-in-out top-[18px]
                ${isOpen ? "opacity-0 left-12":"left-0"}`}></span>
            <span className={`block absolute w-full h-[9px] bg-navBlue rounded-[9px] duration-300 ease-in-out 
            ${isOpen ? "top-[18px] rotate-[135deg]":"top-[36px]"}`}></span>
        </div>

        {isOpen && 
        <nav className="duration-500 uppercase flex flex-col items-end text-3xl">
                <a className="p-5 my-3 font-bold hover:text-navBlue rotateY " href="#accueil" >Accueil</a>
                <a className="p-5 my-3 font-bold hover:text-navBlue rotateY animation-delay-100" href="#about">About Me</a>
                <a className="p-5 my-3 font-bold hover:text-navBlue rotateY animation-delay-200" href="#competence">Compétences</a>
                <a className="p-5 my-3 font-bold hover:text-navBlue rotateY animation-delay-300" href="#realisations">Réalisations</a>
                <a className="p-5 my-3 font-bold hover:text-navBlue rotateY animation-delay-400" href="#contact">Contact</a>
                <a className="p-5 my-3 font-bold hover:text-navBlue rotateY animation-delay-500" href={file} download>CV</a>
        </nav>}
    </div>
    )
}