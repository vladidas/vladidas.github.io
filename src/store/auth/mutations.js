export default {
  login(state) {
    state.auth.isAuth = true;
  },

  logout(state) {
    state.auth.isAuth = false;
  },
};
