const { getPopularMovies, searchMovies, getMovieDetails } = require('../services/tmdb.service');

const moviesResolvers = {
  popularMovies: async (args) => {
    const movies = await getPopularMovies(args?.page);
    return movies;
  },

  searchMovies: async (args) => {
    const movies = await searchMovies(args?.term);
    return movies;
  },

  movieDetails: async (args) => {
    const movie = await getMovieDetails(args?.id);
    return movie;
  },
};

module.exports = moviesResolvers;
