//const { models } = require('../config/mysql');
const { Comment } = require('../models/comment.model');

const createComment = async (req, res) => {
        try {
            const { content, post_id, user_id } = req.body;
            const comment = await Comment.create({
                content,
                post_id,
                user_id
            });
            res.json(comment);
            console.log("POST /api/comments");
        } catch (error) {

        }
}

const getComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.json(comments);
        console.log("GET /api/comments");
    } catch (error) {

    }
}

const getComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findByPk(id);
        res.json(comment);
        console.log("GET /api/comments/:id");
    } catch (error) {
    
    }
}

const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;
        const comment = await Comment.update({
            content
        }, {
            where: {
                id
            }
        });
        res.json(comment);
        console.log("PUT /api/comments/:id");
    } catch (error) {

    }
}

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.destroy({
            where: {
                id
            }
        });
        res.json(comment);
        console.log("DELETE /api/comments/:id");
    } catch (error) {

    }
}




module.exports = {createComment, getComments, getComment, updateComment, deleteComment};