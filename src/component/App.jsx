import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Competence from "./Competence/Competence";
import Realisation from "./Realisation/Realisation";

export default function App() {
    return (
    <>
        <Header />
        <main>
            <Navbar />
            <About />
            <Competence />
            <Realisation />
            <section id="contact" className="w-screen flex justify-center items-center bg-white">Test</section>
        </main>
    </>
    )
  }