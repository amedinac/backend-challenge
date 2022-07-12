const express = require('express');
const { User } = require('../models/user.model');
const { createUser } = require('../controllers/user.controller');

const router = express.Router();

router.post('/', createUser);

module.exports = router;
