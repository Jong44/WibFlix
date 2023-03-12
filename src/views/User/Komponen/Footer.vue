<template>
    <footer class=" relative bottom-0 left-0 right-0 bg-black px-10 py-5 ">
        <div class=" text-white">
            <div class=" font-semibold text-2xl flex items-center justify-between max-sm:text-xl">
                <div class="link flex text-sm gap-5 items-center max-sm:text-[10px] max-sm:gap-2">
                    <RouterLink to="/">
                        <p>HOME</p>
                    </RouterLink>
                    <RouterLink to="/a">
                        <p>TV SERIES</p>
                    </RouterLink>
                    <RouterLink to="/a">
                        <p>MOVIES</p>
                    </RouterLink>
                    <RouterLink to="/a">
                        <p>SEARCH</p>
                    </RouterLink>
                </div>
                <div class="title">
                    <span>Wib</span>
                    <span class=" text-[#e50914]">Flix</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    a p:hover{
        color: #e50914;
    }
</style>