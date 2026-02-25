<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Lenguajes naturales y lenguaje controlado
    
    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema7/img-01.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/tema7/img-02.svg" alt="Imagen decorativo")
      .col-lg-9
        p.mb-4(data-aos="fade-left") Para comprender cómo funcionan los sistemas de búsqueda académica y documental, es necesario distinguir entre dos formas de expresar una necesidad de información: el lenguaje natural y el lenguaje controlado. A continuación, se explicará brevemente cada uno de estos lenguajes, mostrando cómo se relacionan y cómo el proceso de búsqueda implica traducir lo que el usuario formula de manera cotidiana en términos estandarizados que los sistemas de información pueden interpretar con mayor precisión y consistencia. Esta relación actúa como un puente lingüístico que optimiza la recuperación de información relevante y confiable. Cada uno se sintetiza de la siguiente manera:
        .row
          .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
            .tarjeta-numerada.color-primario.p-5.h-100
              .tarjeta-numerada__numero
                .h2 1
              p.text-center 
                b Lenguaje natural
              p.text-center.mb-0 Como habla la gente (“cómo buscar info confiable”).
          .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-right")
            .tarjeta-numerada.color-secundario.p-5.h-100
              .tarjeta-numerada__numero
                .h2 2
              p.text-center 
                b Lenguaje controlado
              p.text-center.mb-0 Términos estandarizados (tesauros/descriptores).
          .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-left")
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 3
              p.text-center 
                b Ejemplo
              p.text-center Natural: “uso ético de la info”. 
              p.text-center Controlado: “propiedad intelectual”, “derechos de autor”, “citación”.

    p El proceso técnico de búsqueda requiere traducir la necesidad del usuario (lenguaje natural) a una estructura que el sistema de información entienda (lenguaje controlado).
    p.mb-4 Al respecto, la siguiente tabla relaciona cómo una necesidad de información expresada en lenguaje natural se transforma en lenguaje controlado durante el proceso de búsqueda, permitiendo que los sistemas de información recuperen resultados más precisos y pertinentes:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 5.
          span  #[i El puente lingüístico ]
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 15%; background-color: #C1E4DD;") Etapa
                th(style="width: 30%; background-color: #C1E4DD;") Ejemplo en lenguaje natural
                th(style="width: 30%; background-color: #C1E4DD;") Ejemplo en lenguaje controlado
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") Consulta Inicial
                td(style="background-color: #F6F6F6;") "Cómo citar bien para no copiar".
                td(style="background-color: #F6F6F6;") "Derechos de autor", "Normas de citación", "APA".
              tr(data-aos="fade-right")
                td.text-center Búsqueda técnica
                td "Reglas para el uso ético de la info".
                td "Propiedad intelectual", "Ética de la información".

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Descriptores y tesauros (normalización)

    p.mb-4 Mientras que el lenguaje natural es ambiguo y rico en sinónimos, el lenguaje controlado utiliza descriptores únicos para representar conceptos, por ejemplo:

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema7/img-03.png', alt='Imagen decorativa')
      .col-lg-6       
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="Tesauros")
            .col-12.order-lg-2.order-3
              p.mb-0 Son herramientas que funcionan como diccionarios especializados donde se establecen relaciones jerárquicas entre términos (generales, específicos y relacionados). 
          .row.justify-content-center(numero="2" titulo="Eliminación de la sinonimia")
            .col-12.order-lg-2.order-3
              p.mb-0 El lenguaje controlado garantiza que, al buscar "Recursos hídricos", el sistema recupere también documentos que hablen de "Agua", unificando la búsqueda bajo un solo descriptor oficial. 
          .row.justify-content-center(numero="3" titulo="Precisión semántica")
            .col-12.order-lg-2.order-3
              p.mb-0 Evita la polisemia (palabras con varios significados), asegurando que los resultados sean técnicamente pertinentes a la necesidad del usuario.

    .row.justify-content-center.mb-4
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img-13.svg', alt='Imagen decorativa')
      .col-9
        p.mb-0(data-aos="fade-left") Los términos del lenguaje controlado se almacenan en los metadatos de los documentos (como el autor, el año y las palabras clave). Al realizar una búsqueda profesional, el sistema no escanea solo el texto, sino que cruza los descriptores de la consulta con los metadatos del registro. Esto explica por qué las bases de datos bibliográficas ofrecen mayor precisión que los buscadores #[i web] generales.

    p.mb-4 Para finalizar, se presenta la siguiente sobre el lenguaje natural y el controlado:

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span <em>Lenguaje natural y lenguaje controlado</em>  

      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema7/img-1-1v.svg', alt='Figura 5 que representa de manera gráfica de la relación entre el lenguaje natural y el lenguaje controlado en los procesos de búsqueda de información, donde los términos espontáneos del usuario se traducen en descriptores estandarizados de un tesauro, como recursos hídricos, conservación, sostenibilidad y gestión ambiental, para mejorar la precisión y coherencia de la recuperación de información.', style="width: 1043px").m-auto
      .col-12
        figure.movil
          img(src='@/assets/curso/tema7/img-1-2v.svg', alt='Figura 5 que representa de manera gráfica de la relación entre el lenguaje natural y el lenguaje controlado en los procesos de búsqueda de información, donde los términos espontáneos del usuario se traducen en descriptores estandarizados de un tesauro, como recursos hídricos, conservación, sostenibilidad y gestión ambiental, para mejorar la precisión y coherencia de la recuperación de información.', style="width: 1043px").m-auto

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    datosSlyder: [
      {
        titulo: 'filetype:csv / filetype:xlsx',
        texto:
          'Localiza hojas de cálculo y bases de datos crudas listas para ser importadas en herramientas de análisis.',
        imagen: require('@/assets/curso/tema6/img-07.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'filetype:json / filetype:xml',
        texto:
          'Crucial para analistas que requieren estructuras de datos para alimentar sistemas de información o APIs.',
        imagen: require('@/assets/curso/tema6/img-08.png'),
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
