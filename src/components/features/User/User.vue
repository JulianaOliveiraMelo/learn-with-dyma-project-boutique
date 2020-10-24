<template>
  <div class="d-flex flex-row">
      <Shop class="w-75"></shop>
      <Cart class="w-25"></cart>
  </div>
</template>

<script>
import Cart from './Cart/Cart';
import Shop from './Shop/Shop';
export default {
    components: {
        Cart,
        Shop,
    }
}
</script>

<style>

</style>