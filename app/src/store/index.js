import Vue from 'vue'
import Vuex from 'vuex'
import orderProvider from './orderProvider/orderProviderModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    orderProvider
  }
})
