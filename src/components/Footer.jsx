import { Link } from "react-scroll";

export default function Footer() {
    return (
      <footer className="bg-gradient-to-b from-dark-blue to-black text-white">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Columna 1: Logo y descripción */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Casa Glass</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Expertos en comercialización, diseño e instalación de soluciones en aluminio y vidrio templado con más de 10 años de experiencia.
              </p>
            </div>

            {/* Columna 2: Enlaces rápidos */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="inicio" smooth duration={500} className="text-gray-300 hover:text-light-blue transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="galeria" smooth duration={500} offset={-100} className="text-gray-300 hover:text-light-blue transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    Conócenos
                  </Link>
                </li>
                <li>
                  <Link to="productos" smooth duration={500} offset={-100} className="text-gray-300 hover:text-light-blue transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    Productos
                  </Link>
                </li>
                <li>
                  <Link to="nosotros" smooth duration={500} offset={-100} className="text-gray-300 hover:text-light-blue transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="sedes" smooth duration={500} offset={-100} className="text-gray-300 hover:text-light-blue transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    Sedes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: Servicios */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Servicios</h4>
              <div className="space-y-4">
                {/* Ventas */}
                <div>
                  <h5 className="text-white font-semibold text-sm mb-2">Ventas</h5>
                  <ul className="space-y-1.5 text-gray-300 text-sm pl-3">
                    <li className="hover:text-light-blue transition-colors cursor-pointer">• Vidrios</li>
                    <li className="hover:text-light-blue transition-colors cursor-pointer">• Aluminios</li>
                    <li className="hover:text-light-blue transition-colors cursor-pointer">• Acrílicos</li>
                    <li className="hover:text-light-blue transition-colors cursor-pointer">• Divisiones para Baño</li>
                    <li className="hover:text-light-blue transition-colors cursor-pointer">• Accesorios</li>
                  </ul>
                </div>
                
                {/* Diseño e Instalación */}
                <div>
                  <h5 className="text-white font-semibold text-sm mb-2">Diseño e Instalación</h5>
                  <ul className="space-y-1.5 text-gray-300 text-sm pl-3">
                    <li className="hover:text-light-blue transition-colors cursor-pointer">• Ventaneria a Medida</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Columna 4: Contacto */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-light-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div>607 5281830</div>
                    <div>+57 317 867 0627</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-light-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  aluminios_casaglass@hotmail.com
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-light-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div>Lun-Vie: 7:30am-12:00pm | 1:45pm-5:15pm</div>
                    <div>Sáb: 8:00am-12:00pm</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Casa Glass. Todos los derechos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-light-blue transition-colors">Política de Privacidad</a>
                <a href="#" className="hover:text-light-blue transition-colors">Términos y Condiciones</a>
              </div>
            </div>
          </div>
        </div>

        {/* Botón flotante de WhatsApp */}
        <a 
          href="https://wa.me/573178670627" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 z-50 group"
        >
          <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </footer>
    );
  }
  