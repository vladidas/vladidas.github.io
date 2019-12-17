<template>
  <component :is="isAuth ? 'dashboard' : 'login'"/>
</template>

<script>
  import Dashboard from './../dashboard/layouts/App';
  import Login from './../auth/Login';

  export default {
    data() {
      return {
        isAuth: this.$store.getters.isAuth,
      }
    },

    components: {
      Dashboard,
      Login,
    },

    created() {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'login' || mutation.type === 'logout') {
          this.isAuth = state.auth.isAuth;
        }
      });
    },
  }
</script>

<style>
  * {
    font: 16px Ubuntu, sans-serif;
  }

  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(130deg, #501a29, #9f514c, #63183d) no-repeat;
  }

  .body-section {
    display: flex;
  }

  .error-msg {
    color: #D8000C;
  }

  .notify-msg {
    font: 12px Ubuntu, sans-serif;
    color: grey;
  }

  .notify-msg span {
    color: white;
  }

  .input {
    color: white;
  }

  .error-input {
    border: 2px #D8000C solid !important;
  }
</style>
