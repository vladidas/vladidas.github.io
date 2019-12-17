<template>
  <form
    class="transparent-block"
    @submit="checkForm"
  >
    <p class="notify-msg">Your password: <span>{{ validPassword }}</span></p>
    <p :if="error" class="error-msg">{{ error }}</p>
    <input type="password"
           name="password"
           v-model="password"
           placeholder="Password"
           :class="['input', error ? 'error-input' : '']"
    />
  </form>
</template>

<script>
  import store from './../../store/store'
  import config from './../../../config/app'

  export default {
    data() {
      return {
        error: null,
        validPassword: config.auth.password,
        password: null,
      }
    },

    methods: {
      checkForm: function (e) {
        e.preventDefault();

        if (!this.password) {
          return this.error = 'The password is a required field';
        } else if (this.password !== this.validPassword) {
          return this.error = 'Invalid password, please try again';
        }

        store.commit('login')
      }
    },
  }
</script>

<style scoped>
  .transparent-block {
    display: inline-block;
    border: 1px #4c2d30 solid;
    border-radius: 8px;
    background: rgba(69, 29, 36, 0.9);
    padding: 8px 10px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 6%;
    color: white;
  }

  .transparent-block .input {
    padding: 5px;
    width: 275px;
    background: rgba(50, 21, 25, 0.9);
    border: 1px white solid;
    border-radius: 4px;
  }
</style>
