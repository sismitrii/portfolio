import { TypeAnimation } from 'react-type-animation';

export default function HeaderText(){
    return (
        <div className="absolute min-w-[320px] w-[80%] sm:w-[500px] lg:w-[45%] 2xl:w-[57%] left-1/2 -translate-x-1/2  bottom-[100px] md:bottom-[150px] 2xl:bottom-[20%]" >
            <p className="relative left-10 text-bgBlue text-xl md:text-2xl lg:text-3xl mb-6">Bonjour,</p> {/* Voir pour mettre "Hey !!  👋*/}
            <TypeAnimation className=' h-20 text-xl sm:text-3xl 2xl:text-6xl'
                sequence={['Je suis Florian Guerin, Developpeur Web Junior', 3000, '', 1000]}
                style={{textTransform: 'uppercase', fontWeight: '500', fontFamily: 'Azeret Mono'}}
                wrapper="h1"
                repeat={Infinity}
            />
        </div>
    )
}