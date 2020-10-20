<template>

    <div>
        <ShopProductsList class="p-3" :products="products"></ShopProductsList>
    </div>  

</template>

<script>
import ShopProductsList from './ShopProductsList.vue';
import { eventBus } from '../../main.js'
export default {
    data(){
        return {
            products: [],
        }
    },
    components: {
        ShopProductsList,
       
    },
    created(){
        this.products = eventBus.products;
        eventBus.$on('update:products', (product) => { this.products = product;})
    }
}
</script>

<style scoped>

</style>