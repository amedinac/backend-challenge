const { models } = require('../config/mysql');

class CommentController {

    constructor() {}

    async create(req, res) {
        const { postId, content } = req.body;
        const comment = await models.Comment.create({
            postId,
            content
        });
        return res.json(comment);
    }

    async list(req, res) {
        const comments = await models.Comment.findAll({
            include: [{
                model: models.Post,
                as: 'posts'
            }]
        });
        return res.json(comments);
    }
}