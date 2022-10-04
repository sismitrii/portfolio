import { TypeAnimation } from 'react-type-animation';

export default function HeaderText(){
    return (
        <div className="absolute border min-w-[320px] w-[80%] sm:w-[500px] lg:w-[45%] left-1/2 -translate-x-1/2  bottom-[100px] sm:bottom-[150px] 2xl:bottom-[300px]" >
            <p className="relative left-10 text-gray-700 text-xl mb-6">Bonjour,</p>
            <TypeAnimation className=' h-20 text-xl sm:text-3xl 2xl:text-7xl'
                sequence={['Je suis Florian Guerin, Developpeur Web Junior', 3000, '', 1000]}
                style={{textTransform: 'uppercase', fontWeight: '500', fontFamily: 'Azeret Mono'}}
                wrapper="h1"
                repeat={Infinity}
            />
        </div>
    )
}