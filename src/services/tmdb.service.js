const axios = require('axios');
const dotenv = require('dotenv');
const { TMDB_BASE_URL } = require('../utils/constants');

dotenv.config();

const API_KEY = process.env.TMDB_API_KEY;

async function getPopularMovies(page) {
  const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY, page },
  });

  const { results, total_pages } = response.data;
  return { movies: results, totalPages: total_pages < 10 ? total_pages : 10 };
}

async function searchMovies(term) {
  const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query: term },
  });

  const { results } = response.data;
  return results;
}

async function getMovieDetails(movieId) {
  const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}`, {
    params: { api_key: API_KEY },
  });

  const credits = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}/credits`, {
    params: { api_key: API_KEY },
  });

  const actors = credits?.data?.cast?.map((actor) => ({
    id: actor.id,
    name: actor.name,
    character: actor.character,
    profilePicture: `https://image.tmdb.org/t/p/w500/${actor.profile_path}`,
  }));

  const movieDetail = response.data;
  movieDetail.actors = actors;

  return movieDetail;
}

module.exports = {
  getPopularMovies,
  searchMovies,
  getMovieDetails,
};
