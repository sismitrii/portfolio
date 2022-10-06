import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";

export default function App() {
    return (
    <>
        <Header />
        <Navbar />
        <About />
        <section id="competence" className="w-screen flex justify-center items-center bg-white">Test</section>
        <section id="realisations" className="w-screen flex justify-center items-center bg-bgBlue">Test</section>
        <section id="contact" className="w-screen flex justify-center items-center bg-white">Test</section>
    </>
    )
  }