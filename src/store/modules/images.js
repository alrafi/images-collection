import api from '../../api/imgur';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  async uploadImage({ commit }, image) {
    console.log(image);
    commit('consoleCommit', image);
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
  consoleCommit: image => {
    console.log(image);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
