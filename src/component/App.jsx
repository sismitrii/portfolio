import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";

export default function App() {
    return (
    <>
        <Header />
        <Navbar />
        <section id="about" className="w-screen h-[600px] flex justify-center items-center bg-bgBlue">Test</section>
        <section id="competence" className="w-screen h-[600px] flex justify-center items-center bg-white">Test</section>
        <section id="realisations" className="w-screen h-[600px] flex justify-center items-center bg-bgBlue">Test</section>
        <section id="contact" className="w-screen h-[600px] flex justify-center items-center bg-white">Test</section>
    </>
    )
  }