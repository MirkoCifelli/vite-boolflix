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
                <div class="col-12 text-bg-dark text-center">
                    <h2>Movie</h2>  
                </div>
                <div class=" d-flex flex-wrap justify-content-between card-container bg-dark">
                    <singleMovie v-for="(elem,i) in store.movie"
                    :key="i"
                    :movie="elem" />
                </div>
            </div>

            <div class="row">
                <div class="col-12 text-bg-dark text-center">
                    <h2>Serie</h2>  
                </div>
                <div class=" d-flex flex-wrap justify-content-between card-container bg-dark">
                    <SingleSerie v-for="(elem,i) in store.serie"
                    :key="i"
                    :serie="elem" />
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
