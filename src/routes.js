const express = require('express');
const ContactController = require('./app/controllers/ContactController');

const router = express.Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);

module.exports = router;
