<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
// import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store';

export default {
    data() {
        return {
            store
        };
    },
    components: {
        AppHeader,
        AppMain,
        // AppFooter
    },  
    methods: {
        getResults(){
            axios.get(this.store.baseUrl,{
            params:{
                api_key: this.store.api,
                query: this.store.searchText
            }
        }).then((response)=>{
            console.log(response)
            this.store.movie= response.data.results;
        });
        },
        getResultsSerie(){
            axios.get(this.store.baseUrlSerie,{
            params:{
                api_key: this.store.api,
                query: this.store.searchText
            }
        }).then((response)=>{
            console.log(response,'response serieee')
            this.store.serie= response.data.results;
            console.log(response.data.results,'response serieee nuovaaaaa')

        });
        }
    },
    created(){
        // axios.get(this.store.baseUrl,{
        //     params:{
        //         api_key: this.store.api,
        //         query: this.store.searchText
        //     }
        // }).then((response)=>{
        //     console.log(response,'quiii')
        // });
    },
    mounted(){
        this.getResults();
        this.getResultsSerie();
    }
}
</script>

<template>


    <AppHeader @performSearch="getResults(),getResultsSerie()" />

    <AppMain />

    <!-- <AppFooter /> -->
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
