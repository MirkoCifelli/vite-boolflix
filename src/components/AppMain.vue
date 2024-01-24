<script>
import { store } from '../store';
import SingleMovie from './SingleMovie.vue';
export default {
    data() {
        return {
            store
        };
    },
    methods: {

    },
    components:{
        SingleMovie
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
