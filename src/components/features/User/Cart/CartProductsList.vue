<template>
<div class='d-flex flex-column pr-2 pt-2 pb-2'>
  <h5>Panier</h5>
  <template  v-if="cart.length > 0">
  <hr class="w-100" />
  <CartProductsItem v-for="product in cart" :key="product.id" :item="product" />
  <span><strong>Total : </strong>{{ total }} €</span>
  </template>
  </div>
</template>

<script>
import CartProductsItem from './CartProductsItem';


export default {
  props: ['cart'],
 components : {
     CartProductsItem,
 },
 computed: {
   total(){
     return this.cart.reduce( (accumulateur, currentValue) => { accumulateur += (currentValue.price);
     return accumulateur;
     }, 0)
   },
 }
}
</script>

<style>

</style>