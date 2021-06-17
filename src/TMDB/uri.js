const uri = {
  fetchTrending: `${process.env.REACT_APP_TMDB_URI}/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
  fetchNetflixOriginals: `${process.env.REACT_APP_TMDB_URI}/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`,
  fetchTopRated: `${process.env.REACT_APP_TMDB_URI}/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  fetchActionMovies: `${process.env.REACT_APP_TMDB_URI}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`,
  fetchComedyMovies: `${process.env.REACT_APP_TMDB_URI}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${process.env.REACT_APP_TMDB_URI}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${process.env.REACT_APP_TMDB_URI}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${process.env.REACT_APP_TMDB_URI}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`,
};

export { uri };
