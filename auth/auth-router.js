const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../user/user-model.js');
const { jwtSecret } = require('../config/secrets.js');

router.post('/register', async (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  try {
    const newUser = await User.add(user);
    res.status(201).json(newUser);
  }
  catch ({ message, stack, code }) {
    res.status(500).json({ message, stack, code });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.getBy({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);

      res.status(200).json({
        message: `Welcome, ${user.username}!`,
        token
      });
    } else {
      res.status(401).json({ message: 'You shall not pass!' });
    }
  }
  catch ({ message, stack, code }) {
    res.status(500).json({ message, stack, code });
  }
});

function generateToken(user) {
  const payload = {
    sub: user.id,
    dept: user.department
  };

  const options = {
    expiresIn: '1h'
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;