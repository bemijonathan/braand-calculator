import Vue from 'vue'
import App from './App.vue'
import {stores} from './store'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: [

    ]
  },
  mutations: {
    remove (state, payload) {
      state.count.splice(payload, 1)
    },
    add(state, x){
     console.log( state.count.push({Total:0,percentage:0}))
    },
    Total(state, payload){
      state.count[payload.index].Total = payload.total
    }
  },
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),

}).$mount('#app')
