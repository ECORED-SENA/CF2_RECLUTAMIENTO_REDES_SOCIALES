<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Elaboración de informes 
    
    .row.mb-5
      .col-12.col-md-7.col-lg-7(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4.mb-5
          p Después de un proceso de selección toda empresa presenta un informe al final con el objetivo de dar a conocer el paso a paso y los resultados obtenidos. Por otra parte, un informe se define como la exposición oral o escrita sobre el estado de una cosa o de una persona, sobre las circunstancias que rodean un hecho, etc. 
      .col-12.col-md-5.col-lg-5(data-aos="fade-left")
        figure(data-aos="zoom-in-up")
          img.img350(src='@/assets/curso/tema5/t5-1.svg', alt='imagen 5-1')
    
    div(data-aos="fade-right")
      p.m-5 En cuanto a las pautas que se deben tener en cuenta para la presentación de informes se encuentran:

    .row.mb-5.justify-center
      .col-12.col-md-8.col-lg-8
        LineaTiempoD.color-primario(data-aos="zoom-in-up")
          .row(numero="1" titulo="La presentación del documento").p-3
            .col-md-8.mb-4.mb-md-0.align-items-center
              p No se debe subrayar, se recomienda usar un tipo de letra legible (Arial), tamaño 12, la separación entre párrafos y títulos debe llevar separación de líneas, interlineado doble.
            .col-md-4
              figure.justify-center
                img.img160(src='@/assets/curso/tema5/t5-2.svg', alt='img 5-2')
          .row(numero="2" titulo="Títulos y subtítulos").p-3
            .col-md-8.mb-4.mb-md-0.align-items-center
              p Estos se deben escribir en negrita, los títulos precedidos por un número deberán escribirse en mayúscula fija y en negrita, es importante tener presente que en títulos y subtítulos llevan punto final. 
            .col-md-4
              figure.justify-center
                img.img160(src='@/assets/curso/tema5/t5-3.svg', alt='img 5-3')
          .row(numero="3" titulo="Uso de mayúsculas y minúsculas").p-3
            .col-md-8.mb-4.mb-md-0.align-items-center
              p Las mayúsculas no eximen de poner tilde cuando así lo exija las reglas de acentuación (Álvaro, África, etc.), La primera palabra del título de cualquier obra se escribe con mayúscula, se usa a veces mayúscula inicial para descartar ciertos conceptos importantes dentro del documento. 
            .col-md-4
              figure.justify-center
                img.img160(src='@/assets/curso/tema5/t5-4.svg', alt='img 5-4')
          .row(numero="4" titulo="Algunas normas de puntuación").p-3
            .col-md-8.mb-4.mb-md-0.align-items-center
              p La ortografía y la puntuación contribuyen a dar claridad y precisión a los textos. El punto, la coma, el punto y coma, los dos puntos y puntos suspensivos permiten marcar el ritmo del discurso.  
            .col-md-4
              figure.justify-center
                img.img160(src='@/assets/curso/tema5/t5-5.svg', alt='img 5-5')
          .row(numero="5" titulo="Comunicación empresarial escrita").p-3
            .col-md-8.mb-4.mb-md-0.align-items-center
              p Aquí se asumen diferentes formas de comunicación, entre ellas se encuentran: la carta, el informe, el acta.  
            .col-md-4
              figure.justify-center
                img.img250(src='@/assets/curso/tema5/t5-6.svg', alt='img 5-6')
          .row(numero="6" titulo="Asuntos de ortografía general").p-3
            .col-md-8.mb-4.mb-md-0.align-items-center
              p Se recomienda escribir las siglas con mayúsculas fijas y sin puntos, en caso de los anexos, se señalan en mayúscula: Anexo A.  
            .col-md-4
              figure.justify-center
                img.img160(src='@/assets/curso/tema5/t5-7.svg', alt='img 5-7')
          .row(numero="7" titulo="Normas de trabajos escritos").p-3
            .col-md-8.mb-4.mb-md-0.align-items-center
              p Se encuentran las normas APA, VANCOUVER e ICONTEC, en la última se encuentran la norma 1075 sobre las divisiones y subdivisiones de los documentos escritos, la norma 487 que se refiere a las citas y notas de pie de página, por último, la norma 1160 donde dicta la forma de referencias bibliográficas para libros y folletos.  
            .col-md-4
              figure.justify-center
                img.img160(src='@/assets/curso/tema5/t5-8.svg', alt='img 5-8')
          .row(numero="8" titulo="Citar usando normas").p-3
            .col-md-8.mb-md-0.align-items-center
              p Las citas son aquellas ideas o expresiones que provienen de otras fuentes y estas deben ser citadas, estas pueden ser citas textuales o parafraseadas. 
            .col-md-4
              figure.justify-center
                img.img160(src='@/assets/curso/tema5/t5-9.svg', alt='img 5-9')
          .row(numero="9" titulo="Referencias bibliográficas").p-3
            .col-md-8.mb-4.mb-md-0.align-items-center
              p Indicar aquellas fuentes que utilizó para hacer el texto. No se deben agregar referencias que no se visualicen y es muy importante el análisis de cada fuente a utilizar. 
            .col-md-4
              figure.justify-center
                img.img160(src='@/assets/curso/tema5/t5-10.svg', alt='img 5-10')
            
    .row
      .col-12.col-md-4.col-lg-4.mb-4(data-aos="fade-right")
        figure
          img.img300(src='@/assets/curso/tema5/t5-12.svg', alt='img 5-12')
      .col-12.col-md-8.col-lg-8.p-3.p-md-5.p-lg-5.bgr_13(data-aos="fade-left") 
        div.bgr_11.p-4
          p.m-0 Cada una de las especificaciones mencionadas, se rigen a criterios de presentación para los trabajos escritos, esto permite mejorar su lectura y ofrecer una presentación adecuada. Estas normas técnicas intentan establecer una serie de reglas que permitan el uso de diversos componentes de la escritura científica y que facilite la comprensión de la información que se presenta.

   

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
