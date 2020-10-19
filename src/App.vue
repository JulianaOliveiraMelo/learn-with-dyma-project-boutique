<template>
  <div id="app">
    <TheHeader />
    <div class="d-flex flex-row">
      <Shop class="w-75" />
      <Cart class="w-25" />
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
