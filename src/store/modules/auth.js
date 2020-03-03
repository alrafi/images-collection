const state = {
  token: null
};

const getters = {
  isLoggedIn: state => !!state.token
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

const actions = {};
