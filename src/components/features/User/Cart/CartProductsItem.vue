<template>
  <div class="d-flex flex-row justify-content-between p-2">
    <span class="pr-2">{{ item.title }}</span>
    <span class="pr-2"><strong>{{ item.price}}€</strong></span>
    <button class="close" @click="removeItemFromCart">
      <span>&times;</span>
    </button>
  </div>

</template>

<script>
import { eventBus } from '../../../../main.js';
export default {
  props: ['item'],
  methods: {
    removeItemFromCart(){
      eventBus.removeItemFromCart({...this.item});
    }
  }

}
</script>

<style>

</style>