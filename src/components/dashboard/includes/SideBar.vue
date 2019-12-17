<template>
  <ul class="side-menu">
    <li
      v-for="menuItem of menuItems"
      :class="{ active: menuItem.active && menuItem.show }"
      @click="activate(menuItem)"
    >
      {{ menuItem.name | logoMenuItem }}
    </li>

    <li @click="logout" class="active standby">
      <img src="../../../assets/img/standby.svg">
    </li>
  </ul>
</template>

<script>
  import store from './../../../store/store'
  export default {
    filters: {
      logoMenuItem(text) {
        return text.substr(0, 1).toUpperCase();
      }
    },

    data() {
      return {
        menuItems: this.$store.getters.getApplications
      }
    },

    methods: {
      activate(menuItem) {
        if (!menuItem.show) {
          menuItem.show = true;
        } else {
          menuItem.active = !menuItem.active;
        }
      },

      logout() {
        store.commit('logout')
      }
    }
  }
</script>

<style scoped>
  .side-menu {
    width: 50px;
    display: inline-block;
    border: 1px #4c2d30 solid;
    border-radius: 8px;
    background: rgba(69, 29, 36, 0.9);
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
  }

  .side-menu li {
    cursor: pointer;
    list-style-type: none;
    left: 0;
    margin: 5px;
    width: 37px;
    height: 37px;
    line-height: 37px;
    text-align: center;
    background: rgba(50, 21, 25, 0.9);
    border: 1px #E6E6E6 solid;
    border-radius: 4px;
    color: #E6E6E6;
    font-size: 25px;
    font-weight: 500;
  }

  .side-menu li.active {
    border: 1px white solid;
    background: white;
    opacity: 0.5;
    color: black;
  }

  .side-menu li:hover {
    opacity: 0.7;
  }

  .side-menu .standby {
    position: absolute;
    left: 1px;
    bottom: 0;
  }

  .side-menu .standby img {
    width: 50%;
  }
</style>
