import { useContext, useState, useEffect, useRef } from "react"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SectionTitle from "../General/SectionTitle"
import RealisationItem from "./RealisationItem"
import { slide } from "../../utils/function"

import GroupomaniaImg from "../../assets/images/compressed_Groupomania.jpg"
import ClockImg from "../../assets/images/compressed_clock.jpg" 
import KanapImg from "../../assets/images/compressed_Kanap.jpg" 
import PokedexImg from "../../assets/images/compressed_Pokedex.jpg" 
import SpaceImg from "../../assets/images/compressed_SpaceInvaders.jpg" 
import ParticulesImg from "../../assets/images/compressed_Particules.jpg" 
import GradientImg from "../../assets/images/compressed_Gradient_background.jpg" 
import HotTakesImg from "../../assets/images/compressed_Hot_Takes.jpg" 
import ParallaxImg from "../../assets/images/compressed_Parallax.jpg" 
import { AppContext } from "../../utils/context"


export default function Realisation(){
    const [isSelected, setIsSelected] = useState("Tous");
    const {isMobile} = useContext(AppContext)

    const filterTab = [ "Tous", "JS Vanilla","React", "Node.js", "OpenClassrooms", "Projet Perso"]

    const tabProject = [
        {
            name: "Groupomania",
            description: "Dernier projet de la formation d'openclassrooms ! Réalisation d'un réseau social interne.",
            attribut: ["React", "Node.js","Express","MongoDb","OpenClassrooms"],
            img: GroupomaniaImg,
            url: "https://groupo-front.vercel.app"
        },
        {
            name: "Clock",
            description: "Réalisation d'une horloge et d'un affichage digital de l'heur et d'une fonction timer",
            attribut: ["HTMl", "Sass", "JS Vanilla","Projet Perso"],
            img: ClockImg,
            url: "https://clock-teal-six.vercel.app/"
        },
        {
            name: "Kanap",
            description: "Intégration dynamique du front-end d'un site de e-commerce",
            attribut: ["JS Vanilla","OpenClassrooms"],
            img: KanapImg,
            url: "https://kanap-front.vercel.app"
        },
        {
            name: "Pokedex",
            description: `Création d'un "Pokedex" à l'aide de PokéAPI`,
            attribut: ["HTML","CSS", "JS Vanilla","Projet Perso"],
            img: PokedexImg,
            url: "https://pokedex-sismitrii.vercel.app"
        },
        {
            name: "Space Invaders",
            description: "Création d'un space invaders simple",
            attribut: ["HTML","CSS", "JS Vanilla","Projet Perso"],
            img: SpaceImg,
            url: "https://pokedex-sismitrii.vercel.app"
        },
        {
            name: "Particules",
            description: "Utilisation du canva pour créez des particules qui se déplacent aléatoirement",
            attribut: ["HTML","CSS", "JS Vanilla","Projet Perso"],
            img: ParticulesImg,
            url: "https://particule-steel.vercel.app"
        },
        {
            name: "Parrallax Scrolling",
            description: "Animations au scroll de la page",
            attribut: ["HTML","CSS", "JS Vanilla","Projet Perso"],
            img: ParallaxImg,
            url: "https://parallax-scrolling-six.vercel.app/"
        },
        // {
        //     name: "Github Searcher",
        //     description: "Utilisation de l'API de Github",
        //     attribut: ["HTML","CSS", "JS Vanilla","Projet Perso"],
        //     img: GroupomaniaImg,
        //     url: "https://github-api-orcin.vercel.app/"
        // },
        // {
        //     name: "Jeu de memory simple",
        //     description: "Creez d'un jeu de memory très simple",
        //     attribut: ["HTML","CSS", "JS Vanilla","Projet Perso"],
        //     img: GroupomaniaImg,
        //     url: "https://memory-card-xi.vercel.app"
        // },
        {
            name: "Générateur de dégradé",
            description: "Création d'un dégradé coloré à l'aide de codes hexadécimal",
            attribut: ["HTML","CSS", "JS Vanilla","Projet Perso"] ,
            img: GradientImg,
            url: "https://gradient-background-generator-phi.vercel.app"
        },
        {
            name: "API Hot takes",
            description: "6ème projet de la formation d'openClassrooms, création d'une API" ,
            attribut: ["Node.js","Express", "MongoDb","OpenClassrooms"],
            img: HotTakesImg,
            url: "https://github.com/sismitrii/OC_P6_Hot_Takes"
        }
    ]
    const slided = useRef(null)

    useEffect(()=>{
        slide(slided.current)
    },[])

    const tabtoShow = isSelected === "Tous" ? tabProject : tabProject.filter((project)=>{
        return project.attribut.includes(isSelected);
    })


    return(
        <section  id="realisations" className="w-screen h-fit flex flex-col justify-center items-center bg-bgBlue py-20">
            <SectionTitle colored={false}>
                MES RÉALISATIONS
            </SectionTitle>
            {isMobile ?
                <>
                <select 
                    name="filter" 
                    aria-label="filter" 
                    aria-describedby="Liste de filtre pour les réalisations"
                    className="w-64 h-10 p-2 sm:w-96"
                    onChange={(e)=>setIsSelected(e.target.value)}
                >
                    <option value="tous">Selectionner un filtre</option>
                    {filterTab.map((filter, index)=>(
                        <option key={`${index}-${filter}`} value={filter}>{filter}</option>
                    ))}
                </select> 
                </>
                :
                <ul className="flex mb-10" aria-label="filter" aria-describedby="Liste de filtre pour les réalisations">
                    {filterTab.map((filter, index)=>(
                        <li key={index}>
                            <button 
                                onClick={()=>setIsSelected(filter)} 
                                className={`${isSelected === filter ? "bg-navBlue text-white hover:text-white" : "bg-white" } px-5 py-2 mx-5  hover:bg-navBlue hover:text-white duration-150`}>
                                    {filter}
                            </button>
                        </li>
                    ))}
                </ul>
            }
            <section ref={slided} className="flex flex-wrap justify-center">
                {tabtoShow.map((project,index)=>(
                    <RealisationItem  
                        key={`${project}-${index}`} 
                        project={project} 
                        index={index} 
                    />                  
                ))}
            </section>
            <a className="bg-white text-2xl mt-10 p-3 rounded-md" href="https://github.com/sismitrii">
                    <FontAwesomeIcon className="mr-2 text-3xl" icon={faGithub} />
                    Voir plus sur Github
                </a>
        </section>

    )
}