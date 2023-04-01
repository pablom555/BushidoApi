const express = require('express');
const authRoutes = require('./auth.routes');
const moviesRoutes = require('./movies.routes');

const apiRoutes = express();

apiRoutes.use('/auth', authRoutes);
apiRoutes.use('/movies', moviesRoutes);

module.exports = apiRoutes;
