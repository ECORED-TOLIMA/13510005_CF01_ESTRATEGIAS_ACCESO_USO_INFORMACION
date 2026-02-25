export default {
  global: {
    Name: 'Fundamentos para la búsqueda y organización de la información',
    Description:
      'En este contenido se desarrolla un proceso clave de la formación, en el cual se fortalece la comprensión de la ética empresarial, la sostenibilidad y la toma de decisiones responsables en el mercadeo, aplicándolas en actividades prácticas. Estos aprendizajes permiten diseñar estrategias conscientes y con impacto positivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Información: concepto, procedencia, características',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fuentes de información: concepto, tipos.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estrategias de búsqueda',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Buscadores: concepto, usos, tipos.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Operadores de búsqueda',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Filtros de búsqueda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo:
              'Construcción de ecuaciones de alta precisión (sintaxis combinada)',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Técnicas de filtrado avanzado: por dominio, formato, fecha y región',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Lenguaje natural y lenguaje controlado',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Activo de información',
      significado:
        'recurso que posee valor para la organización, como datos, sistemas, infraestructura o conocimientos, cuya protección es fundamental para la seguridad institucional.',
    },
    {
      termino: 'Análisis de impacto en el negocio (BIA)',
      significado:
        'herramienta que permite identificar los procesos críticos y evaluar las consecuencias de su interrupción para definir estrategias de recuperación.',
    },
    {
      termino: 'Autoridad',
      significado:
        'criterio de evaluación que verifica el autor, la institución, trayectoria, afiliación y citaciones que respaldan la información.',
    },
    {
      termino: 'Base de datos bibliográfica',
      significado:
        'sistema especializado que indexa revistas y documentos académicos con metadatos, organizados mediante criterios de calidad editorial y evaluación por pares.',
    },
    {
      termino: 'Buscador académico',
      significado:
        'herramienta que permite localizar artículos científicos, tesis y documentos de carácter académico provenientes de revistas, universidades y centros de investigación.',
    },
    {
      termino: 'Continuidad del negocio',
      significado:
        'capacidad de una organización para mantener sus funciones críticas y recuperarse rápidamente ante incidentes que interrumpan sus operaciones normales.',
    },
    {
      termino: 'Curaduría de contenidos',
      significado:
        'proceso de búsqueda, selección y organización sistemática de información relevante para asegurar su calidad y utilidad.',
    },
    {
      termino: 'Ecuación de búsqueda',
      significado:
        'construcción lógica de términos, sinónimos y operadores diseñada para obtener resultados de alta precisión en un motor de búsqueda.',
    },
    {
      termino: 'Ecosistema digital de búsqueda',
      significado:
        'entorno compuesto por diversos medios como buscadores <em>web</em>, académicos, bases de datos y redes sociales donde se localiza la información.',
    },
    {
      termino: 'Repositorio institucional',
      significado:
        'plataforma donde universidades u organizaciones albergan su producción académica y científica, como informes técnicos y materiales educativos.',
    },
    {
      termino: 'Riesgo operativo',
      significado:
        'posibilidad de pérdidas o impactos negativos debido a fallas en los procesos, el personal, los sistemas o factores externos.',
    },
    {
      termino: 'Ruido informativo',
      significado:
        'presencia de información irrelevante, no verificada o desinformación que dificulta el acceso a contenidos útiles y confiables.',
    },
  ],
  referencias: [
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO). (2011). <em>Alfabetización mediática e informacional: currículo para profesores.</em> UNESCO.',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000216099',
    },
    {
      referencia:
        'Sánchez, M. & Yubero, S. (2015). <em>Leer en la red.</em> Editorial Síntesis.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2014). <em>Diseño curricular del programa Estrategias para el acceso y uso de la información.</em> SENA.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Omar Alexander Valderrama Espejo',
          cargo: 'Experto temático',
          centro: 'Dirección de Formación Profesional Integral',
        },
        {
          nombre: 'Martha Luz Gutiérrez',
          cargo: 'Experta temática',
          centro: 'Dirección de Formación Profesional Integral',
        },
        {
          nombre: 'Ofelia Corrales',
          cargo: 'Experta temática',
          centro: 'Regional Valle',
        },
        {
          nombre: 'Norma Buenaventura Gisela Alvis',
          cargo: 'Asesora pedagógica',
          centro: 'Centro de Industria y la Construcción -Regional Tolima',
        },
        {
          nombre: 'Solanlly Sánchez Melo',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
