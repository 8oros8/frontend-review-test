import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    add(state, item) {
      state.cart.unshift(item) // unshift для реализации указанного порядка покупок в корзине
    },
    remove(state, item) {
      state.cart.splice(state.cart.indexOf(item), 1) // в будущем понадобиться функция удаления товаров
    },
  },
  actions: {
    getProductsList(ctx, data) { // Если мы хотим каждые две секунды подгружать новые изменения с сервера, нет смысла хранить данные во Vuex, однако для удобства определить метод для get запроса тут можно
      return api.getProductsList();
    },
  }
})
