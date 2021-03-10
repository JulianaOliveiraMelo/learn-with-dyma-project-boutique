import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import * as Filters from './utils/filters' // import price as a filter in products prices
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Axios from 'axios'
//import dotEnv from 'dotenv'
Vue.use(BootstrapVue)
Axios.defaults.baseURL = 'https://http-vue-d2068.firebaseio.com/' //process.env.VUE_APP_FIRE_BASE_ROUTE
Vue.prototype.$http = Axios
Vue.config.productionTip = false

Object.keys(Filters).forEach((functionName) => {
  Vue.filter(functionName, Filters[functionName])
})

export const eventBus = new Vue({
  
  data: {
    products: {},
    cart: [],
  },

  methods: {
    addProductToCart(product) {
      if (!this.cart.map(items => items.id).includes(product.id)) { 
        this.cart = [...this.cart, product];
        this.$emit('update:cart', this.cart.slice())
      }
    },
    removeItemFromCart(product) {
      this.cart = this.cart.slice().filter(item => item.id != product.id);
      this.$emit('update:cart', this.cart.slice())
    },
    addProduct(value) {
      // this.products = [...this.products, { ...value, id: this.products.length + 1 + '' }]
      this.$http.post('products.json', { ...value, id: Object.keys(this.products).length + 1 + '' })
        .then((response) => {
          if (response) {
            console.log('a new product has just been added')
            this.$emit('update:products', this.products);
          }
        })
        .catch((error) => {
          if (error) {
          console.log(error)
        }
      })
    },
    addProducts(products) {
      this.products = products;
      this.$emit('update:products', this.products)
    },
    initProducts() {
      this.$http.get('products.json')
        .then((response) => {
          const data = response.data;
        this.addProducts(Object.keys(data).map( key => data[key]))
      })
      .catch((error) => {
      console.log(error)
    })
    }
  },

  created() {
    this.initProducts()
    
  },
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
