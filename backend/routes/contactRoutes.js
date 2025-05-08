const express = require('express');
const router = express.Router();
const { createMessage } = require('../controllers/contactcontroller');

router.post('/', createMessage);

module.exports = router;
router.get('/', async (req, res) => {
    const messages = await Contact.find().sort({ date: -1 });
    res.json(messages);
  });
  