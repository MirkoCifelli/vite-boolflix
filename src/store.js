import { reactive } from 'vue';

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3/search/movie',
    searchText: '',
    api:'e9ee2c0cab436e4f40a826c5ef1489a3',
    movie: [],
    // flagImg:'https://flagsapi.com/EU/flat/64.png',
    serie:[],
    baseUrlSerie:'https://api.themoviedb.org/3/search/tv',
    // urlImg:'https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'

});


// api_key=e9ee2c0cab436e4f40a826c5ef1489a3