import aluminio from "../assets/aluminio.jpg";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white relative overflow-hidden"
      style={{ backgroundImage: `url(${aluminio})` }}
    >
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue/90 via-dark-blue/70 to-light-blue/60"></div>
      
      {/* Decoración geométrica */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-light-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-5xl animate-fadeIn pt-20 md:pt-0">
        <div className="mb-4 md:mb-6 inline-block">
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-white bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-sm">
            Expertos en Aluminio y Vidrio
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2">
          Soluciones de Alta Calidad
          <br />en Aluminio y Vidrio
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
        Transforma tus espacios usando los mejores materiales. Somos especialistas y comercializadores directos de Aluminio y Vidrio, encuentra con nosotros todo lo necesario para volver realidad tus ideas con la más alta calidad.        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="nosotros" 
            smooth 
            duration={500}
            offset={-100}
            className="cursor-pointer bg-light-blue hover:bg-white hover:text-dark-blue text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 shadow-2xl hover:shadow-white/20 transform hover:scale-105 flex items-center gap-2 group text-sm md:text-base"
          >
            Sobre nosotros
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          
          <Link 
            to="sedes" 
            smooth 
            duration={500}
            offset={-100}
            className="cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white hover:text-dark-blue text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-white/30 hover:border-white transition-all duration-300 shadow-xl transform hover:scale-105 text-sm md:text-base"
          >
            Contáctanos
          </Link>
        </div>
        
        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/20 max-w-3xl mx-auto px-4">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">+10</div>
            <div className="text-xs md:text-sm text-gray-300">Años de Experiencia</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">+300</div>
            <div className="text-xs md:text-sm text-gray-300">Proyectos Completados</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">100%</div>
            <div className="text-xs md:text-sm text-gray-300">Clientes Satisfechos</div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
