export default function Locations() {
    const sedes = [
      { 
        ciudad: "Casa Glass Insula", 
        label: "Sede Principal Ventas al Mayor",
        direccion: "Av 7 # 1-96 La Insula", 
        telefono: "607 5281830",
        whatsapp: "+57 317 867 0627",
        mapa: "https://maps.app.goo.gl/D59nx7A2iHrrGxPP7" 
      },
      { 
        ciudad: "Casa Glass Centro", 
        label: "Sucursal Ventas al Mayor yDetal",
        direccion: "Calle 7 # 8-63 Centro", 
        telefono: "607 5002649",
        whatsapp: "+57 321 238 9946",
        mapa: "https://maps.app.goo.gl/XKjQXDmpGKd8YSrL9" 
      },
      { 
        ciudad: "Casa Glass Patios", 
        label: "Sucursal Ventas al Detal",
        direccion: "Av 10 KDX 30A-1B Los Patios", 
        telefono: "607 5557701",
        whatsapp: "+57 301 9710184",
        mapa: "https://maps.app.goo.gl/hJDnkKJ4CBfYyZB66" 
      },
    ];
  
    return (
      <section className="pt-6 pb-24 bg-gradient-to-b from-light-gray to-white">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Encabezado */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-dark-blue">
              Nuestras Sedes
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-dark-gray">
              Visítanos en cualquiera de nuestras ubicaciones o contáctanos para una cotización personalizada
            </p>
          </div>

          {/* Grid de sedes */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
          {sedes.map((sede, i) => (
              <div 
                key={i} 
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2"
              >
                {/* Header de la card */}
                <div className="bg-gradient-to-r from-dark-blue to-light-blue p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <span className="text-xs font-semibold tracking-wider uppercase opacity-80">{sede.label}</span>
                  <h3 className="text-3xl font-bold mt-1 relative z-10">{sede.ciudad}</h3>
                </div>

                {/* Contenido */}
                <div className="p-6 space-y-4">
                  {/* Dirección */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-light-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark-blue mb-1">Dirección</p>
                      <p className="text-dark-gray">{sede.direccion}</p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-light-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark-blue mb-1">Teléfono</p>
                      <p className="text-dark-gray">{sede.telefono}</p>
                      <p className="text-dark-gray text-sm mt-1">WhatsApp: {sede.whatsapp}</p>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-light-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark-blue mb-2">Horario</p>
                      <p className="text-dark-gray text-sm">Lun-Vie: 7:30am-12:00pm | 1:45pm-5:15pm</p>
                      <p className="text-dark-gray text-sm mt-1">Sábado: 8:00am-12:00pm</p>
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="pt-4 space-y-3">
                    <a
                      href={`https://wa.me/${sede.whatsapp.replace(/\s/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </a>
                    
              <a
                href={sede.mapa}
                target="_blank"
                rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-light-blue hover:bg-dark-blue text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md group"
              >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Ver en Mapa
              </a>
                  </div>
                </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    );
  }
  