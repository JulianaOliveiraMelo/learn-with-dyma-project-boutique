<template>


  <div class="d-flex flex-row flex-wrap align-content-between " >
      <ShopProductsItem v-for="product in products" :key="product.id" :product="product"/>
  </div>

</template>

<script>

import ShopProductsItem from './ShopProductsItem';
export default {    
    components: {
        ShopProductsItem,
    },
    props: ['products'],
}
</script>

<style>
</style>