<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Referentes de evaluación  

    p.mb-5 Con los cambios actuales y el aumento de las competencias laborales las empresas cada día deben hacer uso de herramientas que les permitan hacer del proceso de reclutamiento una selección precisa y acertada a las necesidades que se buscan. Para esto, es importante tener varios aspectos a evaluar:
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/RgwBP11YBT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
      

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
