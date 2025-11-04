import { Link } from "react-scroll";
import logo from "../assets/casaglasslogo.png";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-12 py-5">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <img 
            src={logo} 
            alt="CasaGlass Logo" 
            className="h-12 transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="inicio" 
            smooth 
            duration={500} 
            className="cursor-pointer text-dark-gray font-semibold text-sm tracking-wide hover:text-light-blue transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-light-blue after:transition-all after:duration-300 hover:after:w-full pb-1"
          >
            Inicio
          </Link>

          <Link 
            to="galeria" 
            smooth 
            duration={500}
            offset={-100}
            className="cursor-pointer text-dark-gray font-semibold text-sm tracking-wide hover:text-light-blue transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-light-blue after:transition-all after:duration-300 hover:after:w-full pb-1"
          >
            Conócenos
          </Link>
          <Link 
            to="productos" 
            smooth 
            duration={500}
            offset={-100}
            className="cursor-pointer text-dark-gray font-semibold text-sm tracking-wide hover:text-light-blue transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-light-blue after:transition-all after:duration-300 hover:after:w-full pb-1"
          >
            Productos
          </Link>
          <Link 
            to="nosotros" 
            smooth 
            duration={500}
            offset={-100}
            className="cursor-pointer text-dark-gray font-semibold text-sm tracking-wide hover:text-light-blue transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-light-blue after:transition-all after:duration-300 hover:after:w-full pb-1"
          >
            Nosotros
          </Link>
          <Link 
            to="sedes" 
            smooth 
            duration={500}
            offset={-100}
            className="cursor-pointer text-dark-gray font-semibold text-sm tracking-wide hover:text-light-blue transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-light-blue after:transition-all after:duration-300 hover:after:w-full pb-1"
          >
            Sedes
          </Link>
          <Link 
            to="sedes" 
            smooth 
            duration={500}
            offset={-100}
            className="cursor-pointer bg-light-blue text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-dark-blue transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Contactar
          </Link>
        </nav>
      </div>
    </header>
  );
}
