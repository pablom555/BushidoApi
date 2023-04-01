const bcrypt = require('bcryptjs');

const { generateToken } = require('../services/auth.service');
const { users } = require('../utils/user.mock');

async function loginController(req, res) {
  try {
    const { username, password } = req.body;

    const userDB = users.find((user) => user.username === username);

    if (!userDB) {
      return res.status(401).send('Invalid username or password');
    }

    const passwordMatch = await bcrypt.compare(password, userDB.password);

    if (!passwordMatch) {
      return res.status(401).send('Invalid username or password');
    }

    const token = generateToken(userDB.id);

    return res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = loginController;
