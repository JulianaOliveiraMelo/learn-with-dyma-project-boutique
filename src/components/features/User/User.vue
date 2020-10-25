<template>
  <div class="d-flex flex-row">
      <transition name="left" appear>
      <Shop class="w-75"></shop>
      </transition>
      <transition name="right" appear>
      <Cart class="w-25"></cart>
      </transition>
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

<style scope>
    .left-enter-active {
        opacity: 0;
        animation: fromLeft 2s 2s;
    }
    .right-enter-active {
        opacity: 0;
        animation: fromRight 2s 2s;
    }

    @keyframes fromLeft {
        from {
            opacity: 0;
            transform: translateX(-250px);
        }
        to {
            opacity: 1;
            
        }
    }
    @keyframes fromRight {
        from {
            opacity: 0;
            transform: translateX(250px);
        }
        to {
            opacity: 1;
            
        }
    }
</style>