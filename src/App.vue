<template>
  <div id="app">
    <TheHeader />
    <User />
    <Admin />
      <Footer class="w-100" />
  </div>
</template>

<script>

import TheHeader from '@/components/TheHeader.vue';
// import Cart from '@/components/features/User/Cart/Cart.vue';
// import Shop from '@/components/features/User/Shop/Shop.vue';
import Footer from '@/components/Footer/TheFooter.vue';
import User from './components/features/User/User.vue';
import Admin from './components/features/Admin/Admin.vue';
export default {
 
  name: 'App',
  components: {
    TheHeader,
    // Cart,
    // Shop,
    Footer,
    User,
    Admin,
    
  },
}
</script>

<style>

</style>
