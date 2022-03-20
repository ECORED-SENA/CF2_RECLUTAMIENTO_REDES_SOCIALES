<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Referentes de evaluación  

    .row.mb-5
      .col-1.d-none.d-lg-block.col-md-1.col-lg-1
        figure.justify-center(data-aos="fade-right")
          img.img40(src='@/assets/componentes/puntos.svg', alt='puntos')
      .col-12.col-md-11.col-lg-11(data-aos="fade-left")
        p Con los cambios actuales y el aumento de las competencias laborales las empresas cada día deben hacer uso de herramientas que les permitan hacer del proceso de reclutamiento una selección precisa y acertada a las necesidades que se buscan. Para esto, es importante tener varios aspectos a evaluar: 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/RgwBP11YBTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.mb-5
      .col-12.col-md-8.col-lg-8.bgr_10.p-3.p-md-5.p-lg-5.mb-4
        div.bgr_11.p-3
          p.m-0 #[strong Parametrización:] aquí se asignan valores a los parámetros elegidos en la estructura de la hoja de vida con el objetivo de obtener un resultado al final del proceso. Este deberá ir asociado a los requerimientos o criterios de la vacante. A continuación, se encuentra un ejemplo sobre los criterios de evaluación de la hoja de vida para un cargo de docente universitario: 
      .col-12.col-md-4.col-lg-4
        figure.justify-center(data-aos="fade-right")
          img.img350(src='@/assets/curso/tema4/t4-1.svg', alt='img 4-1')
    
    .titulo-sexto.color-acento-botones(data-aos="fade-right")
      h5 Acreditación del programa
    
    .tabla-b.color-acento-botones.mb-5(data-aos="zoom-in-up")
      .tabla-b__header
        h5.mb-0 Acreditación programa:
      table
        tr
          th Pregrado con Acreditación de Alta Calidad: 
          td 2 puntos
        tr
          th Estudios de postgrado:
          td 2 puntos
        tr
          th Título de Posgrado: 
          td 1 punto si ha aprobado el 50% o más de los créditos del programa
        tr
          th Estudios de postgrado sin título: 
          td 
        tr
          th Puntaje máximo: 
          td 2 puntos 
        tr
          th Antigüedad máxima de los estudios sin título:  
          td 5 años
        tr
          th Cursos:
          td 
        tr
          th Educación continuada:  
          td 0,1 puntos por cada 24 horas, hasta 1 punto
        tr
          th Idioma extranjero: 
          td 2 puntos por certificado de suficiencia
        tr
          th Antigüedad máxima de los cursos:  
          td 5 años
        tr
          th Experiencia pertinente para el Programa: 
          td 
        tr
          th Docente universitaria:  
          td 1 punto por cada año, máximo 5 puntos
        tr
          th Profesional:   
          td 1 punto por cada año, máximo 4 puntos
        tr
          th Investigativa posterior al pregrado: 
          td 2 puntos por cada año, máximo 10 puntos
            br
            span.mt-2 2 puntos por cada año, máximo 5 puntos 
        tr
          th En investigación y desarrollo en pregrado:  
          td 1 punto por año, máximo 3 puntos
        tr
          th Otras actividades extracurriculares en pregrado:  
          td 
        tr
          th Antigüedad máxima de la experiencia: 
          td 5 años
       

    

      

      

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
