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
        <button class=" py-2 px-3 bg-[#e50914] text-white text-sm font-semibold rounded-md hover:bg-[#9e070e]">
            SIGN IN
        </button>
    </nav>
</template>

<style scoped>
    a.router-link-exact-active{
        padding: 8px 10px;
        background-color: #e50914;
        border-radius: 5px;
    }
</style>