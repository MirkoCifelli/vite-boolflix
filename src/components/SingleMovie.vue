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
        <div class="img-box">
            <img :src="'https://image.tmdb.org/t/p/w342'+movie.poster_path" alt="">
        </div>
        <div>     
           <h2> Title: {{ movie.title }} </h2>
            <h4>Original Title: {{ movie.original_title }}</h4> 
            <h5>Flag: <img :src="'https://flagsapi.com/'+movie.original_language+'/flat/64.png'" alt=""></h5>
            <h6> Vote:{{ movie.vote_average }}</h6>
            <i v-for="(star,i) in 5" class="fa-star text-warning" 
            :class="{
                    'fa-regular': averageToInt(movie.vote_average) <= i,
                    'fa-solid': averageToInt(movie.vote_average) > i
                }"></i>
        </div>
    </main>
</template>

<style lang="scss" scoped>
// .img-box{
//     width: 200px;
//     height: 200px;
//     img{
//         width: 100%;
//     }
// }
</style>
