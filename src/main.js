import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

export const eventBus = new Vue({
  
  data: {
    
   
    products: [{
      id: '1',
      img: 'https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2020/03/apple-macbook-air-2020-frandroid.png?resize=580,580',
      title: 'MacBook Air',
      description: "Léger comme l’air. Rapide comme l’éclair. Incroyablement fin et léger, le MacBook Air monte encore en gamme.",
      price: 2500,
    },
      {
      id: '2',
      img: 'https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/08/iphone-11-pro-2019-frandroid.png?resize=580,580',
      title: 'Iphone',
      description: "L'iPhone 11 Pro est le flagship de la douzième génération du célèbre smartphone d'Apple.",
      price: 1309,
      },
      {
      id: '3',
      img: 'https://images.frandroid.com/wp-content/uploads/2019/08/samsung-galaxy-watch-active-2-2019-frandroid.png',
      title: 'samsung Galaxy',
      description: "La Samsung Galaxy Watch Active 2 est une montre connectée annoncée le 5 août 2019.",
      price: 256,
      },
      {
      id: '4',
      img: 'https://ik.imagekit.io/overdose/3wisemen/catalog/product/c/a/camel_belt_30.png',
      title: 'Camel Stitch Leather Belt',
      description: "Camel stitch leather belt with silver buckle. Great with a suit or jeans.",
      price: 60,
      },
      {
        id: '5',
        img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/e2/0e/1a/1707746/1540-0/tsp20180327114010/PC-Portable-Gaming-Acer-Predator-21-X-GX21-71-76VC-21-Incurve.jpg',
        title: 'Predator',
        description: 'The GPU. The source of any competent, powerful gaming machine. With next-gen solutions from NVIDIA® and AMD, this source is overflowing.',
        price: 2300,
      },
      {
        id: '6',
        img: 'https://www.lamaisondelacouture.com/pub/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/2/0/20170609_brother1784_cutout_noshadow_1.png',
        title: 'Machine à coudre',
        description: 'La machine à coudre et à broder Brother Innov-is M280D est très intuitive. Avec la réapparition des motifs Disney, cette petite combinée vous permet de réaliser des projets à la fois techniques et magiques ! ',
        price: 809
      }],
    cart: [],
    page: 'Admin',

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
    changePage(value) {
      this.page = value;
      this.$emit('update:page', this.page);
    },
    addProduct(value) {
      this.products = [...this.products, {...value, id: this.products.length + 1 + ''}]
      this.$emit('update:products', this.products)
    }
  },

  created() {
    
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
