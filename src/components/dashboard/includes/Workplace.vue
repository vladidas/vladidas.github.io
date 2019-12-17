<template>
  <section class="workplace">
    <component
      v-for="application in applications"
      :is="application.active ? application.component : null"
      :application="application"
    />

    <section class="widgets">
      <component
        v-for="widget in widgets"
        :is="widget.component"
        :widget="widget"
      />
    </section>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        applications: this.$store.getters.getApplications,
        widgets: this.$store.getters.getWidgets,
      }
    }
  }
</script>

<style>
  .widgets {
    position: absolute;
    top: 50px;
    right: 50px;
  }
</style>
