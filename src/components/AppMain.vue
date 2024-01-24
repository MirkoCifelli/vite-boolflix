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
                <div class="col">
                    <h2>Movie</h2>
                    <singleMovie v-for="(elem,i) in store.movie"
                    :key="i"
                    :movie="elem" />
                </div>
                <!-- <div class="col">
                    <SingleSerie v-for="(elem,i) in store.serie"
                    :key="i"
                    :serie="elem"/>
                </div> -->
            </div>
            <div class="row">
                <div class="col">
                        <h2>Serie</h2>
                        <SingleSerie v-for="(elem,i) in store.serie"
                        :key="i"
                        :serie="elem"/> 
                </div>
            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
.container-main{
    width: 100%;
    height: calc(100vh - 160px);
    padding: 20px;
}
</style>
