export default function About() {
    return (
      <section className="pt-12 pb-6 bg-gradient-to-b from-white to-light-gray text-dark-gray" id="nosotros">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Encabezado */}
          <div className="text-center mb-16">
            <span className="text-light-blue font-semibold text-sm tracking-widest uppercase">Sobre Nosotros</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-dark-blue">
              Líderes en Innovación y Calidad
            </h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-dark-gray">
              Con más de 10 años de experiencia y autorizacion de distribuciones oficiales de las mejores marcas, somos especialistas en la comercialización al mayor y detal, ademas contamos con el servicio de diseño, fabricación e instalación de ventaneria para proyectos residenciales y comerciales.
            </p>
          </div>

          {/* Grid de características */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Calidad */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-light-blue to-dark-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dark-blue">Ventas Al Mayor y Detal</h3>
              <p className="text-dark-gray leading-relaxed">
                Comercializamos una amplia gama de productos al mayor y al detal, con los precios mas competitivos del mercado </p>
            </div>

            {/* Experiencia */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-light-blue to-dark-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dark-blue">Experiencia Comprobada</h3>
              <p className="text-dark-gray leading-relaxed">
                Más de 300 proyectos exitosos nos respaldan. Nuestro equipo de expertos garantiza instalaciones perfectas y puntuales.
              </p>
            </div>

            {/* Innovación */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-light-blue to-dark-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dark-blue">Distribuidores de Autorizados</h3>
              <p className="text-dark-gray leading-relaxed">
                Somos distribuidores unicos y autorizados de las mejores marcas de aluminio y vidrio a nivel nacional en la ciudad de Cúcuta.
                Utilizamos materiales de primera calidad con garantia de durabilidad y excelencia en cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  