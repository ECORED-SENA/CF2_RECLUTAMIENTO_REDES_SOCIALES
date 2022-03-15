<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis según lineamientos        
    div(data-aos="zoom-in-up")
      p Toda empresa en su momento de reclutamiento de talento humano, se encuentra que existe una gran demanda por el cargo ofrecido, y muchas veces dependiendo de la forma como hace su reclutamiento se encuentran una gran cantidad de perfiles y hojas de vida que al final deberá elegir solo a una, esa elección debe ir acorde al perfil de la vacante. Esta actividad de analizar y seleccionar un buen currículo no es nada fácil o sencillo para las empresas. 
      p.mb-5 Los encargados del proceso de reclutamiento recibirán decenas de propuestas lo que convierte el ejercicio un poco más tedioso, este proceso de selección se puede hacer según la amplitud de la convocatoria y número de postulados, de ser un número pequeño la empresa lo puede hacer de forma manual o del área de recursos humanos, por otra parte; cuando estos son muy grandes, las empresas pueden realizar su análisis preliminarmente a través de software de reclutamiento y selección (ATS), algo clave que en los últimos años ha permitido simplificar los procesos.

    .row.mb-4
      .col-12.col-md-4.col-lg-4.mb-2
        figure.justify-center(data-aos="fade-right")
            img.img350(src='@/assets/curso/tema2/t2-1.svg', alt='img 2-1')
      .col-12.col-md-8.col-lg-8
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-left")
          p.m-0 Es importante recordar que la hoja de vida es una carta de presentación y se convierte en el primer contacto entre el empleado y la empresa. En ella se encuentran aptitudes profesionales y habilidades personales del candidato de forma resumida, esta le permite al reclutador encontrar más información sobre el candidato. En otras palabras, permite ver si la persona presenta errores ortográficos y fallos de expresión, lo que provocaría un descarte automático. Es por esta razón, que se debe estudiar y analizar cada detalle, enfoque, diseño, presentación y descripción de habilidades y destrezas en los currículos que permitan un descarte automático. 
    
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="zoom-in-up") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Por otra parte, la fotografía es un tema importante que arroja muchos datos sobre la persona y aporta humanidad a la información presentada. Esta dependerá del formato de hoja de vida solicitado por la organización, si este requiere o no una fotografía. 
            p Es importante resaltar, que la hoja de vida es un documento de actualización periódica, por lo menos se debe actualizar cada seis meses, dentro de las posibilidades. Por esta razón, es que el reclutador debe tener presente algunos aspectos para poder analizar y valorar de manera correcta una hoja de vida. Entre estos aspectos, se encuentran: 
        .col-lg-4.mb-4.mb-lg-0
          figure.justify-center
            img.img350(src='@/assets/curso/tema2/t2-2.png', alt='img 2-2')
       
    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure.justify-center
          img.img900(src='@/assets/curso/tema2/t2-3.png', alt='img 2-3')
          

      .tarjeta.color-secundario.p-3(x="80%" y="8%" numero="1").position-relative.p-4
        p #[strong 1. El diseño:] La presentación de la hoja de vida debe contar con un diseño acorde y atractivo, esto refleja que la persona es atenta e interesada tanto de forma como de fondo en su hoja de vida. Este, debe incluir datos personales, información sobre las habilidades personales, la experiencia, entre otros aspectos. Aquí, es importante lograr un equilibrio estético entre la estructura de la hoja de vida y la información.
        img.circulo(src='@/assets/curso/tema2/t2-4.svg', alt='img 2-4')

      .tarjeta.color-secundario.p-3(x="84%" y="27%" numero="2").position-relative.p-4
        p #[strong 2. Tipo de letra:] Este puede ser: Times New Roman, Arial o Cambria, en pocas palabras, el tipo de letra debe lograr una descripción fresca y a la vez formal. Se recomienda utilizar el mismo tamaño de letra para los contenidos, por lo general 11 y para los títulos entre 14 y 20, esto refleja que el candidato es una persona atenta a los detalles. 
        img.circulo(src='@/assets/curso/tema2/t2-4.svg', alt='img 2-4')

      .tarjeta.color-secundario.p-3(x="74%" y="39%" numero="3").position-relative.p-4
        p #[strong 3. Extensión:] aquí es importante la cantidad de hojas o páginas del currículo. Esta puede ser de una a tres hojas, se debe colocar la información necesaria y concisa, para mayor información es preferible incluir anexos o acoplar cartas de recomendación. 
 
        img.circulo(src='@/assets/curso/tema2/t2-4.svg', alt='img 2-4')

      .tarjeta.color-secundario.p-3(x="37%" y="39%" numero="4").position-relative.p-4
        p #[strong 4. Información:] se debe colocar la información más importante. Aquí se tiene en cuenta:
        p La ortografía y la distribución de la información, para determinar si la hoja de vida es buena o no. 
        p Que los datos aportados sean relevantes y estén vinculados
        p La inclusión de enlaces y referencias para evaluar directamente el trabajo y sus habilidades. 
 
        img.circulo(src='@/assets/curso/tema2/t2-4.svg', alt='img 2-4')

      .tarjeta.color-secundario.p-3(x="37%" y="60%" numero="5").position-relative.p-4
        p #[strong 5. Redacción:] Debe tener claridad, precisión y capacidad de síntesis. Se debe detallar de forma concreta las habilidades y experiencias. 
        img.circulo(src='@/assets/curso/tema2/t2-4.svg', alt='img 2-4')

      .tarjeta.color-secundario.p-3(x="74%" y="80%" numero="6").position-relative.p-4
        p #[strong 6. Habilidades:] Muchas veces hay candidatos que no tienen tanta experiencia, pero presentan una serie de habilidades que pueden ser de interés para la empresa. Entre estas encontramos: los idiomas, manejo de programas informáticos, así como de redes sociales y habilidades interpersonales.  
        img.circulo(src='@/assets/curso/tema2/t2-4.svg', alt='img 2-4')

      .tarjeta.color-secundario.p-3(x="37%" y="75%" numero="7").position-relative.p-4
        p #[strong 7. Enlaces y referencias de redes sociales:] Cuando el candidato refiere sus redes sociales en la hoja de vida, permite a los reclutadores obtener información clave para el trabajo, permite ver cómo se relaciona el candidato con otras personas, la forma de expresión y opiniones. Entre estas redes sociales encontramos:  LinkedIn, Twitter, Instagram y Facebook.   
        img.circulo(src='@/assets/curso/tema2/t2-4.svg', alt='img 2-4')

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="zoom-in-up")
      p.m-0 De lo anterior, se puede concluir, que encontrar una hoja de vida atractiva visualmente, donde la información está correctamente estructurada y detallada permite reconocer las virtudes propias del candidato, como mostrar interés y tiempo para la realización de la carta de presentación. 

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
