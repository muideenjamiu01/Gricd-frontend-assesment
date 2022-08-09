export const state = () => ({
  cart: [],
})

export const getters = {
  cartItemCount: (state) => state.cart.length,

  cartTotalPrice: (state) => {
    let total = 0
    state.cart.forEach((item) => {
      total +=
        Number(item.product.price.substring(1, item.product.price.length)) *
        item.quantity
    })
    console.log(total)
    return total
  },
}

export const actions = {
  addProductToCart({ commit }, { product, quantity }) {
    commit('ADD_TO_CART', { product, quantity })
  },
  removeProductFromCart({ commit }, product) {
    commit('REMOVE_PRODUCT_FROM_CART', product)
  },
  clearCartItems({ commit }) {
    commit('CLEAR_CART_ITEMS')
  },
}

export const mutations = {
  ADD_TO_CART(state, { product, quantity }) {
    const ProductInCart = state.cart.find((item) => {
      return item.product.name === product.name
    })

    if (ProductInCart) {
      ProductInCart.quantity += quantity
      return
    }
    state.cart.push({
      product,
      quantity,
    })

    window.localStorage.setItem('gf-cart', JSON.stringify(state.cart))
  },
  setCart(state, cart) {
    state.cart = [...JSON.parse(window.localStorage.getItem('gf-cart', cart))]
  },

  REMOVE_PRODUCT_FROM_CART(state, product) {
    state.cart = state.cart.filter((item) => {
      return item.product.name !== product.name
    })
    window.localStorage.setItem('gf-cart', JSON.stringify(state.cart))
  },

  CLEAR_CART_ITEMS(state) {
    state.cart = []
  },
}
