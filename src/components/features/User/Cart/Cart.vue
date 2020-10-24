<template>
  <div>
      <CartProductList :cart='cart' />
  </div>
</template>

<script>

import CartProductList from './CartProductsList';
import { eventBus } from '../../../../main.js';
export default {
    data(){
        return {
            cart: [],
        }
    },
    components: {
        CartProductList
    },
    created(){
        this.cart = eventBus.cart;
        eventBus.$on('update:cart', (cart) => { 
            this.cart = cart;
            })
    },
}
</script>

<style>

</style>