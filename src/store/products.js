import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            products: []
        }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        }
    },
    actions: {
        async fetchProducts({commit}) {
            try {
                const response = await $axios.get('/products')
                commit('SET_PRODUCTS', response.data)
            } catch (error) {
                console.log('Error', error)
            }
        }
    },
    getters: {
        getProducts(state) {
            return state.products
        }
    }
})

export default store

