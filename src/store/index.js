import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            products: []
        }
    },
    // actions: {
    //     async fetchProducts() {
    //         try {
    //             return await $axios.get('/products')
    //         } catch (error) {
    //             console.log('Error', error)
    //         }
    //     }
    // },
})

export default store

