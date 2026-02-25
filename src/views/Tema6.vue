<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Filtros de búsqueda y tipos de búsqueda, por palabra clave, por tema, por tipo
    
    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema6/img-01.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img-13.svg', alt='Imagen decorativa')
      .col-11
        p.mb-0(data-aos="fade-left") Cuando se requieren documentos formales, es recomendable filtrar los resultados por tipo de archivo mediante el uso del operador filetype. Este operador es una herramienta eficaz disponible en varios motores de búsqueda, como Google, Bing y DuckDuckGo, y permite restringir los resultados a archivos con una extensión específica, facilitando la localización de documentos académicos, informes técnicos o presentaciones. La sintaxis general es la siguiente:

    p Términos de búsqueda filetype: extensión.
    p.mb-4 Donde:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img-02.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Términos de búsqueda
            p.text-center.mb-0(style="color:#12263F") Son las palabras clave o frases que estás buscando.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img-03.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Filetype
            p.text-center.mb-0(style="color:#12263F") Es el operador propiamente dicho.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema6/img-04.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Extensión
            p.text-center.mb-0(style="color:#12263F") Corresponde a la extensión del tipo de archivo deseado (por ejemplo, pdf, doc, xls, ppt).

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Filtrado por metadatos de infraestructura (sintaxis avanzada)

    p.mb-4 Además del operador site:, existen comandos que permiten localizar términos en partes específicas del código fuente de una página #[i web], como son: 

    .row.justify-content-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="intitle")
            .col-12.order-lg-2.order-3
              p.mb-0 Restringe los resultados a páginas que tengan la palabra clave específicamente en el título de la pestaña del navegador. Es ideal para encontrar definiciones o temas centrales.
          .row.justify-content-center(numero="2" titulo="Especialización")
            .col-12.order-lg-2.order-3
              p.mb-0 Busca la palabra clave dentro de la dirección URL del sitio. Muy útil para localizar directorios de archivos o repositorios específicos (ej. inurl:repositorio).
          .row.justify-content-center(numero="3" titulo="Eficiencia")
            .col-12.order-lg-2.order-3
              p.mb-0 Localiza términos en el texto de los enlaces que apuntan a una página. Refleja cómo otros sitios web categorizan esa fuente de información.
      .col-lg-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema6/img-05.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-7.order-2
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Enfoque en archivos PDF: filetype:pdf
        p Cuando se necesita encontrar documentos en formato PDF, se puede utilizar la siguiente sintaxis:
        p Términos de búsqueda filetype:pdf.
        .titulo.mb-4(data-aos="fade-left")
          h4.text-center.mb-0 Ejemplo
        p Si se está investigando “informes sobre cambio climático”, la consulta de búsqueda sería: Informes sobre cambio climático filetype:pdf.
      .col-lg-5.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema6/img-06.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img-13.svg', alt='Imagen decorativa')
      .col-9
        p.mb-0(data-aos="fade-left") Para procesos de análisis estratégico, no basta con documentos en PDF. Es necesario filtrar formatos que permitan el procesamiento masivo de datos, de la siguiente manera:

    .cajon.cajon.C04.p-5.mb-4
      SlyderB(:datos="datosSlyder")

    p.text-center.mb-4 A continuación, se relacionan ejemplos de búsquedas avanzadas:

    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema6/img-1-1v.svg', alt='Imagen decorativa')
          .tarjeta.tarjeta--blanca.p-3(x="14.5%" y="22%" numero="+")(style="background-color:#FC9D83")
            p Ejemplo: encontrar páginas que contienen frase exacta cambio climático.
          .tarjeta.tarjeta--blanca.p-3(x="58%" y="22%" numero="+")(style="background-color:#FC9D83")
            p Ejemplo: encontrar documentos académicos relevantes en formato PDF de sitios educativos (ej. universidades).
          .tarjeta.tarjeta--blanca.p-3(x="12.5%" y="60.5%" numero="+")(style="background-color:#FC9D83")
            p Ejemplo: excluir resultados relacionados con deforestación.
          .tarjeta.tarjeta--blanca.p-3(x="62.5%" y="60.5%" numero="+")(style="background-color:#FC9D83")
            p Ejemplo: limitar resultados a jun tipo específico de archivo, como PDF, DOC, XLS, PPT.
        figure.movil
          img(src='@/assets/curso/tema6/img-1-2v.svg', alt='Imagen decorativa')

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.1 Construcción de ecuaciones de alta precisión (sintaxis combinada)

    .row.justify-content-center
      .col-lg-4.col-md-6.col-8.mb-lg-0.mb-4
        figure
          img.img-fluid(src="@/assets/curso/tema6/img-09.png" alt="Imagen decorativo")
      .col-lg-8
        p.mb-4(data-aos="fade-left") La verdadera potencia del filtrado ocurre cuando se combinan operadores booleanos con filtros de metadatos y formato en una sola cadena lógica.
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p Ejemplo de ecuación experta: #[b (intitle:"inteligencia artificial") site:gov.co filetype:pdf -blog *] 
          p.mb-0 Explicación: busca documentos PDF oficiales del gobierno colombiano que traten centralmente sobre IA en su título, excluyendo bitácoras personales o artículos de opinión.

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.2 Técnicas de filtrado avanzado: por dominio, formato, fecha y región
    
    p Las técnicas de filtrado avanzado permiten afinar las búsquedas y reducir de manera significativa el volumen de resultados irrelevantes. Al aplicar filtros por dominio, formato, fecha y región, el usuario puede orientar la consulta hacia información más actual, confiable y pertinente, alineada con criterios académicos, técnicos o institucionales. Estas herramientas convierten una búsqueda general en un proceso más preciso y eficiente, propio de una recuperación profesional de información.
    p.mb-4 Dentro de los filtros potentes (plantillas) se tiene:

    .row.mb-4
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Dominio
          p.text-center.mb-0 site:gov.co (oficial Colombia), site:edu
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Formato
          p.text-center.mb-0 filetype:pdf, filetype:xlsx
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Fecha
          p.text-center.mb-0 Usar filtros del motor (último año / rango)
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Región
          p.text-center.mb-0 Configuración de ubicación o término “Colombia”, “LatAm”

    .row.justify-content-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        .cajon.cajon.C01.color-primario.row.align-items-center.m-0.style___box_1.p-4(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema6/img-10-1.svg', alt='').m-auto
          .col-xl
            h4 Ejemplos listos:
            ul.lista-ul
              li.mb-0 
                i.lista-ul__vineta
                | Alfabetización informacional site:edu filetype:pdf
              li.mb-0 
                i.lista-ul__vineta
                | Turismo Colombia gasto filetype:xlsx site:gov.co
      .col-lg-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema6/img-11.png' alt="Imagen decorativa")

  

</template>

<script>
export default {
  name: 'Tema6',
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
