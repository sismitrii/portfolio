import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return(
        <footer className="w-full p-5 md:p-10 bg-bgBlue text-white text-center ">
            <ul className="w-full flex justify-center text-2xl md:text-4xl mb-8">
                <li className="border p-3 w-14 h-14 mx-5 md:p-5 md:w-20 md:h-20 md:mx-10 rounded-full cursor-pointer duration-150 hover:bg-white hover:text-bgBlue">
                    <a href="mailto:floguerin156@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </li>
                <li className="border p-3 w-14 h-14 mx-5 md:p-5 md:w-20 md:h-20 md:mx-10 rounded-full cursor-pointer duration-150 hover:bg-white hover:text-bgBlue">
                    <a href="https://github.com/sismitrii">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li className="border p-3 w-14 h-14 mx-5 md:p-5 md:w-20 md:h-20 md:mx-10 rounded-full cursor-pointer duration-150 hover:bg-white hover:text-bgBlue">
                    <a href="https://www.linkedin.com/in/florianguerin/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>
            <p className="text-xl">© 2022 Florian Guerin, Tous droits réservés</p>
        </footer>
    )
}