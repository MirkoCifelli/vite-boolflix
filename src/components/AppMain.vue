<script>
import { store } from '../store';
import SingleMovie from './SingleMovie.vue';
import SingleSerie from './SingleSerie.vue';
export default {
    data() {
        return {
            store
        };
    },
    methods: {

    },
    components:{
        SingleMovie,
        SingleSerie
    }
}
</script>

<template>
    <main>
        <div class="container-main">
            <div class="row">
                <div class="col-12 text-bg-dark text-center p-2">
                    <h2>Movie</h2>  
                </div>
                <div class=" d-flex flex-wrap justify-content-around card-container bg-dark">
                    <singleMovie v-for="(elem,i) in store.movie"
                    :key="i"
                    :movie="elem" 
                    class="mt-2"/>
                </div>
            </div>

            <div class="row">
                <div class="col-12 text-bg-dark text-center p-2">
                    <h2>Serie</h2>  
                </div>
                <div class=" d-flex flex-wrap justify-content-around card-container bg-dark">
                    <SingleSerie v-for="(elem,i) in store.serie"
                    :key="i"
                    :serie="elem" 
                    class="mt-2 "/>
                </div>
            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
.container-main{
    width: 100%;
    height: calc(100vh - 100px); 
}
</style>
