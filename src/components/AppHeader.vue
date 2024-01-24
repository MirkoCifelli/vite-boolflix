<script>
import { store } from '../store';


export default {
    data() {
        return {
            store
        };
    },
    methods: {
        
    }
}
</script>

<template>
    <header>
        <div class="container-header">
            <div class="row">
                <div class="col">
                    <input
                        v-model="store.searchText"
                        type="text"
                        class="form-control"
                        placeholder="Search character"
                        aria-label="Search character">
                </div>
                <div class="col">
                    <button type="submit" class="btn btn-primary mb-3" @click="$emit('performSearch')">
                                    Search
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.container-header{
    width: 100%;
    height: 160px;
    padding: 20px;
}
</style>
