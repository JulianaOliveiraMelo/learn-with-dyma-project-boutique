<template>
  <div id="app">
    <TheHeader />
    <div class="d-flex flex-column w-100">
      <router-view></router-view>
    </div>
    
      <Footer class="w-100" />
  </div>
</template>

<script>

import TheHeader from './components/TheHeader';
import Footer from './components/Footer/TheFooter';
export default {
 
  name: 'App',
  components: {
    TheHeader,
    Footer,
  },
}
</script>

<style>
a {
  cursor: pointer;
}
</style>
