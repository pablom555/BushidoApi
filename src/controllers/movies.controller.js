const { getPopularMovies, searchMovies, getMovieDetails } = require('../services/tmdb.service');

async function popularController(req, res) {
  try {
    const page = req?.query?.page;
    const movies = await getPopularMovies(page);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function searchController(req, res) {
  try {
    const term = req?.query?.term;
    const movies = await searchMovies(term);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function movieController(req, res) {
  try {
    const id = req?.params?.id;
    const movie = await getMovieDetails(id);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  popularController,
  searchController,
  movieController,
};
