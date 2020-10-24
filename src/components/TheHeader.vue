<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" >
                <img src="../assets/logo.png" alt="">
                Dyma
            </a>
            <button class="navbar-toggler">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
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


</style>