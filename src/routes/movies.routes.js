const { Router } = require('express');
const { popularController, searchController, movieController } = require('../controllers/movies.controller');

const { authenticateUser } = require('../services/auth.service');

const moviesRoutes = Router();

moviesRoutes.get('/popular', authenticateUser, popularController);

moviesRoutes.get('/search', authenticateUser, searchController);

moviesRoutes.get('/:id', authenticateUser, movieController);

module.exports = moviesRoutes;
