import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Competence from "./Competence/Competence";
import Realisation from "./Realisation/Realisation";
import Contact from "./Contact/Contact";

export default function App() {
    return (
    <>
        <Header />
        <main>
            <Navbar />
            <About />
            <Competence />
            <Realisation />
            <Contact />
        </main>
    </>
    )
  }