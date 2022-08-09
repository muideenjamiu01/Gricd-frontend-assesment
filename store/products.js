import ProdcutsData from '../static/data.json'
export const state = () => ({
  products: ProdcutsData,
  // product: null,
})

export const getters = {
  products: (state) => state.products,
}

export const actions = {
  fetchProducts({ commit }) {
    commit('SET_PRODUCTS')
    console.log()
  },
}
export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
}
