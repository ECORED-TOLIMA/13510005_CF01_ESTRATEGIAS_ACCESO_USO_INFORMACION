<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Buscadores: concepto, usos, tipos

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema4/img-01.png', alt='Imagen decorativa')

    p.mb-4 Cuando se necesita encontrar información en internet, lo primero que suele hacerse es acudir a un motor de búsqueda. Estas herramientas permiten localizar contenidos digitales de manera rápida, pero su uso efectivo va mucho más allá de escribir una palabra y abrir el primer resultado que aparece.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0 Aprender a utilizar distintos tipos de motores de búsqueda y a aplicar estrategias adecuadas, facilita encontrar información más confiable, pertinente y útil para el desarrollo de actividades académicas.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Motores de búsqueda de uso general
    
    p.mb-4 Los motores #[i web] de uso general, como Google o Bing, permiten acceder a una enorme cantidad de información disponible en internet. En ellos se pueden encontrar páginas #[i web], noticias, #[i blogs], documentos, videos y otros tipos de contenidos.

    .row.no-gutters.align-items-center.mb-4.style___box_1.m-0(data-aos="zoom-in")
      .col-xl-auto.px-0
        figure.d-none.d-xl-block
          img.img-hero(src='@/assets/curso/tema4/img-02.svg', alt='').m-auto
      .col-xl.px-0
        .d-flex.align-items-start
          img.icon-inline.d-none.d-lg-block.me-3(src='@/assets/curso/tema4/img-03.png' alt="Imagen decorativa")
        p.mb-0 Su principal ventaja es la amplitud, ya que ofrecen resultados rápidos y variados sobre casi cualquier tema. Sin embargo, esta misma característica puede generar un exceso de información irrelevante o poco confiable. Por esta razón, los motores #[i web] son más adecuados para explorar un tema por primera vez, identificar conceptos generales o conocer diferentes enfoques antes de profundizar.

    .row.justify-content-center.mb-4
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        img(src='@/assets/curso/tema4/img-04.png' alt="Imagen decorativa")
      .col-lg-8.order-lg-1.order-2.mb-lg-0.mb-4
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 El "Filtro burbuja" en la búsqueda general
        p.mb-4(style="color:#000") Un concepto crítico para el analista de información es el “Filtro burbuja”: los buscadores generales personalizan los resultados según lo que interpretan que el usuario desea conocer. Este proceso puede limitar la diversidad de fuentes, ocultar perspectivas divergentes y relegar información técnica menos “popular”, pero potencialmente más precisa y relevante para el análisis académico.
        .cajon.cajon.C01.color-primario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema4/img-05.svg', alt='').m-auto
          .col-xl
            h4 Recomendación técnica: 
            p.mb-0 Utilizar los motores de uso general solo para reconocer el panorama general e identificar conceptos iniciales.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-8.order-2
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Motores académicos de uso formativo
        p Los motores académicos, como Google Scholar o Semantic Scholar, están diseñados para localizar información con mayor respaldo académico. A través de ellos es posible acceder a artículos científicos, tesis, libros y documentos producidos por universidades y centros de investigación.
        p.mb-4 La principal ventaja de estos motores es el mayor rigor de los contenidos, ya que suelen incluir información validada por la comunidad académica. No obstante, algunos documentos pueden no estar disponibles en acceso abierto. Estos motores son especialmente recomendados para trabajos académicos, informes y procesos de investigación. 
      .col-lg-4.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img-06.png', alt='Imagen decorativa')

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Lógica algorítmica. Popularidad vs. Relevancia académica

    p.mb-4 No todos los buscadores "piensan" igual. Es fundamental entender el criterio que prioriza los resultados, basado en lo siguiente:

    .row.justify-content-center.ali.mb-4(data-aos="fade-left")
      .col-lg-12(data-aos="fade-down")
        .tarjeta--container.row.mb-3
          .col-xl.col-md-6.tarjeta.color-primario.p-4(style="background-color:#FFEDB1")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/tema4/img-07.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Algoritmos de popularidad y personalización (buscadores generales)
            p.mb-0 Motores como Google o Bing priorizan resultados basados en el número de clics, la ubicación geográfica y el historial del usuario. Esto permite una exploración rápida, pero aumenta el riesgo de ruido informativo y desinformación.
          .col-xl.col-md-6.tarjeta.color-secundario.p-4(style="background-color:#FED2C7")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/tema4/img-08.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Algoritmos de relevancia y autoridad (buscadores académicos)
            p.mb-0 Motores como Google Scholar o Semantic Scholar priorizan la autoridad del autor, el número de citas recibidas por otros expertos y el prestigio de la institución editorial. Su fortaleza es el rigor técnico, aunque el acceso al texto completo puede estar restringido.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Bases de datos bibliográficas y repositorios institucionales

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-9.order-2
        p.mb-4 Además de los motores de búsqueda tradicionales, existen espacios especializados que concentran información académica y científica. Una base de datos bibliográfica es un sistema que reúne revistas y documentos académicos provenientes de múltiples instituciones, organizados mediante metadatos como autor, año de publicación y palabras clave, lo que permite realizar búsquedas más precisas y eficientes. Estas bases de datos resultan especialmente útiles para el desarrollo de revisiones bibliográficas y procesos de investigación formal.
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0 Por su parte, un repositorio institucional es una plataforma gestionada por una universidad u organización en la que se difunde su propia producción académica, como tesis, artículos, informes y otros recursos digitales. Aunque la calidad de los contenidos puede variar según la institución, los repositorios constituyen una fuente valiosa para consultar investigaciones aplicadas y trabajos contextualizados.
        p A continuación, se ejemplifica un poco ambas fuentes de información en un breve comparativo:
      .col-lg-3.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img-09.png', alt='Imagen decorativa')
    
    .cajon.cajon.C04.p-5.mb-5
      SlyderB(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    datosSlyder: [
      {
        titulo: 'Base bibliográfica',
        texto:
          'Alcance: multifuente. <br>Calidad: suele ser más controlada. <br>Uso ideal: revisión sistemática.',
        imagen: require('@/assets/curso/tema4/img-10.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Repositorio institucional',
        texto:
          'Alcance: de una institución. <br>Calidad: variable según políticas. <br>Uso ideal: tesis, producción institucional.',
        imagen: require('@/assets/curso/tema4/img-11.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
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
