<template>
    <section class="flex h-[91.3vh] px-40 justify-between items-center text-white text-lg">
        <div class="">
            <h1 class=" font-bold text-[4rem] mb-12">Coming Soon</h1>
            <p class="my-2">Sorry, This page is under construction please be patience. </p>
            <p>To return to the homepage click on the bellow. </p>
            <div class=" border-white border px-7 py-2 w-max mt-8 cursor-pointer hover:bg-[#e50914]" @click="this.$router.push('/')">
                <p>Go Home</p>
            </div>
        </div>
    </section>
</template>