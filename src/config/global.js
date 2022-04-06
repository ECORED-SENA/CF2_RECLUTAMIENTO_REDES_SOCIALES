export default {
  global: {
    componenteFormativo:
      'Fuentes de información y evaluación para selección del personal.',
    descripcionCurso:
      'Los contenidos propuestos en este componente de formación, permitirán, en primer lugar, validar las fuentes para la recolección de información de los candidatos según los lineamientos de la organización, y en segundo lugar, se estudiara como evaluar al candidato según los términos de la convocatoria.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Hoja de vida ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis según lineamientos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Validación de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Referentes de evaluación ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Elaboración de informes ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Plataformas y repositorios',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'AGUILAR, W. C. V. (1992). Hoja de vida (Tesis doctoral, Universidad Nacional Jorge Basadre Grohmann).',
    },
    {
      referencia:
        'Cubillos Rueda, J. C. (2020). Análisis de requerimientos, Diseño Frontend y de base de datos del aplicativo web, para el control de las hojas de vida de los graduados en las Unidades Tecnológicas de Santander.',
    },
    {
      referencia:
        'David, C. P. E., & Jeancarlos, P. C. (2019). Desarrollo de un aplicativo Android que genere un repositorio de hojas de vida para aspirantes a puestos vacantes en el centro estético millennials (Tesis doctoral, Instituto superior tecnológico de Guayaquil).',
      link: 'http://dspace.itsgg.edu.ec:8080/jspui/handle/123456789/32',
    },
    {
      referencia:
        'Ojeda-Avellaneda, A. C., Torres-Lizarazo, D. F., & Monsalve-Flórez, J. A. (2021). Conceptualización de la Hoja de vida de lector como instrumento de evaluación formativa en la educación superior. Entramado, 17(1), 150-167.',
    },
    {
      referencia:
        'REAL ACADEMIA ESPAÑOLA. (2021) Diccionario de la lengua española, 23.ª ed.',
      link: 'https://dle.rae.es',
    },
  ],
  glosario: [
    {
      termino: 'Informe',
      significado:
        'Exposición oral o escrita sobre el estado de una cosa o de una persona, sobre las circunstancias que rodean un hecho, etc.',
    },
    {
      termino: 'Hoja de vida ',
      significado:
        'Es la carta de presentación del aspirante y una herramienta para acceder a una entrevista de trabajo.',
    },
    {
      termino: 'Plataformas',
      significado:
        'Entorno informático determinado, que utiliza sistemas compatibles entre sí.',
    },
    {
      termino: 'Repositorio',
      significado:
        'Sitio centralizado <em>(web)</em> donde se almacena y se preserva información digital, habitualmente bases de datos o archivos informáticos.',
    },
  ],
  complementario: [
    {
      texto:
        'Cubillos Rueda, J. C. (2020). Análisis de requerimientos, Diseño Frontend y de base de datos del aplicativo web, para el control de las hojas de vida de los graduados en las Unidades Tecnologicas de Santander.',
      tipo: 'Documento',
      link: 'http://repositorio.uts.edu.co:8080/xmlui/handle/123456789/3979',
    },
    {
      texto:
        'David, C. P. E., & Jeancarlos, P. C. (2019). Desarrollo de un aplicativo Android que genere un repositorio de hojas de vida para aspirantes a puestos vacantes en el centro estético millennials (Tesis doctoral, Instituto superior tecnológico de Guayaquil).',
      tipo: 'Documento',
      link: 'http://dspace.itsgg.edu.ec:8080/jspui/handle/123456789/32',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anderson Ferney Archila Calixto',
        cargo: 'Experto Temático',
        centro:
          'Centro de la Industria de la Empresa y los Servicios - CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Paola Andrea Quintero Aguilar',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcela Alarcon Granados',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo Front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
