export default function RealisationItem({project,index}){
    return (
    <article className="relative w-64 h-64 sm:w-96 sm:h-96 p-1 sm:p-10 m-10 bg-sky-800 text-white text-center hover:scale-110 duration-500 cursor-pointer ">
        <a href={project.url} target='_blank' rel='noopener noreferrer'>
            <h4 className="text-xl sm:text-3xl m-4">{project.name}</h4>
            <p className="text-sm sm:text-lg italic">{project.description}</p>
            <ul className="flex flex-wrap mt-5 justify-center">
                {project.attribut.map((att, index)=>(
                    <li key={`${index}-${att}`} className="text-xs sm:text-base px-3 py-1 m-2 bg-white text-navBlue">{att}</li>
                ))}
            </ul>
            <img className="absolute top-0 left-0 w-full h-full object-cover opacity-5 hover:opacity-100 duration-500" src={project.img} alt="Impression écran de la page d'accueil de Groupomania" />
        </a>
    </article>
    )
}