<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fuentes de información: concepto, tipos

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-8.order-2
        p.mb-4 Para comprender la importancia de las fuentes de información en el estudio, el trabajo académico y la vida cotidiana, acceda al siguiente pódcast, un espacio de reflexión donde se analiza qué son las fuentes de información, cómo se clasifican y por qué es fundamental aprender a evaluarlas de manera crítica. Este contenido permite profundizar en el uso responsable y ético de la información, aportando criterios que fortalecen la toma de decisiones informadas y la calidad de los procesos de aprendizaje:
        .bg-color-1.tarjeta
          .p-4.p-md-3
            .row.justify-content-center.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/img-02.svg", data-aos="zoom-in")
              .col-lg.mb-3.mb-lg-0
                h4(data-aos="fade-left").mb-4(style="color:#FF955E") Pódcast
                p.text-white Lo invitamos a escuchar el siguiente Pódcast:
        
                TarjetaAudio.color-secundario.bg-color-white.mb-3(
                  texto="Pódcast"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
      .col-lg-4.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img-01.png', alt='Imagen decorativa')

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 ¿De dónde viene lo que se lee? Tipos de fuentes según su origen

    p.mb-4 No es lo mismo citar un comentario de un foro que utilizar un dato proveniente del Ministerio de Salud. El “apellido” de la información; es decir, su origen, aporta indicios clave sobre el nivel de confiabilidad que se le puede atribuir. Por ello, es fundamental reconocer quién produce la información y bajo qué criterios. A continuación, se presenta un desglose de los principales actores de este ecosistema informativo:

    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C01" data-aos="zoom-in")
      .row.justify-content-center(titulo="Fuentes académicas")
        .col-lg-6.order-lg-1.order-2
          p Cuando se habla de fuentes académicas, se hace referencia a los "pesos pesados" del conocimiento. Son documentos como revistas científicas (#[i journals]) y tesis de grado que han pasado por un proceso de revisión por pares (otros expertos que validan que lo que se dice es cierto).
          p.mb-4 En pocas palabras:
          p.mb-0 #[b Es información producida por investigadores para investigadores. Es lenta de leer, pero es la más sólida que vas a encontrar.]
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema2/img-02.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Fuentes institucionales u oficiales")
        .col-lg-6.order-lg-1.order-2
          p Aquí mandan los organismos del Estado y las entidades internacionales como los Ministerios, el DANE, la OMS o la UNESCO. Su función es dar cifras oficiales, leyes y directrices técnicas.
          p.mb-4 En pocas palabras:
          p.mb-4 #[b Es el dato "oficial". Si se necesita saber cuánta gente vive en Colombia o cuál es el protocolo de salud mundial, se va a ellas. No hay espacio para la opinión, solo para el dato duro.]
          p En la era del análisis de datos, la información no solo reside en textos, sino en conjuntos de datos brutos destinados a la transparencia y la investigación.
          ul.lista-ul
            li.mb-0 
              i.lista-ul__vineta
              | Concepto: son datos que pueden ser utilizados, reutilizados y redistribuidos libremente por cualquier persona.
            li.mb-0 
              i.lista-ul__vineta
              | Fuentes clave: portales de datos gubernamentales (ej. Datos.gov.co) y organismos multilaterales como el Banco Mundial.
            li.mb-0 
              i.lista-ul__vineta
              | Uso técnico: son la base para realizar análisis estadísticos, predicciones con IA y #[i dashboards] de gestión que respaldan la toma de decisiones institucionales.
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema2/img-03.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Fuentes de medios de comunicación")
        .col-lg-6.order-lg-1.order-2
          p Se habla de la prensa, radio y noticieros digitales. Su fuerte es la inmediatez: cuentan qué está pasando ahora mismo.
          p.mb-4 En pocas palabras: 
          p.mb-0 #[b Son geniales para estar al día, pero ojo: a veces sacrifican la profundidad por la rapidez. Se deben usar para contexto, pero hay que confírmalas con fuentes académicas si se necesita rigor técnico.]
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema2/img-04.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Fuentes comerciales")
        .col-lg-6.order-lg-1.order-2
          p Son los contenidos que generan las empresas y marcas. Incluyen informes de mercado, catálogos de productos o #[i blogs] corporativos.
          p.mb-4 En pocas palabras:
          p.mb-0 #[b Son muy útiles para entender tendencias de consumo o innovaciones tecnológicas, pero recuerda que siempre tienen un interés de venta detrás. Hay que leerlas con un filtro de "curaduría" extra.]
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema2/img-05.png', alt="Imagen decorativa")
      .row.justify-content-center(titulo="Fuentes sociales")
        .col-lg-6.order-lg-1.order-2
          p Este es el territorio de los foros, hilos de redes sociales y comunidades virtuales. Es información generada por usuarios comunes.
          p.mb-4 En pocas palabras: 
          p.mb-0 #[b Es el lugar donde nace la conversación. Es excelente para sentir el "pulso social", pero es donde más riesgo hay de encontrar desinformación o datos sin verificar. Se deben usar como punto de partida, nunca como verdad absoluta.]
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema2/img-06.png', alt="Imagen decorativa")

    p.mb-4 Una vez reconocidos los distintos actores que producen información —académicos, institucionales, mediáticos, comerciales y sociales—, es necesario avanzar hacia una clasificación más técnica que permita evaluar el grado de respaldo metodológico y el nivel de confianza que ofrece cada fuente. Por ello, la siguiente tabla presenta una tipología de fuentes según su origen técnico, destacando su soporte de experticia y el nivel de confianza que aportan para el análisis y la toma de decisiones:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 3.
      span  #[i Fuente según su origen técnico]
    .tabla-a.color-acento-contenido.mb-4
      table
        thead
          tr(data-aos="fade-right")
            th(style="width: 15%; background-color: #C1E4DD;") Tipo de Fuente
            th(style="width: 30%; background-color: #C1E4DD;") Respaldo Técnico (Experticia)
            th(style="width: 30%; background-color: #C1E4DD;") Nivel de Confianza
        tbody
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") Fuentes de datos (#[i Raw data])
            td(style="background-color: #F6F6F6;") Basadas en la recolección directa de variables y métricas.
            td(style="background-color: #F6F6F6;") Máximo: permite el análisis independiente.
          tr(data-aos="fade-right")
            td.text-center Fuentes Federadas
            td Sistemas que unifican múltiples repositorios institucionales y bases de datos bibliográficas. 
            td Alto: asegura una cobertura amplia y validada.
          tr(data-aos="fade-right")
            td.text-center(style="background-color: #F6F6F6;") #[i Preprints]
            td(style="background-color: #F6F6F6;") Artículos de investigación completos pero que aún no terminan la revisión por pares.
            td(style="background-color: #F6F6F6;") Medio-Alto: útil para tendencias, pero requiere verificación cruzada. 
          tr(data-aos="fade-right")
            td.text-center Fuentes curadas
            td Contenidos que han pasado por un proceso de búsqueda, selección y organización sistemática. 
            td Alto: garantiza calidad y utilidad directa. 
    
    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10.col-12
        .row.align-items-center.mb-3(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 ¿Cuándo usar cada una? 

        p.mb-0 A continuación, un esquema rápido para decidir:

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img-1-1v.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="17%" y="64%" numero="+")(style="background-color:#FC9D83")
            p Ir a fuentes institucionales para datos precisos.
          .tarjeta.tarjeta--blanca.p-3(x="42.8%" y="30.5%" numero="+")(style="background-color:#FC9D83")
            p Ir a fuentes académicas para conocimiento confiable.
          .tarjeta.tarjeta--blanca.p-3(x="57.5%" y="82%" numero="+")(style="background-color:#FC9D83")
            p Ir a fuentes de medios para actualizaciones en tiempo real.
          .tarjeta.tarjeta--blanca.p-3(x="83.2%" y="46.5%" numero="+")(style="background-color:#FC9D83")
            p Ir a fuentes sociales para perspectivas comunitarias.
        figure.movil
          img(src='@/assets/curso/tema2/img-1-2v.svg', alt='Imagen decorativa')

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          h4 Recuerde
          p.mb-0 En internet, la fuente es su reputación. Si se usa una fuente social para un informe técnico sin contrastarla, se está construyendo sobre arena. Hay que buscar siempre el respaldo de una fuente oficial o académica para darle peso a las ideas.


</template>

<script>
export default {
  name: 'Tema2',
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
