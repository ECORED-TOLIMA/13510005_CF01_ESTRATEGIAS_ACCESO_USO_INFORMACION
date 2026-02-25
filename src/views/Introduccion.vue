<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-4
      .col-lg-3.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/introduccion/img-01.svg', alt='Imagen decorativa')
      .col-lg-9       
        .row.justify-content-center.mb-3
          .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/introduccion/img-02.svg', alt='Imagen decorativa')
          .col-lg-11
            p.mb-0(data-aos="fade-left") En este componente formativo se abordará la información como recurso fundamental para la construcción del conocimiento, analizando su concepto, procedencia y principales características, así como los distintos tipos de fuentes de información disponibles en contextos académicos y profesionales. Se estudiarán estrategias de búsqueda orientadas a localizar información pertinente y confiable, reconociendo el papel de los buscadores, sus usos y tipologías, junto con las herramientas que facilitan el acceso eficiente a contenidos relevantes.
        .cajon.cajon.C01.color-primario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") Asimismo, se profusndizará en el uso de operadores de búsqueda, filtros avanzados y técnicas de construcción de ecuaciones de alta precisión, integrando el empleo de lenguaje natural y lenguaje controlado. Este enfoque permitirá desarrollar habilidades para recuperar, seleccionar y evaluar información de manera crítica, optimizando los procesos de búsqueda y garantizando la calidad, actualidad y pertinencia de los resultados obtenidos.

    p.mb-4 Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
