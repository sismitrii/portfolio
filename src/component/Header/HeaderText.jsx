import { TypeAnimation } from 'react-type-animation';

export default function HeaderText(){
    return (
        <div className="absolute min-w-[320px] w-[80%] sm:w-[500px] lg:w-[45%] xl:w-[35%] bottom-[10%] sm:bottom-[100px] md:bottom-[100px] lg:bottom-[15%] xl:bottom-[25%]" >
            {/* <p className=" w-fit relative left-10 text-black text-xl md:text-2xl lg:text-3xl mb-6">Bonjour,</p> Voir pour mettre "Hey !!  👋 */}
            <TypeAnimation className=' h-20 text-lg md:text-3xl 2xl:text-4xl'
                sequence={['Je suis Florian Guerin, Developpeur Web Junior', 3000, '', 1000]}
                style={{textTransform: 'uppercase', fontWeight: '500', fontFamily: 'Azeret Mono'}}
                wrapper="h1"
                repeat={Infinity}
            />
        </div>
    )
}