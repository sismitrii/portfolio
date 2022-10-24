import { useContext } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AppContext } from '../../utils/context';

export default function HeaderText(){
    const {orientation} = useContext(AppContext)

    return (
        <div className={`absolute ${orientation === "portrait" ? "w-[80%] sm:w-[500px] bottom-[10%] sm:bottom-[100px]" : "w-[35%] sm:w-[35%] bottom-[40%]"}  `} >
            {/* <p className=" w-fit relative left-10 text-black text-xl md:text-2xl lg:text-3xl mb-6">Bonjour,</p> Voir pour mettre "Hey !!  👋 */}
            <TypeAnimation className={`h-20 text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl`}
                sequence={['Je suis Florian Guerin, Developpeur Web Junior', 3000, '', 1000]}
                style={{textTransform: 'uppercase', fontWeight: '500', fontFamily: 'Azeret Mono'}}
                wrapper="h1"
                repeat={Infinity}
            />
        </div>
    )
}