<template>
  <window :application="application">
    <section class="photo"/>
  </window>
</template>

<script>
  import Window from './../includes/Window';

  export default ({
    props: [
      'application'
    ],

    components: {
      Window
    },
  })
</script>

<style scoped>
  .photo {
    width: 100%;
    height: 100%;
    background: url("../../../assets/img/photo.jpg") no-repeat;
    background-size: cover;
  }
</style>
