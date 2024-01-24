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
        }
    },
    props:{
        serie: Object
    },
    mounted(){
        this.changeFlag();
    }

}
</script>

<template>
    <main>
        <div>
            <div class="img-box">
            <img :src="'https://image.tmdb.org/t/p/w342'+serie.poster_path" alt="">
        </div>
        </div>
        <div>     
           <h2> {{ serie.name }} </h2>
            <h4>{{ serie.original_name }}</h4> 
            <h5><img :src="'https://flagsapi.com/'+serie.original_language+'/flat/64.png'" alt=""></h5>
            <h6>{{ serie.vote_average }}</h6>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>
