const { Router } = require('express');

const loginController = require('../controllers/login.controller');
const profileController = require('../controllers/profile.controller');
const { authenticateUser } = require('../services/auth.service');

const authRoutes = Router();

authRoutes.post('/login', loginController);

authRoutes.get('/profile', authenticateUser, profileController);

module.exports = authRoutes;
