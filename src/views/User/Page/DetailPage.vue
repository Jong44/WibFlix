<script>
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    import jsonFilm from '../../../assets/json/populer.json'

    export default{
        meta:{
            layout: "UserView"
        },
        data(){
            return{
                like: false,
                settings: {
                    itemsToShow: 2.5,
                    snapAlign: 'start',
                },
                breakpoints: {
                    700: {
                        itemsToShow: 2,
                        snapAlign: 'start',
                    },
                    1024: {
                        itemsToShow: 4.25,
                        snapAlign: 'start',
                    },
                },
                settings1: {
                    itemsToShow: 1.1,
                    snapAlign: 'start',
                },
                breakpoints1: {
                    700: {
                        itemsToShow: 1.5,
                        snapAlign: 'start',
                    },
                    1024: {
                        itemsToShow: 1.05,
                        snapAlign: 'start',
                    },
                },
                settings2: {
                    itemsToShow: 1.25,
                    snapAlign: 'start',
                },
                breakpoints2: {
                    700: {
                        itemsToShow: 1.5,
                        snapAlign: 'start',
                    },
                    1024: {
                        itemsToShow: 4.5,
                        snapAlign: 'start',
                    },
                },
                dataFilm: jsonFilm,
                dataFilmById: '',
            }
        },
        components:{
            Carousel,
            Slide,
            Pagination,
            Navigation,
        },
        created(){
            this.dataFilmById = jsonFilm.filter(film => { return film.id == this.$route.params.id})
        }
    }

</script>


