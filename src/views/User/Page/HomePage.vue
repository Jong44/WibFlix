<script>
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    export default{
        meta:{
            layout: "UserView"
        },
        data(){
            return{
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
                breakpoints: {
                    700: {
                        itemsToShow: 1,
                        snapAlign: 'start',
                    },

                    1024: {
                        itemsToShow: 6.25,
                        snapAlign: 'start',
                    },
                },
            }
        },
        components:{
            Carousel,
            Slide,
            Pagination,
            Navigation,
        },

        methods:{
        }

    }

</script>

<template>
    <section class=" banner text-white h-[40rem]">
        <div class=" px-40 pt-[10rem] ">
            <p class=" font-bold text-5xl">Kimetsu No Yaiba</p>
            <div class="flex gap-2 mt-6">
                <div class=" bg-[#e50914] px-3 py-1 rounded-full text-sm flex justify-center items-center">
                    <p>Action</p>
                </div>
                <div class=" bg-[#e50914] px-3 py-1 rounded-full text-sm flex justify-center items-center">
                    <p>Fantasy</p>
                </div>
            </div>
            <p class=" w-[40rem] text-justify mt-10 text-[14px]">
                Ketika umat manusia diteror oleh iblis jahat yang melahap jiwa manusia. Agar bisa tetap memiliki kekuatan sihir dan melakukan regenerasi, iblis-iblis itu memakan manusia. Iblis hanya bisa dibunuh jika mereka dipenggal dengan senjata yang terbuat dari Sun Steel yang telah disuntik dengan racun yang diekstraksi dari bunga Wisteria, atau terkena sinar matahari.
            </p>
            <button class="flex justify-center items-center px-5 py-3 bg-[#e50914] gap-3 rounded-md text-sm font-semibold mt-10 hover:bg-[#9e070e]">
                <font-awesome-icon :icon="[ 'fas', 'play' ]" class=" text-sm"/>
                <p>WATCH NOW</p>
            </button>
        </div>
        <div class=" bg-gradient-to-b from-[#14141400] to-[#141414] py-14 mt-[4rem]">      
        </div>
    </section>
    <section class=" px-14 py-10 mt-10">
        <p class=" text-white text-2xl mb-3">Anime Populer</p>
        <carousel :settings="settings" :breakpoints="breakpoints" wrap-around="@loop" autoplay="3000" :transition="1000">
            <slide v-for="slide in 10" :key="slide">
                <div class=" w-[15rem] h-[8rem] mr-1 bg-red-100 rounded-md">
                    <p>{{ slide  }}</p>
                </div>
            </slide>
            <template #addons>
                <Navigation />
            </template>
        </carousel>
    </section>

</template>

<style>
    .banner{
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.359) 0%,rgba(0, 0, 0, 0.304) 100%),url('../../../assets/banner1.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
</style>