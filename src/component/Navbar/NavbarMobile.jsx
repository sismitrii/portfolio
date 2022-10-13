import file from '../../assets/files/CV_Guerin_Florian.pdf'

export default function NavbarMobile({isOpen, setIsOpen}){
    
    return(
    <div className={`h-full flex flex-col ${!isOpen ? "" : "mt-5"} items-end mr-5`}>
        <div 
            className='w-[40px] h-[30px] absolute top-5 right-5 mr-2 duration-500 ease-in-out cursor-pointer' 
            onClick={()=>setIsOpen(!isOpen)}
        >
            <span className={`block absolute w-full h-[6px] bg-navBlue rounded-[6px] duration-300 ease-in-out 
                ${isOpen ? "top-[12px] -rotate-[135deg]":"top-[0px]"} `}></span>
            <span className={`block absolute w-full h-[6px] bg-navBlue rounded-[6px] duration-300 ease-in-out top-[12px]
                ${isOpen ? "opacity-0 left-12":"left-0"}`}></span>
            <span className={`block absolute w-full h-[6px] bg-navBlue rounded-[6px] duration-300 ease-in-out 
            ${isOpen ? "top-[12px] rotate-[135deg]":"top-[24px]"}`}></span>
        </div>

        {isOpen && 
        <nav className=" absolute duration-500 uppercase flex flex-col items-end text-3xl mt-10">
                <a className="p-5 my-3 font-bold hover:text-navBlue rotateY " href="#accueil" >Accueil</a>
                <a className="p-5 my-3 font-bold hover:text-navBlue rotateY animation-delay-100" href="#about">À propos</a>
                <a className="p-5 my-3 font-bold hover:text-navBlue rotateY animation-delay-200" href="#competence">Compétences</a>
                <a className="p-5 my-3 font-bold hover:text-navBlue rotateY animation-delay-300" href="#realisations">Réalisations</a>
                <a className="p-5 my-3 font-bold hover:text-navBlue rotateY animation-delay-400" href="#contact">Contact</a>
                <a className="p-5 my-3 font-bold hover:text-navBlue rotateY animation-delay-500" href={file} download>CV</a>
        </nav>}
    </div>
    )
}