const router = require('express').Router();
const User = require('./user-model.js');

router.get('/', async (req, res) => {
  try {
    const dept = req.decodedToken.dept;
    res.status(200).json(await User.getBy({ department: dept }));
  }
  catch ({ message, stack, code }) {
    res.status(500).json({ message, stack, code });
  }
})

router.get('/all', async (req, res) => {
  try {
    res.status(200).json(await User.getAll());
  }
  catch ({ message, stack, code }) {
    res.status(500).json({ message, stack, code });
  }
})

module.exports = router;