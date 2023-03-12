<script>
    import { RouterLink, RouterView } from 'vue-router'
    import Navbar from './User/Komponen/Navbar.vue'
    import Footer from './User/Komponen/Footer.vue'

    export default{
        components:{
            Navbar,
            Footer
        }
    }
</script>

<template>
    <Navbar/>
    <div class=" bg-[#141414] overflow-x-hidden">
        <router-view></router-view>
    </div>
    <Footer/>
</template>

<style>
    *{
        margin: 0;
    }

</style>