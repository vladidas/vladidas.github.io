<template>
  <section class="body-section">
    <side-bar></side-bar>
    <workplace></workplace>
  </section>
</template>

<script>
  import SideBar from './../includes/SideBar';
  import Workplace from './../includes/Workplace';

  export default {
    components: {
      SideBar,
      Workplace,
    }
  }
</script>

<style scoped>
  .workplace {
    width: 100vw;
    height: 100vh;
  }
</style>
