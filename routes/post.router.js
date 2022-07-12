const express = require('express');
const { Post } = require('../models/post.model');
const { createPost } = require('../controllers/post.controller');

const router = express.Router();

router.post('/', createPost);

module.exports = router;