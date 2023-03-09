<script>
    import { RouterLink, RouterView } from 'vue-router'
    import Navbar from './User/Komponen/Navbar.vue'

    export default{
        components:{
            Navbar
        }
    }
</script>

<template>
    <Navbar/>
    <div class=" bg-[#141414]">
        <router-view></router-view>
    </div>
</template>

<style>
    *{
        margin: 0;
    }

</style>