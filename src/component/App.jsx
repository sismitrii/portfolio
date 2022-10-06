import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Competence from "./Competence/Competence";

export default function App() {
    return (
    <>
        <Header />
        <Navbar />
        <About />
        <Competence />
        <section id="realisations" className="w-screen flex justify-center items-center bg-bgBlue">Test</section>
        <section id="contact" className="w-screen flex justify-center items-center bg-white">Test</section>
    </>
    )
  }