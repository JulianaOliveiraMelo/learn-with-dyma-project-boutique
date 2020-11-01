<template>
    <div>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/shop" class="navbar-brand" >
                <img src="../assets/logo.png" alt="">
                Dyma
            </router-link>
            <button class="navbar-toggler">
                <span class="navbar-toggler-icon" v-trigger-collapse="'collapseMenu'" ></span>
            </button>
            <div id="collapseMenu" class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/shop" >Boutique</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to='/admin'>admin</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>


<script>
export default {
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


.router-link-active {
    color: orange;
    font-weight: bold;
}

</style>