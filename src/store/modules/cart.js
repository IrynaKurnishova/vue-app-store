export default {
  state() {
    return {
      cart: JSON.parse(localStorage.getItem('cart')) || []
    }
  },
  getters: {
    totalItemsInCart(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0)
    },
    totalPrice(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    cartItems(state) {
      return state.cart
    }
  },
  mutations: {
    ADD_PRODUCT_TO_CART(state, product) {
      const index = state.cart.findIndex((item) => item.id === product.id)

      if (index !== -1) {
        state.cart[index].quantity++
      } else {
        state.cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        })
      }
      const transformedCart = JSON.stringify(state.cart)
      localStorage.setItem('cart', transformedCart)
    },
    REMOVE_PRODUCT_FROM_CART(state, productId) {
      const index = state.cart.findIndex((item) => item.id === productId)

      if (index !== -1) {
        state.cart.splice(index, 1)
      }
      const transformedCart = JSON.stringify(state.cart)
      localStorage.setItem('cart', transformedCart)
    },
    CHANGE_QUANTITY_IN_CART(state, product) {
      const index = state.cart.findIndex((item) => item.id === product.id)
      if (index !== -1) {
        state.cart[index].quantity--
      } else this.ADD_PRODUCT_TO_CART(state, product)

      const transformedCart = JSON.stringify(state.cart)
      localStorage.setItem('cart', transformedCart)
    }
  },
  actions: {
    addProductToCart({ commit }, product) {
      commit('ADD_PRODUCT_TO_CART', product)
    },
    removeProductFromCart({ commit }, productId) {
      commit('REMOVE_PRODUCT_FROM_CART', productId)
    },
    changeQuantityInCart({ commit }, product) {
      commit('CHANGE_QUANTITY_IN_CART', product)
    }
  }
}
