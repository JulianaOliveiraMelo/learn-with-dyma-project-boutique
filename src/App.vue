<template>
  <div id="app">
    <TheHeader />
    <div class="d-flex flex-row justify-content-center">
      <Shop class="w-65" />
      <Cart class="w-35" />
    </div>
      <Footer class="w-100" />
  </div>
</template>

<script>

import TheHeader from '@/components/TheHeader.vue';
import Cart from '@/components/Cart/Cart.vue';
import Shop from '@/components/Shop/Shop.vue';
import Footer from '@/components/Footer/TheFooter.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
    Cart,
    Shop,
    Footer,
  }
}
</script>

<style>

</style>
