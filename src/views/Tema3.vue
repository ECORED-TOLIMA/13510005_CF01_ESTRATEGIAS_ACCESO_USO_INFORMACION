<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Estrategias de búsqueda

    .row.justify-content-center.mb-4
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/img-01.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0 Independientemente del motor que se utilice, aplicar algunas buenas prácticas TIC permite mejorar significativamente los resultados de búsqueda y reducir el tiempo dedicado a encontrar información útil.

    p.text-center.mb-4 En el ecosistema digital actual, es vital diferenciar cómo procesan los motores nuestra necesidad de información:

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/img-02.png', alt='Imagen decorativa')
      .col-lg-6       
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="Praesent luctus")
            .col-12.order-lg-2.order-3
              p.mb-0 Se basa en la coincidencia exacta de caracteres o palabras clave (#[i keyword matching]). Es útil para encontrar frases específicas, pero puede omitir sinónimos valiosos.
          .row.justify-content-center(numero="2" titulo="Búsqueda semántica")
            .col-12.order-lg-2.order-3
              p.mb-0 Los motores modernos intentan comprender la intención y el contexto de la consulta. No buscar solo la palabra, sino el concepto relacionado.
          .row.justify-content-center(numero="3" titulo="Ejemplo")
            .col-12.order-lg-2.order-3
              p.mb-0 Si se busca "mitigación de CO2", el motor semántico traerá resultados sobre "secuestro de carbono", aunque la palabra exacta no esté en la consulta.

    p.mb-4 Algunas estrategias sencillas y efectivas son:

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 A. Uso de comillas para búsquedas de frases exactas

    p.mb-4 Una de las técnicas más efectivas para refinar las búsquedas en la #[i web] es el uso de comillas. Al encerrar una frase entre comillas, se le indica al motor de búsqueda que se desean encontrar páginas que contengan esa frase exacta, en el mismo orden y con las mismas palabras. Esto es especialmente útil cuando se buscan citas, nombres propios o conceptos específicos que tienen una formulación precisa.

    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0 Ejemplo: si se está investigando sobre el concepto de alfabetización digital, una búsqueda simple podría arrojar resultados que mencionen "alfabetización" y "digital" en diferentes partes del texto o que utilicen sinónimos o términos relacionados. Para evitar esto, se puede usar la búsqueda: "Alfabetización digital"
        .row
          .col-auto.d-none.d-lg-block.order-lg-1.order-2.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img-04.svg' alt="Imagen decorativa")
          .col-lg-10.col-12.mb-3.order-lg-2.order-2.mb-lg-0
            p(style="color:#000") Esta búsqueda devolverá únicamente páginas que contengan la frase exacta "alfabetización digital", lo que permitirá enfocarse en información directamente relevante para el tema de interés.
        p Los beneficios son:
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img-03.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-05.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Precisión
            p.text-center.mb-0(style="color:#12263F") Reduce la ambigüedad y asegura que los resultados sean relevantes para la frase específica que se está buscando.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-06.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Eficiencia
            p.text-center.mb-0(style="color:#12263F") Ahorra tiempo al evitar la revisión de páginas que solo contienen palabras clave relacionadas, pero no la frase exacta.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-07.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Contexto
            p.text-center.mb-0(style="color:#12263F") Permite encontrar información en el contexto exacto en el que se utiliza la frase, lo que puede ser crucial para comprender su significado.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 B. Exclusión de palabras irrelevantes con el signo menos

    p.mb-4 Otra técnica eficaz para refinar las búsquedas consiste en excluir palabras clave no deseadas por medio del uso del signo menos (-). Este operador indica al motor de búsqueda que elimine de los resultados cualquier página que contenga la palabra ubicada inmediatamente después del signo. Su uso resulta especialmente útil cuando una consulta arroja resultados solo parcialmente relevantes o relacionados con enfoques distintos al tema de interés.

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/img-08.svg', alt='Imagen decorativa')
      .col-lg-7       
        .cajon.cajon.C01.color-primario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") #[b Ejemplo:] suponiendo que se está investigando sobre inteligencia artificial, pero no se desean artículos de opinión ni #[i blogs] personales; en este caso, la búsqueda puede refinarse de la siguiente manera: #[b Inteligencia artificial -blog -opinión]
        p Con esta configuración, el buscador mostrará páginas relacionadas con la inteligencia artificial y excluirá aquellas que contengan los términos “#[i blog]” u “opinión”, lo que facilita el acceso a fuentes más académicas, técnicas o informativas.
        p Dentro de sus beneficios se encuentran:

    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img-09.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Eliminación de ruido
            h5.t2.mb-2 Eliminación de ruido
            p Reduce la cantidad de resultados irrelevantes, permitiendo enfocarse en la información más pertinente.
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img-10.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Claridad
            h5.t2.mb-2 Claridad
            p Ayuda a definir el enfoque de la búsqueda, excluyendo temas o perspectivas no deseadas.
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img-11.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Personalización
            h5.t2.mb-2 Personalización
            p Permite adaptar la búsqueda a las necesidades específicas del usuario, excluyendo fuentes o tipos de contenido no deseados.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 C. Limitación de la búsqueda a sitios específicos con el operador "site:"

    p.mb-4 El operador site: permite limitar la búsqueda a un sitio web o dominio específico. Resulta especialmente útil cuando se necesita localizar información dentro de una fuente concreta, como páginas educativas (.edu) o sitios gubernamentales (.gov). Su uso facilita el acceso a contenidos oficiales, académicos o altamente especializados, reduciendo resultados irrelevantes y aumentando la confiabilidad de la información encontrada.

    .BMG1.px-md-5.px-4
      .row.justify-content-center.mb-4
        .col.col-lg-3.col-md-7.col-8.order-lg-1.order-1.mb-3
          figure
            img(src='@/assets/curso/tema3/img-12.png', alt='Imagen decorativa')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .cajon.cajon.C02.color-secundario.p-4.mb-5.py-3
            p.mb-0(data-aos="fade-down") #[b Ejemplo:] si se están buscando estudios sobre el cambio climático publicados por universidades, se puede usar la siguiente búsqueda: #[b Cambio climático site:edu]
          .row.justify-content-center.mb-4
            .col.col-lg-10.order-lg-2.order-2
              p(data-aos="fade-down") La primera búsqueda mostrará páginas que contengan información sobre “cambio climático” alojadas en sitios #[i web] con dominio .edu. Esto incrementa la probabilidad de acceder a estudios académicos, investigaciones científicas y contenidos producidos por instituciones educativas.
            .col.col-lg-auto.order-lg-1.order-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/img-13.svg', alt='Imagen decorativa')
          p De manera similar, si se buscan políticas públicas sobre energía renovable en Estados Unidos, se puede usar: #[b políticas energía renovable site:gov]
    
    p La segunda búsqueda mostrará páginas relacionadas con “políticas de energía renovable” publicadas en dominios .gov, lo que garantiza que la información provenga de fuentes gubernamentales oficiales y de carácter normativo o técnico.
    p.mb-4 Sus beneficios son:

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/img-14.png', alt='Imagen decorativa')
      .col-lg-6       
        LineaTiempoD.color-acento-botones
          .row.justify-content-center(numero="1" titulo="Credibilidad")
            .col-12.order-lg-2.order-3
              p.mb-0 Permite enfocarse en fuentes de información confiables y autorizadas.
          .row.justify-content-center(numero="2" titulo="Especialización")
            .col-12.order-lg-2.order-3
              p.mb-0 Facilita la búsqueda de información en dominios específicos, como educación, gobierno o investigación.
          .row.justify-content-center(numero="3" titulo="Eficiencia")
            .col-12.order-lg-2.order-3
              p.mb-0 Ahorra tiempo al evitar la revisión de páginas de fuentes no deseadas o irrelevantes.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 D. Combinación de operadores para búsquedas avanzadas

    p.mb-4 Las técnicas descritas anteriormente pueden combinarse para crear búsquedas aún más precisas y efectivas; es decir, se puede buscar una frase exacta en un sitio específico y excluir ciertas palabras clave al mismo tiempo.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0 #[b Ejemplo:] si se está buscando la definición exacta de "aprendizaje automático" en sitios educativos, pero se desea excluir resultados que se refieran a cursos en línea, se puede usar la siguiente búsqueda: #[b "aprendizaje automático" site:edu -curso -online]
    
    .row.justify-content-center.mb-4
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img-13.svg', alt='Imagen decorativa')
      .col-9
        p.mb-0(data-aos="fade-left") Esta búsqueda devolverá páginas que contengan la frase exacta "aprendizaje automático" y que estén alojadas en sitios #[i web] con el dominio .edu, pero excluirá aquellas que también contengan las palabras "curso" u "#[i online]".
    
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        p.mb-4 Los beneficios de esta estrategia son:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-15.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Máxima precisión
            p.text-center.mb-0(style="color:#12263F") Permite delimitar con exactitud los resultados al combinar frase exacta, dominio específico y exclusión de términos no deseados.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-16.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Optimización del tiempo
            p.text-center.mb-0(style="color:#12263F") Reduce significativamente los resultados irrelevantes, facilitando el acceso rápido a información pertinente y de calidad.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-17.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Mayor calidad de las fuentes
            p.text-center.mb-0(style="color:#12263F") Incrementa la probabilidad de encontrar contenidos confiables y académicos, adecuados para investigaciones y trabajos formales.

    .row.justify-content-center.mb-4
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        img(src='@/assets/curso/tema3/img-18.png' alt="Imagen decorativa")
      .col-lg-8.order-lg-1.order-2.mb-lg-0.mb-4
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 E. Estrategia de "Crecimiento de perlas" #[i (Pearl growing)]
        p.mb-4(style="color:#000") Esta técnica es ideal para investigaciones profundas donde no se conocen todos los términos técnicos del tema.
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0 #[b Ejemplo:] si se encuentra un artículo académico clave sobre economía circular, se pueden identificar las palabras clave y descriptores utilizados por el autor como: #[b Ciclo de vida del producto, sostenibilidad industrial, ecoeficiencia]
        p.mb-4 Estos términos se emplean en nuevas búsquedas para localizar estudios relacionados que profundicen en el mismo enfoque.
        p Esta estrategia contiene los siguientes pasos:

    .row.justify-content-center.ali.mb-4(data-aos="fade-left")
      .col-lg-12(data-aos="fade-down")
        .tarjeta--container.row.mb-3
          .col-xl.col-md-6.tarjeta.color-primario.p-4(style="background-color:#FFEDB1")
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/tema3/img-19.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Encontrar la "Perla"
            p.mb-0 Localizar un documento, artículo o informe que sea perfecto para la necesidad (la fuente ideal). 
          .col-xl.col-md-6.tarjeta.color-secundario.p-4(style="background-color:#E2E2E2")
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/tema3/img-20.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Extraer metadatos
            p.mb-0 Analizar las palabras clave (#[i keywords]), descriptores o lenguaje controlado que el autor utilizó para etiquetar ese documento.
          .col-xl.col-md-6.tarjeta.color-secundario.p-4(style="background-color:#FED2C7")
            .row.justify-content-center.mb-3
              .col-lg-6.col-6
                figure
                  img(src='@/assets/curso/tema3/img-21.svg', alt='Imagen decorativa')
            h4.text-center.mb-4 Expandir la red
            p.mb-0 Utilizar esos nuevos términos técnicos para realizar una nueva búsqueda más precisa, encontrando documentos similares que no aparecieron en la exploración inicial.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-8.order-2
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/tema1/icono.svg', style="width: 45px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 F. Búsqueda iterativa y refinamiento (Método del embudo)
        p.mb-4 La búsqueda iterativa concibe la recuperación de información como un proceso progresivo de selección y evaluación de fuentes, en el que cada etapa mejora la calidad de los resultados obtenidos 
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0 #[b Ejemplo:] a partir de un artículo clave sobre consumo digital, se identifican términos técnicos para ampliar y refinar la búsqueda de información especializada, encontrando: #[b Experiencia del usuario”, “decisión de compra online”, “analítica de comportamiento”]
      .col-lg-4.col-md-6.col-8.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema3/img-22.png', alt='Imagen decorativa')

    p.mb-4 La búsqueda no es un evento único, sino un proceso de mejora continua y por ello, se deben aplicar los siguientes pasos:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-23.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Explorar
            p.text-center.mb-0(style="color:#12263F") Iniciar con términos amplios en buscadores generales para reconocer el panorama.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-24.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Delimitar
            p.text-center.mb-0(style="color:#12263F") Identificar términos técnicos y excluir términos irrelevantes con el signo menos (-).
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img-25.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#FED2C7;")
            h4.text-center.mt-5(style="color:#12263F") Precisar
            p.text-center.mb-0(style="color:#12263F") Construir ecuaciones de búsqueda de alta precisión combinando operadores booleanos y filtros de dominio.



































































</template>

<script>
export default {
  name: 'Tema3',
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
