<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo fortalece las capacidades analíticas necesarias para desenvolverse de manera crítica en los entornos digitales contemporáneos. Se orienta a la aplicación de estrategias avanzadas de búsqueda, la verificación rigurosa de fuentes mediante criterios de confiabilidad y seguridad, y la organización ética de la información. El contenido abarca desde fundamentos esenciales hasta la comprensión del ecosistema digital, diferenciando entre buscadores generales, motores académicos y bases de datos especializadas que garantizan el rigor investigativo.
    p.mb-4 La integración de estas estrategias posibilita la transición de una búsqueda reactiva a una curaduría de contenidos proactiva, sistemática y consciente. Al dominar el uso de lenguajes controlados, herramientas de automatización y sintaxis de búsqueda avanzada, el aprendiz no solo recupera datos, sino que gestiona información íntegra, pertinente y coherente. Este dominio técnico constituye un pilar para el desarrollo del pensamiento crítico, la seguridad digital, la honestidad académica y la excelencia en la toma de decisiones en cualquier entorno profesional contemporáneo.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis del componente formativo Fundamentos para la búsqueda y organización de la información, describe un recorrido progresivo que inicia con la comprensión de la información como un activo con significado, características y procedencia dentro del ecosistema digital. Continúa con el reconocimiento y análisis crítico de las fuentes de información y los distintos tipos de buscadores, diferenciando sus usos, alcances y niveles de confiabilidad. Posteriormente, aborda el diseño de estrategias de búsqueda mediante el uso de operadores, filtros avanzados y ecuaciones de alta precisión, así como la traducción de necesidades informativas desde el lenguaje natural al lenguaje controlado. Este recorrido integra criterios técnicos, éticos y metodológicos que fortalecen el pensamiento crítico, la seguridad digital y la toma de decisiones informadas en contextos académicos y profesionales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
