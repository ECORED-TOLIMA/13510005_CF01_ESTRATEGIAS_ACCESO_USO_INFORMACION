<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Estrategias para el acceso y uso de la información',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión sobre las estrategias de búsqueda, evaluación y uso ético de la información, basado en entornos digitales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la definición de "información" según el componente formativo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un conjunto de datos aislados sin un orden específico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de datos con significado que se interpreta en un contexto para comprender o actuar. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Cualquier contenido encontrado en motores de búsqueda como Google.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Únicamente los documentos académicos revisados por pares.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que la información adquiere significado cuando se interpreta en un contexto para comprender y actuar.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'En la estrategia de búsqueda "embudo", ¿cuál es el orden correcto de los pasos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Delimitar, Explorar, Validar, Precisar y Documentar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Explorar, Delimitar, Precisar, Validar y Documentar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Validar, Explorar, Precisar, Delimitar y Documentar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Documentar, Validar, Precisar, Delimitar y Explorar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Identifica correctamente el orden de la estrategia de búsqueda en embudo para optimizar resultados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué característica define a una fuente de información "Primaria"?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son libros de texto que resumen investigaciones previas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Contiene información original como patentes, normas técnicas o tesis.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Son índices y catálogos bibliográficos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es cualquier información obtenida en redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Reconoce que una fuente primaria contiene información original y de primera mano.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Al construir una ecuación de búsqueda, ¿qué función cumple el operador booleano "OR"?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reduce los resultados exigiendo que ambos términos estén presentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Excluye términos específicos para limpiar el ruido informativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Amplía los resultados aceptando cualquiera de los términos o sinónimos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Filtra los resultados únicamente por formato de archivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Comprende que el operador OR amplía la búsqueda al incluir términos equivalentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Para qué se utilizan los operadores de truncamiento en una estrategia de búsqueda de información?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para excluir términos específicos de los resultados de búsqueda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para unir palabras exactas dentro de una ecuación de búsqueda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para ampliar los resultados incluyendo las diferentes variaciones de una palabra raíz.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Para limitar la búsqueda a un dominio <em>web</em> específico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que el uso del truncamiento permite ampliar los resultados de búsqueda al incluir las variaciones de una misma palabra raíz.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el riesgo principal de usar buscadores <em>web</em> generales como Google o Bing? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No permiten encontrar páginas comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La presencia de ruido informativo y desinformación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Que solo muestran documentos en formato PDF.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La falta de rapidez en la entrega de resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Identifica el ruido informativo y la desinformación como el principal riesgo de buscadores generales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la función principal de un repositorio institucional? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Albergar la producción académica y científica (tesis, informes) de una universidad u organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Vender acceso a revistas científicas internacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Servir como motor de búsqueda de noticias de última hora.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Indexar únicamente patentes industriales internacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que los repositorios institucionales almacenan la producción académica y científica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'En las buenas prácticas TIC, ¿para qué se utiliza el comando "site:"?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para buscar términos dentro del título de una página.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para traducir automáticamente una página <em>web.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para encontrar archivos que han sido eliminados de la <em>web.</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para limitar la búsqueda a un dominio o sitio <em>web</em> específico (ej. .edu o .gov).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Comprende que el comando site: limita la búsqueda a dominios específicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué representa el criterio de "Precisión" en la evaluación de una fuente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que la información haya sido publicada en el último mes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que los datos sean correctos, verificables y cuenten con referencias o coherencia interna.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Que el diseño de la página <em>web</em> sea profesional y moderno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que el autor sea un influencer con muchos seguidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Identifica que la precisión se relaciona con datos correctos, coherentes y verificables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué es un "Activo de información"?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cualquier empleado que use computadoras en la oficina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El dinero físico que se encuentra en la caja menor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Recurso con valor para la organización (datos, sistemas, conocimientos) cuya protección es fundamental.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Las redes sociales personales de los directivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que un activo de información es un recurso valioso que debe ser protegido.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'La "Continuidad del negocio" se define como:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La capacidad de una organización para mantener funciones críticas y recuperarse ante incidentes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La capacidad de vender productos sin interrupciones durante las vacaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El proceso de contratar personal nuevo cada mes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La obligación de cambiar todos los equipos de cómputo anualmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Comprende que integrar operadores, filtros y lenguajes de búsqueda permite obtener información confiable y pertinente de forma ética y precisa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de las siguientes opciones describe mejor una búsqueda de información académica eficiente y confiable?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar un buscador general, escribir palabras sueltas y seleccionar el primer resultado disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aplicar términos en lenguaje natural, sin filtros ni operadores, para obtener la mayor cantidad posible de resultados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Combinar lenguaje natural y lenguaje controlado, usar operadores de búsqueda, aplicar filtros avanzados y evaluar la fuente de la información.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Limitar la búsqueda únicamente a repositorios institucionales sin construir ecuaciones de búsqueda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Identifica correctamente la norma ISO 22301 para la continuidad del negocio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Un aprendiz necesita elaborar un informe académico con datos oficiales recientes sobre turismo en Colombia y en formato que permita análisis numérico. ¿Cuál sería la estrategia de búsqueda más adecuada?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Combinar filtros por dominio gubernamental, formato de archivo y fecha de publicación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Consultar únicamente blogs especializados en turismo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Buscar el tema en redes sociales para conocer tendencias actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Usar un buscador general sin filtros para obtener mayor cantidad de resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce los filtros adecuados para una búsqueda académica precisa y confiable.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la diferencia entre lenguaje natural y lenguaje controlado en las búsquedas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El lenguaje natural solo usa códigos binarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'No existe diferencia; ambos arrojan los mismos resultados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El lenguaje natural solo se usa en libros físicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El lenguaje controlado utiliza términos estandarizados o descriptores (tesauros).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Comprendes que el lenguaje controlado usa términos estandarizados para mejorar la búsqueda.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Según las estrategias de búsqueda, ¿qué acción permite pasar de una búsqueda general a una más precisa y pertinente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar únicamente buscadores generales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Formular preguntas extensas en lenguaje natural.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Seleccionar palabras clave y combinarlas mediante operadores de búsqueda.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Consultar una sola fuente de información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Identifica que esta acción mejora la precisión de la búsqueda.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué herramienta permite identificar procesos críticos y evaluar las consecuencias de su interrupción? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Análisis de impacto en el negocio (BIA).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Manual de funciones y procedimientos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Catálogo de productos y servicios comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Encuesta de satisfacción del cliente externo e interno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que el BIA permite identificar procesos críticos y sus impactos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Para qué se recomienda específicamente el uso de buscadores académicos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para ver videos virales de entretenimiento y ocio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para localizar artículos científicos, tesis y documentos con rigor académico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para realizar compras de libros electrónicos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para buscar opiniones personales en blogs de tendencias',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Comprende que los buscadores académicos permiten acceder a información con rigor científico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'En una ecuación de búsqueda avanzada, ¿qué función cumple el signo menos (-)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Indica que la palabra es la más importante de la frase.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Busca sinónimos de esa palabra automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Une dos palabras para que aparezcan siempre juntas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Excluye los resultados que contienen ese término (función NOT).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Identifica que el signo menos (-) excluye términos no deseados en la búsqueda.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es una característica clave de las bases de datos bibliográficas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Son repositorios exclusivos de una sola universidad local.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Concentran revistas científicas indexadas con evaluación por pares.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No permiten filtrar por año o autor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contienen únicamente noticias de prensa de libre acceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoce que las bases de datos bibliográficas reúnen revistas científicas indexadas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la principal diferencia entre los buscadores generales y las bases de datos académicas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los buscadores generales solo funcionan con operadores booleanos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las bases de datos académicas no utilizan palabras clave.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los buscadores generales permiten filtrar por formato y fecha, mientras que las bases de datos no.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las bases de datos académicas ofrecen mayor precisión al trabajar con metadatos y criterios especializados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Comprende que las bases de datos priorizan precisión y rigor.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
