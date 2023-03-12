<script>
    export default{
        data(){
            return{
                modalShow: false
            }
        }
    }

</script>

<template>
    <nav class=" absolute top-0 left-0 right-0 px-5 py-3 flex justify-between items-center z-[1]">
        <div class=" text-white">
            <div class=" font-semibold text-2xl flex items-center gap-10">
                <div class="title">
                    <span>Wib</span>
                    <span class=" text-[#e50914]">Flix</span>
                </div>
                <div class="link flex text-sm gap-5 items-center max-sm:hidden">
                    <RouterLink to="/">
                        <p>HOME</p>
                    </RouterLink>
                    <RouterLink to="/a">
                        <p>SEARCH</p>
                    </RouterLink>
                    <RouterLink to="/a">
                        <p>TV SERIES</p>
                    </RouterLink>
                    <RouterLink to="/a">
                        <p>MOVIES</p>
                    </RouterLink>
                </div>
            </div>
        </div>
        <button class=" py-2 px-3 bg-[#e50914] text-white text-sm font-semibold rounded-md hover:bg-[#9e070e]" @click="modalShow = true">
            SIGN IN
        </button>
    </nav>

    <div class=" modal fixed inset-0 bg-[#00000079] flex flex-1 z-10" v-if="modalShow">
        <div class=" bg-[#141414] m-auto px-10 py-7 w-[30rem] max-sm:w-[20rem]">
            <p class="text-center text-white text-3xl">
                <span>Wib</span>
                <span class=" text-[#e50914]">Flix</span>
            </p>
            <form action="" class="grid gap-5 mt-5 text-white">
                <input type="text" placeholder="Email" class=" bg-transparent border border-gray-400 px-3 py-2 w-full rounded-sm">
                <input type="password" placeholder="Password" class=" bg-transparent border border-gray-400 px-3 py-2 w-full rounded-sm">
            </form>
            <button class=" bg-[#e50914] w-full mt-5 text-white py-2 font-semibold rounded-sm hover:bg-[#9e070e]" type="submit" @click=" modalShow = false">SIGN IN</button>
            <br/>
            <div class="mt-5"></div>
            <RouterLink to="/a" class="" >
                <p class="text-center text-[#e50914]">
                    SIGN UP
                </p>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    a.router-link-exact-active{
        padding: 8px 10px;
        background-color: #e50914;
        border-radius: 5px;
    }
</style>