import SectionTitle from "../General/SectionTitle"
import CompetenceCircle from "./CompetenceCircle"


export default function Competence(){
    const competenceTab = [
        {
            text: 'JS',
            color: '#dba444',
            percentage: 70
        },
        {
            text: 'React',
            color: '#60d6fa',
            percentage: 50
        },
        {
            text: 'Node.js',
            color: '#98C23C',
            percentage: 30
        },
        {
            text: 'HTML5/CSS3',
            color: '#db6337',
            percentage: 70
        },
        {
            text: 'Sass',
            color: '#bf6c97',
            percentage: 65
        },
        {
            text: 'git',
            color: '#ce5440',
            percentage: 50
        },

        

    ]
 return (
    <section id="competence" className="flex flex-col justify-center items-center bg-white py-20">
        <SectionTitle colored={true}>
            MES COMPÉTENCES
        </SectionTitle>
        <article className=" flex justify-center flex-wrap w-full max-w-[1300px] mx-auto">
            {competenceTab.map((competence,index)=>(
                <CompetenceCircle key={index} text={competence.text} color={competence.color} percentage={competence.percentage} />
            ))}
        </article>
    </section>
 )
}