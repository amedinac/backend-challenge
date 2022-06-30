const express = require('express');
const { Comment } = require('../models/comment.model');

const router = express.Router();

router.get('/',
    async (req, res, next) => {
        try {
            const comments = await Comment.findAll();
            res.json(comments);
            console.log("GET /api/comments");
        } catch (error) {
            next(error);
        }
});

router.post('/', 
    async (req, res, next) => {
        try {
            const { content } = req.body;
            const comment = await Comment.create({
                content
            });
            res.json(comment);
            console.log("POST /api/comments");
        } catch (error) {

            next(error);
        }
});



module.exports = router;