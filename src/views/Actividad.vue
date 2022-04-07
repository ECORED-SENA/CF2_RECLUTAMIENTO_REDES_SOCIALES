<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/rellenar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Repasando conceptos claves para la selección de personal
        p El objetivo de esta actividad es ayudar a repasar los conocimientos adquiridos en este componente formativo, mediante la organización de palabras que permitan estructurar los conceptos que se deben conocer al momento de acceder a una plataforma de empleo. 
        p.mb-4 Se sugiere que antes de realizar esta actividad, se haga la consulta y el estudio de los materiales formativos.
        .tarjeta.bgr_17.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Rellenar los espacios en blanco.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/AD1/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/arrastar-soltar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Relación de conceptos de selección de personal.
        p El objetivo de esta actividad es ayudarle a repasar los conocimientos adquiridos en este componente formativo, mediante la identificación y relación de algunos elementos para realizar una hoja de vida. 
        p.mb-4 Se sugiere que antes de realizar esta actividad, haga la consulta y el estudio de los materiales formativos.
        .tarjeta.bgr_17.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/AD2/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
