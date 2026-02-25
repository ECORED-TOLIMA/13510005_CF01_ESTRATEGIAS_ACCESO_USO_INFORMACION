<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Información: concepto y características de la información

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema1/img-01.png', alt='Imagen decorativa')

    p.mb-4 La información es un conjunto de datos con significado: se interpreta en un contexto y sirve para comprender, decidir o actuar. En alfabetización informacional, no basta con “encontrar algo”: se requiere entender, verificar y usar con propósito. Para que la información sea útil debe cumplir con unos atributos o características:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <em>Características de la información útil</em>  

      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/figura-1-1v.svg', alt='Figura 1 que presenta las principales características para evaluar la calidad y utilidad de la información, destacando: trazabilidad, pertinencia, confiabilidad, actualidad, precisión y claridad, acompañadas de preguntas orientadoras que facilitan su verificación y análisis.', style="width: 1043px").m-auto
      .col-12
        figure.movil
          img(src='@/assets/curso/tema1/figura-1-2v.svg', alt='Figura 1 que presenta las principales características para evaluar la calidad y utilidad de la información, destacando: trazabilidad, pertinencia, confiabilidad, actualidad, precisión y claridad, acompañadas de preguntas orientadoras que facilitan su verificación y análisis.', style="width: 1043px").m-auto

    p.mb-4.text-center A continuación, se da un ejemplo al respecto:

    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img-02.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Necesidad
            h5.t2.mb-2 Necesidad
            p ¿Qué estrategias reducen la desinformación en redes?
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img-03.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Mala información
            h5.t2.mb-2 Mala información
            p Ideo viral sin autor ni fuentes.
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img-04.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Buena información
            h5.t2.mb-2 Buena información
            p Informe de organismo reconocido + referencias + metodología pública.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 La Infodemia y la Integridad de la Información

    p.mb-4 El ecosistema digital actual presenta riesgos como el "ruido informativo" y la desinformación. Como expertos, se debe diferenciar técnicamente los tipos de fallos en la información, teniendo en cuenta lo siguiente:

    .row.justify-content-center.ali.mb-4(data-aos="fade-left")
      .col-lg-12(data-aos="fade-down")
        .tarjeta--container.row.mb-3
          .col-xl.col-md-6.tarjeta.color-primario.p-4(style="background-color:#FFEDB1")
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/tema1/img-05.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 #[i Misinformation] (Información errónea)
            p.mb-0 Información falsa, pero que no tiene la intención de causar daño (ej. un dato mal copiado en un reporte manual).
          .col-xl.col-md-6.tarjeta.color-secundario.p-4(style="background-color:#E2E2E2")
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/tema1/img-06.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 #[i Disinformation] (Desinformación)
            p.mb-0 Información creada deliberadamente para engañar. Suele carecer de autoridad, perfiles profesionales claros o respaldo de evidencia (ej. una noticia fabricada para manipular la opinión pública).
          .col-xl.col-md-6.tarjeta.color-secundario.p-4(style="background-color:#FED2C7")
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/tema1/img-07.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 #[i Malinformation] (Información maliciosa)
            p.mb-0 Información basada en la realidad, pero utilizada para causar daño o sesgar la opinión pública (ej. filtrar datos privados de una institución).

    p.mb-4 Igualmente, se relaciona la siguiente tabla comparativa que permite contrastar el ruido informativo con los activos de información confiable, con el fin de fortalecer el análisis crítico y la evaluación de fuentes en entornos digitales:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1.
      span  #[i Ruido informativo vs. Activos de información]
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr(data-aos="fade-right")
            th(style="width: 10%; background-color: #C1E4DD;") Atributo
            th(style="width: 45%; background-color: #C1E4DD;") Fuente A: ruido Informativo (No confiable)
            th(style="width: 45%; background-color: #C1E4DD;") Fuente B: activo de Información (Confiable)
        tbody
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") #[b Origen]
            td(style="background-color: #F6F6F6;") Video viral en TikTok/WhatsApp de un "analista" anónimo.
            td(style="background-color: #F6F6F6;") Informe técnico de la UNESCO o el Instituto Reuters.
          tr(data-aos="fade-right")
            td.text-center #[b Autoridad]
            td Ausencia de perfil profesional, autoría anónima o pseudónimo.
            td Expertos certificados en comunicación digital y TIC.
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") #[b Evidencia]
            td(style="background-color: #F6F6F6;") Opiniones subjetivas, lenguaje emocional y sin datos de respaldo.
            td(style="background-color: #F6F6F6;") Metodología de investigación pública, datos estadísticos y bibliografía.
          tr(data-aos="fade-right")
            td.text-center #[b Seguridad]
            td Enlaces acortados que redirigen a sitios sin protocolo HTTPS.
            td Portal institucional con certificado SSL/TLS vigente y entorno seguro.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Atributos avanzados de la calidad de información

    p.mb-4 Para que la información respalde una decisión/acción efectiva, se deben considerar dimensiones técnicas adicionales a las básicas, las cuales son:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 2.
      span  #[i Atributos avanzados de la información]
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr(data-aos="fade-right")
            th(style="width: 15%; background-color: #C1E4DD;") Atributo técnico
            th(style="width: 30%; background-color: #C1E4DD;") Definición profesional
            th(style="width: 30%; background-color: #C1E4DD;") Relación con el componente
        tbody
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") Integridad
            td(style="background-color: #F6F6F6;") Garantía de que la información permanece completa y sin alteraciones no autorizadas.
            td(style="background-color: #F6F6F6;") Refuerza la Confiabilidad y el uso de entornos seguros.
          tr(data-aos="fade-right")
            td.text-center Accesibilidad
            td Facilidad con la que la información puede ser recuperada por los usuarios autorizados.
            td Se relaciona con la eficiencia de los buscadores y bases de datos.
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") Consistencia
            td(style="background-color: #F6F6F6;") La información no debe ser contradictoria cuando se extrae de diferentes fuentes confiables.
            td(style="background-color: #F6F6F6;") Es la base de la precisión y la verificación cruzada.
          tr(data-aos="fade-right")
            td.text-center Valor ético
            td Respeto por la autoría y la normativa vigente al usar el activo de información.
            td Cumplimiento de la propiedad intelectual y normas de citación.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span <em>Del dato a la información</em>  

      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/figura-2-1v.svg', alt='Figura 2 que ilustra el proceso de la información, desde un dato aislado que, al incorporarse en un contexto e interpretarse, se transforma en información útil para la toma de decisiones y acciones.', style="width: 1043px").m-auto
      .col-12
        figure.movil
          img(src='@/assets/curso/tema1/figura-2-2v.svg', alt='Figura 2 que ilustra el proceso de la información, desde un dato aislado que, al incorporarse en un contexto e interpretarse, se transforma en información útil para la toma de decisiones y acciones.', style="width: 1043px").m-auto

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Procedencia: el ecosistema digital de búsqueda

    p.mb-4 En el entorno digital actual, la información circula a través de múltiples canales y plataformas, cada uno con alcances, propósitos y niveles de confiabilidad distintos. Comprender la procedencia de la información permite elegir de manera estratégica dónde buscar según el objetivo, el nivel de profundidad requerido y el rigor esperado. Por consiguiente, a continuación, se presentan los principales tipos de buscadores y fuentes digitales, sus características y usos recomendados, como guía para desarrollar búsquedas más críticas, eficientes y responsables:

    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C01" data-aos="zoom-in")
      .row.justify-content-center(titulo="Buscadores web")
        .col-lg-6.order-lg-1.order-2
          p.mb-4 En ellos se accede a una gran diversidad de páginas y contenidos de distinta naturaleza, que incluyen información académica, institucional, comercial y de opinión. Aunque permiten una exploración rápida y amplia del tema, presentan como principal riesgo la presencia de ruido informativo y desinformación, por lo que se recomienda su uso en etapas iniciales de la búsqueda, como punto de partida para reconocer el panorama general. 
          p.mb-0 #[b Ejemplos:]
          ul.lista-ul
            li.mb-0 
              i.lista-ul__vineta
              | Google
            li.mb-0 
              i.lista-ul__vineta
              | Bing
            li.mb-0 
              i.lista-ul__vineta
              | DuckDuckGo
            li.mb-0 
              i.lista-ul__vineta
              | Yahoo Search
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/img-08.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Buscadores académicos")
        .col-lg-6.order-lg-1.order-2
          p.mb-4 Permiten localizar artículos científicos, tesis y documentos de carácter académico provenientes de revistas, universidades y centros de investigación. Su principal fortaleza es el acceso a contenidos con mayor rigor académico; sin embargo, en algunos casos el acceso al texto completo puede estar restringido. Se recomienda su uso para obtener evidencia académica confiable y respaldar trabajos formativos o investigativos.
          p.mb-0 #[b Ejemplos:]
          ul.lista-ul
            li.mb-0 
              i.lista-ul__vineta
              | Google Scholar
            li.mb-0 
              i.lista-ul__vineta
              | Semantic Scholar
            li.mb-0 
              i.lista-ul__vineta
              | BASE (Bielefeld Academic Search Engine)
            li.mb-0 
              i.lista-ul__vineta
              | ERIC (Education Resources Information Center)
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/img-09.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Bases de datos bibliográficas")
        .col-lg-6.order-lg-1.order-2
          p.mb-4 Concentran revistas científicas indexadas y publicaciones especializadas, organizadas mediante criterios de calidad editorial y evaluación por pares. Aunque suelen presentar barreras de pago o acceso institucional, constituyen una fuente clave para procesos de investigación formal y elaboración de trabajos con alto nivel de profundidad y rigor.
          p.mb-0 #[b Ejemplos:]
          ul.lista-ul
            li.mb-0 
              i.lista-ul__vineta
              | Scopus
            li.mb-0 
              i.lista-ul__vineta
              | Web of Science
            li.mb-0 
              i.lista-ul__vineta
              | EBSCOhost
            li.mb-0 
              i.lista-ul__vineta
              | ScienceDirect
            li.mb-0 
              i.lista-ul__vineta
              | JSTOR
            li.mb-0 
              i.lista-ul__vineta
              | ProQuest
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/img-10.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Repositorios institucionales")
        .col-lg-6.order-lg-1.order-2
          p.mb-4 Albergan la producción académica y científica de universidades y organizaciones, como tesis, informes técnicos, artículos y materiales educativos. Si bien la calidad de los contenidos puede variar según las políticas de cada institución, estos repositorios son especialmente útiles para consultar tesis, informes y documentos de investigación aplicada.
          p.mb-0 #[b Ejemplos:]
          ul.lista-ul
            li.mb-0 
              i.lista-ul__vineta
              | Repositorio Institucional Universidad Nacional de Colombia
            li.mb-0 
              i.lista-ul__vineta
              | Repositorio SENA
            li.mb-0 
              i.lista-ul__vineta
              | DSpace (plataforma usada por muchas universidades)
            li.mb-0 
              i.lista-ul__vineta
              | Repositorio Digital de la Universidad de Antioquia
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/img-11.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Sitios oficiales")
        .col-lg-6.order-lg-1.order-2
          p.mb-4 Los sitios de entidades gubernamentales y organismos reconocidos proporcionan normas, estadísticas, informes y datos oficiales. Aunque pueden reflejar un enfoque institucional específico, son fuentes confiables para acceder a información normativa, regulatoria y estadística, especialmente en contextos académicos y productivos.
          p.mb-0 #[b Ejemplos:]
          ul.lista-ul
            li.mb-0 
              i.lista-ul__vineta
              | DANE
            li.mb-0 
              i.lista-ul__vineta
              | Ministerio de Educación Nacional
            li.mb-0 
              i.lista-ul__vineta
              | Organización Mundial de la Salud
            li.mb-0 
              i.lista-ul__vineta
              | UNESCO
            li.mb-0 
              i.lista-ul__vineta
              | Gobierno de Colombia
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/img-12.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Redes sociales")
        .col-lg-6.order-lg-1.order-2
          p.mb-4 Permiten identificar tendencias, opiniones y discusiones en tiempo real sobre diversos temas. No obstante, presentan un alto riesgo de desinformación y contenidos no verificados, por lo que su uso debe realizarse con cautela y limitarse principalmente a la comprensión del contexto social o a la identificación de percepciones, nunca como fuente principal de información académica.
          p.mb-0 #[b Ejemplos:]
          ul.lista-ul
            li.mb-0 
              i.lista-ul__vineta
              | X (antes Twitter)
            li.mb-0 
              i.lista-ul__vineta
              | Facebook
            li.mb-0 
              i.lista-ul__vineta
              | Instagram
            li.mb-0 
              i.lista-ul__vineta
              | LinkedIn
            li.mb-0 
              i.lista-ul__vineta
              | YouTube
            li.mb-0 
              i.lista-ul__vineta
              | TikTok
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/img-13.png', alt="Imagen decorativa")

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        p.mb-4 Existen diferentes rutas para la búsqueda de información, destacándose entre todas ellas la de embudo, la cual se explica a continuación:
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span <em>Estrategia “embudo”: comenzar amplio y terminar preciso</em>  

      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/figura-3-1v.svg', alt='Figura 3 que ilustra la estrategia de búsqueda tipo embudo, iniciando con una exploración amplia y avanzando progresivamente hacia la precisión, validación y documentación de la información.', style="width: 1043px").m-auto
      .col-12
        figure.movil
          img(src='@/assets/curso/tema1/figura-3-2v.svg', alt='Figura 3 que ilustra la estrategia de búsqueda tipo embudo, iniciando con una exploración amplia y avanzando progresivamente hacia la precisión, validación y documentación de la información.', style="width: 1043px").m-auto











































</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
