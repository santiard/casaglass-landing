import aluminio2 from "../assets/aluminio2.jpg";
import { Link } from "react-scroll";

export default function Products() {
  const productos = [
    {
      nombre: "Aluminios",
      descripcion: "Amplia gama de perfiles y tuberías",
      colores: [
        { nombre: "Blanco", color: "#FFFFFF", border: true },
        { nombre: "Negro", color: "#000000" },
        { nombre: "Natural", color: "#C0C0C0" }
      ]
    },
    {
      nombre: "Vidrios",
      descripcion: "Vidrio tradicional de alta calidad"
    },
    {
      nombre: "Divisiones para Baño",
      descripcion: "Kits completos de vidrio templado para instalar"
    },
    {
      nombre: "Accesorios",
      descripcion: "Accesorios complementarios para instalaciones"
    },
    {
      nombre: "Acrílicos",
      descripcion: "Materiales acrílicos para aplicaciones decorativas"
    }
  ];

  return (
    <section 
      className="py-12 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${aluminio2})` }}
    >
      {/* Overlay con gradiente igual que Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue/90 via-dark-blue/70 to-light-blue/60"></div>
      
      {/* Decoración geométrica */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-light-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6 lg:p-8 animate-fadeIn">
          {/* Encabezado */}
          <div className="text-center mb-6">
            <span className="text-light-blue font-semibold text-sm tracking-widest uppercase">Productos Que Comercializamos </span>
          </div>

          {/* Lista de productos */}
          <div className="space-y-3 mb-6">
            {productos.map((producto, idx) => (
              <div 
                key={idx}
                className="rounded-xl bg-gradient-to-r from-light-gray to-white hover:from-light-blue/10 hover:to-light-blue/5 transition-all duration-300 group overflow-hidden"
              >
                <div className="flex items-start gap-4 p-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-light-blue to-dark-blue rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                    {idx + 1}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-dark-blue group-hover:text-light-blue transition-colors duration-300">
                      {producto.nombre}
                    </h3>
                    <p className="text-dark-gray text-sm mt-1">
                      {producto.descripcion}
                    </p>
                    
                    {/* Sub-sección de colores para Aluminios */}
                    {producto.colores && (
                      <div className="mt-4 pl-4">
                        <p className="text-xs font-semibold text-light-blue uppercase tracking-wider mb-3">Colores Disponibles:</p>
                        <div className="flex flex-wrap gap-3">
                          {producto.colores.map((color, colorIdx) => (
                            <div 
                              key={colorIdx}
                              className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                              <div 
                                className={`w-6 h-6 rounded-md shadow-inner ${color.border ? 'border-2 border-gray-300' : ''}`}
                                style={{ backgroundColor: color.color }}
                              ></div>
                              <span className="text-sm font-medium text-dark-gray">{color.nombre}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón de contacto */}
          <div className="text-center mt-6">
            <Link
              to="sedes"
              smooth
              duration={500}
              offset={-100}
              className="cursor-pointer inline-flex items-center justify-center gap-2 bg-gradient-to-r from-light-blue to-dark-blue hover:from-dark-blue hover:to-light-blue text-white font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contactar
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

