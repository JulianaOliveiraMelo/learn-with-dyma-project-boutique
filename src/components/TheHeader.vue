<template>
    <div>
        <transition name="navTop" appear>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" >
                <img src="../assets/logo.png" alt="">
                Dyma
            </a>
            <button class="navbar-toggler">
                <span class="navbar-toggler-icon" v-trigger-collapse="'collapseMenu'" ></span>
            </button>
            <div id="collapseMenu" class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" :class="{ active: page === 'User'}" @click="changePage('User')">Boutique</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{ active: page === 'Admin'}" @click="changePage('Admin')">Admin</a>
                    </li>
                </ul>
            </div>
        </nav>
        </transition>
    </div>
</template>


<script>
import { eventBus } from '../main'
export default {
    data(){
        return {
            page: eventBus.page
        }
    },
    
    methods: {
        changePage(value){
            eventBus.changePage(value);
        }
    },
    created(){
        eventBus.$on('update:page', (page) => {
            this.page = page
            })
    },
    directives: {
        triggerCollapse: {
            inserted(el, binding){
                const nav = document.querySelector('#' + binding.value);
                window.addEventListener('click', () => {
                    nav.classList.remove('show')
                })
                el.addEventListener('click', (event) => {
                    if(nav.classList.contains('show')){
                        nav.classList.remove('show');
                    }else {
                        nav.classList.add('show')
                    }
                    event.stopPropagation();
                })
            }
        }
    }
}
</script>

<style scoped>
nav>a>img {
    width: 30px;
    height: 30px;
}

a {
    cursor: pointer;
}

.navTop-enter-active{
    opacity: 0;
    animation: fromTop 2s ease-out;
}

@keyframes fromTop {
    from {
        opacity: 0;
        transform: translateY(-250px)
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
    
}


</style>