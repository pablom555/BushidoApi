const { Router } = require('express');

const loginController = require('../controllers/login.controller');

const authRoutes = Router();

authRoutes.post('/login', loginController);

module.exports = authRoutes;
