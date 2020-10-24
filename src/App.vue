<template>
  <div id="app">
    <TheHeader />
    <div class="d-flex flex-column w-100">
      <component :is="page"></component>
    </div>
    
      <Footer class="w-100" />
  </div>
</template>

<script>

import TheHeader from '@/components/TheHeader';
// import Cart from '@/components/features/User/Cart/Cart';
// import Shop from '@/components/features/User/Shop/Shop';
import Footer from '@/components/Footer/TheFooter';
import User from './components/features/User/User';
import Admin from './components/features/Admin/Admin';
import { eventBus } from './main';
export default {
 
  name: 'App',
  components: {
    TheHeader,
    Footer,
    User,
    Admin,
  },
  data(){
    return {
      page: eventBus.page,
    }
  },
  created(){
    eventBus.$on('update:page', (page)=> {
      this.page = page;
    })
  },
}
</script>

<style>

</style>
