const API_KEY = "8a2cec195cbef754a2470db552a993cd";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US&sort_by=popularity.desc`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US&sort_by=popularity.desc`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US&sort_by=popularity.desc`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US&sort_by=popularity.desc`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US&sort_by=popularity.desc`
}

export default requests;

