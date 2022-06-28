const express = require('express');

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


module.exports = router;