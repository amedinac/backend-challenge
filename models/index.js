const { Comment, CommentSchema } = require('./comment.model');
const { Post, PostSchema } = require('./post.model');

function setupModels(sequelize) {
    Comment.init(CommentSchema, Comment.config(sequelize));
    Post.init(PostSchema, Post.config(sequelize));
}

module.exports = setupModels;