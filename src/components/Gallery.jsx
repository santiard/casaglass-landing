import { useState, useEffect } from "react";
import personal from "../assets/personal.jpg";
import instalaciones from "../assets/instalaciones.jpg";
import trabajos from "../assets/trabajos.jpg";
import productos from "../assets/productos.jpg";
import joseluis from "../assets/JOSELUIS.jpg";

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: personal,
      title: "Nuestro Equipo Humano",
      subtitle: "El corazón de CasaGlass",
      description: "Contamos con un equipo altamente capacitado y comprometido. Valoramos a cada miembro de nuestra familia CasaGlass, brindándoles las mejores condiciones laborales y oportunidades de crecimiento.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      stats: [
        { value: "+15", label: "Colaboradores" },
        { value: "+10", label: "Años de Experiencia" },
        { value: "100%", label: "Capacitados" }
      ]
    },
    {
      src: joseluis,
      title: "Diseño E Instalación De Ventaneria",
      subtitle: "Servicios Especializados",
      description: "Ofrecemos servicios profesionales de corte, diseño e instalación de ventaneria. Nuestros técnicos especializados garantizan acabados perfectos con la más alta precisión.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14a2 2 0 104 0" />
        </svg>
      ),
      stats: [
        { value: "24/7", label: "Atención" },
        { value: "300+", label: "Instalaciones" },
        { value: "Garantía", label: "Total" }
      ]
    },
    {
      src: productos,
      title: "Productos de Calidad Premium",
      subtitle: "Lo mejor en aluminio y vidrio",
      description: "Comercializamos una amplia gama de productos: ventanas, vidrios, divisiones, accesorios y más. Solo trabajamos con productos de primera calidad que garantizan durabilidad.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      stats: [
        { value: "200+", label: "Productos" },
        { value: "Premium", label: "Calidad" },
        { value: "Stock", label: "Disponible" }
      ]
    },
    {
      src: instalaciones,
      title: "Instalaciones Adecuadas",
      subtitle: "Tecnología de vanguardia",
      description: "Contamos con instalaciones equipadas corte y fabricación. Ubicadas en La Insula, Los Patios y el Centro. Nuestras sedes están diseñadas para ofrecer el mejor servicio y atención a nuestros clientes.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      stats: [
        { value: "3", label: "Sedes" },
        { value: "1200m²", label: "Instalaciones" },
        { value: "Moderno", label: "Equipamiento" }
      ]
    },
    {
      src: trabajos,
      title: "Cortes De Aluminio",
      subtitle: "Servicios de Corte Incluido",
      description: "Ofrecemos servicios profesionales de corte. Nuestros técnicos especializados garantizan cortes de aluminio perfectos con la más alta precisión.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14a2 2 0 104 0" />
        </svg>
      ),
      stats: [
        { value: "Atención", label: "Al Instante" },
        { value: "+10.000", label: "Cortes Realizados" },
        { value: "100%", label: "Precisión" }
      ]
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000); // 15 segundos
    return () => clearInterval(timer);
  }, [slides.length, currentSlide]); // Se reinicia cuando cambia el slide manualmente

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="pt-24 pb-12 bg-gradient-to-b from-white via-light-gray to-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-dark-blue">
            La Excelencia de CasaGlass
          </h2>
          <p className="max-w-5xl mx-auto text-lg text-dark-gray">
            Descubre qué nos hace diferentes: nuestro equipo, servicios, productos e instalaciones
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative">
          {/* Contenedor principal del slide - altura fija */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
              {/* Imagen */}
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                <img
                  src={currentSlideData.src}
                  alt={currentSlideData.title}
                  className={`w-full h-full object-cover transition-transform duration-1000 hover:scale-105 ${
                    currentSlideData.src === trabajos ? 'object-[center_70%]' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/60 to-transparent"></div>
                
                {/* Ícono flotante */}
                <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 transition-all duration-500 hover:scale-110">
                  {currentSlideData.icon}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-light-gray">
                <div className="mb-6">
                  <span className="inline-block text-light-blue font-bold text-sm tracking-widest uppercase mb-3">
                    {currentSlideData.subtitle}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-dark-blue mb-4 leading-tight">
                    {currentSlideData.title}
                  </h3>
                  <p className="text-base lg:text-lg text-dark-gray leading-relaxed mb-6">
                    {currentSlideData.description}
                  </p>
                </div>

                {/* Estadísticas */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
                  {currentSlideData.stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-3 md:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="text-lg md:text-xl lg:text-2xl font-bold text-light-blue mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm lg:text-sm text-dark-gray font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Indicadores de progreso */}
                <div className="flex gap-3">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`relative h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentSlide 
                          ? 'bg-light-blue flex-grow' 
                          : 'bg-gray/30 w-12 hover:bg-gray/50'
                      }`}
                    >
                      {idx === currentSlide && (
                        <div className="absolute inset-0 bg-dark-blue rounded-full animate-progress"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center text-dark-blue hover:text-light-blue transition-all duration-300 hover:scale-110 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goToSlide((currentSlide + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center text-dark-blue hover:text-light-blue transition-all duration-300 hover:scale-110 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Miniaturas */}
        <div className="grid grid-cols-5 gap-4 mt-12 max-w-5xl mx-auto">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                idx === currentSlide 
                  ? 'ring-4 ring-light-blue scale-105 shadow-xl' 
                  : 'ring-2 ring-gray/20 hover:ring-light-blue/50 hover:scale-105'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-24 object-cover"
              />
              <div className={`absolute inset-0 transition-opacity duration-300 ${
                idx === currentSlide ? 'bg-light-blue/20' : 'bg-black/40 hover:bg-black/20'
              }`}></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
