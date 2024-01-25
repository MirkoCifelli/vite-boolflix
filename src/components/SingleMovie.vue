<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        };
    },
    methods: {
        changeFlag(){
            this.movie.original_language == this.movie.original_language.toUppercase;
            if (this.movie.original_language == 'en') {
                this.movie.original_language = 'US'
            }
            if (this.movie.original_language == 'ja') {
                this.movie.original_language = 'JP'
            }
            if (this.movie.original_language == 'ko') {
                this.movie.original_language = 'KR'
            }
            if (this.movie.original_language == 'it') {
                this.movie.original_language = 'IT'
            }
            if (this.movie.original_language == 'fr') {
                this.movie.original_language = 'FR'
            }
            if (this.movie.original_language == 'zh') {
                this.movie.original_language = 'CN'
            }
        },
        averageToInt(x){
            x = Math.round(x);
            x = x / 2;
            return x;
        }
    },
    props:{
        movie: Object
    },
    mounted(){
        this.changeFlag();
    }

}
</script>

<template>
    <main>
        <div class="container-img m-5">
            <div class="img-box">
                <img v-if=" movie.poster_path !== null" :src="'https://image.tmdb.org/t/p/w342'+movie.poster_path" alt="">
                <div v-else class="img-box">
                    <img src="../../public/vite.svg" alt="">
                </div>
            </div>
            <div class="img-info text-white">     
                <div class=" fs-6 "> Title: {{ movie.title }} </div>
                <div class=" fs-6 ">Original Title: {{ movie.original_title }}</div> 
                <div>Flag: <img :src="'https://flagsapi.com/'+movie.original_language+'/flat/64.png'" alt=""></div>
                <!-- <h6> Vote:{{ movie.vote_average }}</h6> -->
                <div class=" fs-6 ">
                    <i v-for="(star,i) in 5" class="fa-star text-warning" 
                    :class="{
                    'fa-regular': averageToInt(movie.vote_average) <= i,
                    'fa-solid': averageToInt(movie.vote_average) > i
                    }"></i>
                </div>
                <span>
                    {{ movie.overview }}
                </span>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

.container-img{
    width: 300px;
    height: 450px;
    position: relative;
    &:hover .img-box{ 
        opacity: 0;
    }
    .img-box{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        
         img{
             width: 100%;
             height: 100%;
             object-fit: cover;
        }
    }
    .img-info{
        width: 100%;
        height: 100%;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        &:hover{
            opacity: 1;
        }
        
    }
    span{
        font-size: 12px;
    }
    
}
</style>
