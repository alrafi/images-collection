const state = {
  images = []
}

const geters = {
  allImages: state => state.images;
}

const actions = {
  fetchImages() {}
}

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
}