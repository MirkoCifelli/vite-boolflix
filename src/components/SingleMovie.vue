<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        };
    },
    methods: {

    },
    props:{
        movie: Object
    }

}
</script>

<template>
    <main>
        <div>     
           <h2> {{ movie.title }} </h2>
            <h4>{{ movie.original_title }}</h4> 
            <h5>{{ movie.original_language }}</h5>
            <h6>{{ movie.vote_average }}</h6>
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
