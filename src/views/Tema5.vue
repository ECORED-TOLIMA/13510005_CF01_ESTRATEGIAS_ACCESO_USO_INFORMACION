<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Operadores de búsqueda 
    
    .BMG1.px-md-5.px-4
      .row.justify-content-center.mb-4
        .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/tema5/img-01.png', alt='Imagen decorativa')
        .col-lg-8   
          p(data-aos="fade-down") Los operadores de búsqueda son instrucciones lógicas y sintácticas que se incorporan a una consulta para controlar la forma en que un sistema de información localiza, combina y prioriza los resultados. Su función principal es transformar una búsqueda simple en una estrategia estructurada, permitiendo al usuario definir relaciones entre conceptos, establecer jerarquías, ampliar o restringir resultados y aumentar la pertinencia de la información recuperada. En contextos académicos y de investigación, el uso de operadores reduce el ruido informativo, mejora la precisión semántica y facilita la construcción de ecuaciones de búsqueda coherentes con los objetivos del análisis, optimizando así el proceso de recuperación de información confiable y relevante.    
          .row.justify-content-center.mb-3
            .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/introduccion/img-02.svg', alt='Imagen decorativa')
            .col-lg-11
              p(data-aos="fade-left") A continuación, se presentan los principales operadores de búsqueda utilizados en la recuperación de información, con el propósito de explicar de manera clara y aplicada cómo funciona cada uno dentro de una estrategia de búsqueda. En ellos, se destaca su utilidad para refinar consultas, organizar términos y mejorar la precisión y relevancia de los resultados, de acuerdo con las necesidades planteadas en el proceso de investigación:

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Operadores booleanos
    
    p.mb-4 La eficiencia en la recuperación de información depende de ir más allá de las palabras clave básicas. Hay que dominar estas herramientas para filtrar el ruido digital. Cada uno de estos operadores consiste en lo siguiente:

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema5/img-1-1v.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="17.5%" y="18%" numero="+")(style="background-color:#FC9D83")
            p Exige ambos términos (reduce resultados). El operador AND permite la intersección entre dos términos. En la búsqueda arrojará resultados donde se incluyan los dos términos.
          .tarjeta.tarjeta--blanca.p-3(x="50%" y="18%" numero="+")(style="background-color:#FC9D83")
            p Acepta cualquiera (amplía resultados). El operador OR relaciona la unión de términos. En la búsqueda traerá toda la información que contenga al menos una de las palabras.
          .tarjeta.tarjeta--blanca.p-3(x="82%" y="18%" numero="+")(style="background-color:#FC9D83")
            p Excluye (limpia ruido). El operador NOT corresponde a la diferencia y permite excluir uno o varios aspectos del tema que se está consultando.
        figure.movil
          img(src='@/assets/curso/tema5/img-1-2v.svg', alt='Imagen decorativa')

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Operadores de proximidad (NEAR / ADJ)

    p.mb-4 A diferencia del operador AND, que busca términos en cualquier parte del documento, los operadores de proximidad exigen que las palabras estén cerca una de la otra, lo que aumenta drásticamente la relevancia. Estos son sus especificaciones:

    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img-02.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Operador NEAR (N)
            h5.t2.mb-2 Operador NEAR (N)
            p Encuentra documentos donde los términos están a una distancia máxima de "x" palabras entre sí, sin importar el orden.
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img-03.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Operador ADJ (Adyacencia)
            h5.t2.mb-2 Operador ADJ (Adyacencia)
            p Similar a NEAR, pero exige que los términos aparezcan en el orden exacto especificado.
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img-04.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Uso técnico
            h5.t2.mb-2 Uso técnico
            p Es ideal para buscar conceptos compuestos que pueden tener variaciones lingüísticas (ej. "gestión NEAR/3 información").

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Operadores de proximidad (NEAR / ADJ)

    .row.justify-content-center.mb-4
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        figure
          img.img-fluid(src="@/assets/curso/tema5/img-05.png" alt="Imagen decorativo")
      .col-lg-6
        p.mb-4(data-aos="fade-left") Permite recuperar #[b variaciones de una misma raíz léxica], ampliando los resultados sin perder coherencia temática.
        .titulo.mb-4(data-aos="fade-left")
          h4.text-center.mb-0 Ejemplos
        p.mb-0 #[b ambient*]
        p Busca: ambiente, ambiental, ambientalmente, etc.
        p.mb-0 #[b Niñ*]
        p busca: niño (s) / niña / niñez

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema5/img-06.svg', alt='').m-auto
          .col-xl
            h4 \ *
            p.mb-0 Busca documentos que incluyan la raíz del término seguida de cualquier número de caracteres.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Wildcards (comodines) avanzados

    p.mb-4 Además del truncamiento final con el asterisco * para recuperar variaciones de una raíz léxica, existen comodines internos:

    .cajon.cajon.C04.p-5.mb-5
      SlyderB(:datos="datosSlyder")

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Frases exactas (“ ”)

    .row.justify-content-center.mb-4
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        figure
          img.img-fluid(src="@/assets/curso/tema5/img-09.svg" alt="Imagen decorativo")
      .col-lg-6
        p.mb-4(data-aos="fade-left") Permiten buscar una secuencia de palabras en el orden exacto, evitando la dispersión de resultados y mejorando la precisión de la búsqueda.
        .titulo.mb-4(data-aos="fade-left")
          h4.text-center.mb-0 Ejemplo
        p.mb-4 "impacto del calentamiento global"
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p “ ”
          p.mb-0 Busca dos o más palabras, frases exactas o completas, como si fueran un solo término.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Operadores de agrupación ( ( ) )

    p.mb-4 Los paréntesis en la ecuación de búsqueda son utilizados para dar prioridad a los operadores booleanos y crear un orden lógico en la búsqueda del sistema de información. De ahí que los términos que se encuentren en paréntesis se buscan primero.

    .row.justify-content-center.mb-4
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        figure
          img.img-fluid(src="@/assets/curso/tema5/img-10.png" alt="Imagen decorativo")
      .col-lg-6
        .titulo.mb-4(data-aos="fade-left")
          h4.text-center.mb-0 Ejemplo
        p Si la necesidad de investigación fuera sobre Platón y la mímesis desde la literatura, no desde el arte, la cadena de búsqueda se expresaría así:
        p.mb-4 #[b (Platón) AND (mímesis OR representación) NOT (Arte OR estética)]
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p ( )
          p.mb-0 Busca documentos que incluyan la raíz del término seguida de cualquier número de caracteres.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span <em>Operadores</em>  

      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema5/img-2-1v.svg', alt='Figura 4. Explica el uso de paréntesis en la ecuación de búsqueda para agrupar términos (ley OR derecho), la función del operador AND para priorizar conceptos (ambiental) y el truncamiento para recuperar variantes de una palabra (crear, creado, crearemos; palabra, palabras, palabritas).', style="width: 1043px").m-auto
      .col-12
        figure.movil
          img(src='@/assets/curso/tema5/img-2-2v.svg', alt='Figura 4. Explica el uso de paréntesis en la ecuación de búsqueda para agrupar términos (ley OR derecho), la función del operador AND para priorizar conceptos (ambiental) y el truncamiento para recuperar variantes de una palabra (crear, creado, crearemos; palabra, palabras, palabritas).', style="width: 1043px").m-auto

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Anidamiento de ecuaciones complejas

    p.mb-4 El uso de paréntesis no solo da prioridad a los operadores, sino que permite crear estructuras de búsqueda de múltiples niveles, como las siguientes:

    .row.justify-content-center.ali.mb-4(data-aos="fade-left")
      .col-lg-12(data-aos="fade-down")
        .tarjeta--container.row.mb-3
          .col-xl.col-md-6.tarjeta.color-primario.p-4(style="background-color:#FFEDB1")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/tema5/img-11.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Lógica de agrupación
            p.mb-0 Permite combinar sinónimos con OR y luego cruzarlos con términos obligatorios mediante AND.
          .col-xl.col-md-6.tarjeta.color-secundario.p-4(style="background-color:#FED2C7")
            .row.justify-content-center.mb-3
              .col-lg-4.col-6
                figure
                  img(src='@/assets/curso/tema5/img-12.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Ejemplo avanzado
            p.mb-0 (Teletrabajo OR "trabajo remoto") AND (productividad OR eficiencia) NOT (estrés OR "salud mental"). Esta ecuación busca el impacto del trabajo remoto en el rendimiento, excluyendo los temas de salud.

    .row.justify-content-center.mb-4
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img-13.svg', alt='Imagen decorativa')
      .col-9
        p.mb-0(data-aos="fade-left") A partir de toda la información relacionada, se presenta la siguiente tabla que resume de manera muy exacta lo más destacado en cada operador y los resultados cada uno:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 4.
          span  #[i Resumen de aplicación de operadores]
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 15%; background-color: #C1E4DD;") Operador
                th(style="width: 30%; background-color: #C1E4DD;") Función técnica
                th(style="width: 30%; background-color: #C1E4DD;") Efecto en los resultados
            tbody
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") AND
                td(style="background-color: #F6F6F6;") Intersección de términos.
                td(style="background-color: #F6F6F6;") Restringe y precisa.
              tr(data-aos="fade-right")
                td.text-center Fuentes OR
                td Unión de términos o sinónimos.
                td Amplía la cobertura.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") #[i NOT]
                td(style="background-color: #F6F6F6;") Exclusión de términos irrelevantes.
                td(style="background-color: #F6F6F6;") Limpia el ruido informativo.
              tr(data-aos="fade-right")
                td.text-center ""
                td Secuencia exacta de palabras.
                td Evita la dispersión.
              tr(data-aos="fade-right")
                td.text-center(style="background-color: #F6F6F6;") #[i ( )]
                td(style="background-color: #F6F6F6;") Priorización y orden lógico.
                td(style="background-color: #F6F6F6;") Estructura la búsqueda.
              tr(data-aos="fade-right")
                td.text-center NEAR
                td Proximidad relativa entre términos.
                td Aumenta la relevancia semántica.


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    datosSlyder: [
      {
        titulo: 'El signo de interrogación (?)',
        texto:
          'Reemplaza un solo carácter dentro de una palabra. Es vital para capturar variaciones ortográficas o plurales irregulares (ej. m?n recupera <em>man</em> y <em>men</em>).',
        imagen: require('@/assets/curso/tema5/img-07.png'),
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Asterisco interno',
        texto:
          'En algunos motores, el * dentro de una palabra puede reemplazar varios caracteres (ej. comput* recupera computador, computadora, computacional).',
        imagen: require('@/assets/curso/tema5/img-08.png'),
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