<template>
    <section class=" banner text-white h-[40rem] z-0 max-sm:w-auto px-[10rem] py-[15rem] max-sm:px-[1rem] max-sm:py-[7rem]" v-bind:style="{ backgroundImage:'linear-gradient(to bottom, rgba(0, 0, 0, 0.505) 0%,rgba(0, 0, 0, 0.484) 100%),' + 'url(' + dataFilmById[0].cover + ')' }">
        <div class="flex gap-10 max-sm:block">
            <div class=" poster w-1/2 h-[40rem] max-sm:w-auto max-sm:h-[30rem]" v-bind:style="{ backgroundImage: 'url(' + dataFilmById[0].poster + ')' }">
            </div>
            <div class=" text-white max-sm:mt-10">
                <p class=" font-semibold text-6xl max-sm:text-3xl">{{ dataFilmById[0].judul }}</p>
                <div class="flex gap-2 mt-10 max-sm:mt-4" >
                    <div class=" bg-[#e50914] px-3 py-1 rounded-full text-sm flex justify-center items-center" v-for="data in dataFilmById[0].genre" :key="data">
                        <p>{{ data }}</p>
                    </div>
                </div>
                <p class=" w-[40rem] text-justify mt-10 text-[14px] max-sm:text-[12px] max-sm:mt-6 max-sm:w-auto">
                    {{ dataFilmById[0].description }}
                </p>
                <div class="flex items-center mt-8">
                    <div class=" px-8 " @click="like = !like">
                        <font-awesome-icon :icon="[ 'fas', 'heart' ]" class="text-xl" :class="like ? 'text-[#e50914]' : 'text-white'"/>
                    </div>
                    <button class="flex justify-center items-center px-5 py-3 bg-[#e50914] gap-3 rounded-md text-sm font-semibold hover:bg-[#9e070e]">
                        <font-awesome-icon :icon="[ 'fas', 'play' ]" class=" text-sm"/>
                        <p>WATCH NOW</p>
                    </button>
                </div>
                <p class=" mt-10 text-xl font-bold mb-2">Karakter</p>
                <div class="bg-[#e50914] p-1 w-10"></div>
                <div class=" w-[40rem] mt-5">
                    <carousel :settings="settings" :breakpoints="breakpoints" wrap-around="@loop" :transition="1000">
                        <slide v-for="karakter in dataFilmById[0].karakter" :key="karakter">
                            <div class=" karakter-card w-[12rem] h-[13rem] mr-2 flex flex-1 items-end max-sm:w-[5rem] max-sm:h-[18rem]"   v-bind:style="{ backgroundImage: 'url(' + karakter.images + ')' }">
                                <div class=" w-full h-10 bg-[#000000c1] text-start px-3 py-3 text-sm font-medium">
                                    <p>{{ karakter.nama }}</p>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
    </section>


    <section class=" mt-[25rem] px-[10rem] text-white max-sm:mt-[45rem] max-sm:px-[1rem]">
        <p class=" mt-10 text-2xl font-bold mb-2">Video</p>
        <div class="bg-[#e50914] p-1 w-10 mb-10"></div>
        <div class="">
            <carousel :settings="settings1" :breakpoints="breakpoints1" wrap-around="@loop" :transition="1000">
                <slide v-for="slide in 5" :key="slide">
                    <iframe src="https://www.youtube.com/embed/a9tq0aS5Zu8" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class=" w-full h-[40rem] z-0 mr-2 max-sm:h-[10rem]"></iframe>
                </slide>
                <template #addons>
                    <Navigation />  
                </template>
            </carousel>
        </div>
    </section>

    <section class=" px-[10rem] max-sm:px-[1rem] text-white">
        <p class=" mt-10 text-2xl font-bold mb-2">Kamu mungkin juga suka</p>
        <carousel :settings="settings2" :breakpoints="breakpoints2" wrap-around="@loop" :transition="1000">
            <slide v-for="slide in dataFilm" :key="slide" class="py-10 px-1">
                <div class="card">
                    <div class="card-movie w-[15rem] h-[8rem] "  v-bind:style="{ backgroundImage: 'url(' + slide.cover + ')' }">
                    </div>
                    <div class="card-footer bg-[#141414] text-white p-4 text-start">
                        <div class="flex justify-between">
                            <div class="text-white flex gap-2">
                                <router-link :to="{
                                    name: 'detail',
                                    params: {
                                        id: slide.id
                                    }
                                }">
                                    <div class=" rounded-full px-[9px] py-[6.5px] flex justify-center items-center bg-white text-black">
                                        <font-awesome-icon :icon="[ 'fas', 'play' ]" class="text-[9px] ml-[1.5px]"/>
                                    </div>
                                </router-link>
                                <div class=" rounded-full px-[8px] py-[7px] flex justify-center items-center border border-white">
                                    <font-awesome-icon :icon="[ 'fas', 'add' ]" class="text-[9px]"/>
                                </div>
                                <div class=" rounded-full px-[8px] py-[7px] flex justify-center items-center border border-white">
                                    <font-awesome-icon :icon="[ 'fas', 'thumbs-up' ]" class="text-[9px]"/>
                                </div>
                            </div>
                            <div class="">
                                <div class=" rounded-full px-[8px] py-[7px] flex justify-center items-center border border-white">
                                    <font-awesome-icon :icon="[ 'fas', 'chevron-down' ]" class="text-[9px]"/>
                                </div>
                            </div>
                        </div>
                        <p class=" mt-2 text-xs font-semibold">{{ slide.judul }}</p>
                        <div class="flex gap-1 text-[8px] font-medium mt-2">
                            <div class=" border border-white flex justify-center items-center px-1 py-[0.5px] rounded-sm">
                                <p>13+</p>
                            </div>
                            <p>{{ slide.durasi }}</p>
                            <div class=" border border-white flex justify-center items-center px-1 py-[0.5px] rounded-sm">
                                <p>HD</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-5 gap-1 text-[9px] mt-2">
                            <p v-for="data in slide.genre">
                                {{ data }}
                            </p>
                        </div>
                    </div>
                </div>
            </slide>
        </carousel>
    </section>
</template>

<style scoped>
    .banner{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .poster{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .karakter-card{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .card-movie{
        border-radius: 6px;
        background-position: center;
        background-position: no-repeat;
        background-size: cover;
    }

    .card-movie::before{ 
        content: '';
        top: 0;
        right: 0;
        left: 0;
        bottom: 7.8rem;
        position: absolute;
        background-color: black;
        opacity: 0;
        transition: opacity 0.5s ease-in;
        position: absolute;
        opacity: 0;
        z-index: 10;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    .card{
        border-radius: 6px;
        position: relative;
        transition: transform 600ms;
        z-index: 0;
    }

    .card:hover .card-movie:before{
        opacity: 0.5;
    }

    .card:hover{
        transform: scale(1.1);
        z-index: 1;
        box-shadow: rgba(0, 0, 0, 0.66) 1px 1px 6px 1px;
    }

    .card:hover .card-movie{
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    .card .content, .card .card-footer{
        opacity: 0;
        transition: opacity 0.5s ease-in;
    }
    .card:hover .card-footer{
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        opacity: 1;
    }

    .card:hover .content{
        opacity: 1;
    }


</style>
