<template>
  <div class="p-3 border product-container d-flex flex-column flex-wrap" >
        <div class="mb-auto" style="text-align: center">
          <img style="object-fit: scale-down; width:100%; max-height:150px;" :src="product.img">
        </div>
        <div>
          <h3>{{ product.title }}</h3>
        </div>
        <div>
          <p style="overflow: hidden">{{ product.description }}</p>
        </div>
        <hr />
        <div class="mt-auto">
          <span>{{ product.price | price }}</span>
          <button @click="addProductToCart" class="btn btn-primary btn-sm float-right">Buy</button>
        </div>
  </div>
</template>

<script>
import { eventBus } from '../../../../main';
export default {
  props: ['product'],
  methods: {
    addProductToCart(){
      eventBus.addProductToCart({...this.product})
    }
  }
}
</script>

<style scoped>
.product-container {
  height: 440px;
  max-width: 230px;
  
} 
p{
  font-size: 12px;
}

</style>