const express = require('express');
const router = express.Router();
const { getTravels, addTravel } = require('../controllers/travelcontroller');

router.get('/', getTravels);
router.post('/', addTravel); // Admin use only

module.exports = router;
