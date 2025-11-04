import { Element } from "react-scroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Products from "./components/Products";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-black">
      <Header />
      <Element name="inicio">
        <Hero />
      </Element>
      <Element name="galeria">
        <Gallery />
      </Element>
      <Element name="productos">
        <Products />
      </Element>
      <Element name="nosotros">
        <About />
      </Element>
      <Element name="sedes">
        <Locations />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
