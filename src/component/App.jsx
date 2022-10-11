import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Competence from "./Competence/Competence";
import Realisation from "./Realisation/Realisation";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

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
        <Footer/>
    </>
    )
  }