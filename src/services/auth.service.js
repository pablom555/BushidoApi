const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const { SECRET_KEY } = process.env;

function generateToken(userId) {
  const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
  return token;
}

function authenticateUser(req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return res.status(401).send('Token not provided');
    }

    const token = authorizationHeader.replace('Bearer ', '');

    const { userId } = jwt.verify(token, SECRET_KEY);

    if (!userId) {
      return res.status(401).send('Invalid Token');
    }

    return next();
  } catch (error) {
    return res.status(401).send('Invalid Token');
  }
}

module.exports = {
  generateToken,
  authenticateUser,
};
