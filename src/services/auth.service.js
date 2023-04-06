const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const { SECRET_KEY } = process.env;

function generateToken(userDB) {
  const token = jwt.sign(userDB, SECRET_KEY, { expiresIn: '2h' });
  return token;
}

function authenticateUser(req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return res.status(401).send('Token not provided');
    }

    const token = authorizationHeader.replace('Bearer ', '');

    const { id, email, username } = jwt.verify(token, SECRET_KEY);

    req.body.user = { id, email, username };

    if (!id) {
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
