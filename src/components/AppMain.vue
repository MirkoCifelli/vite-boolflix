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
                    <div class="col">
                        <SingleSerie v-for="(elem,i) in store.serie"
                        :key="i"
                        :serie="elem"/>
                    </div>
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
