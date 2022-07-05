const { Comment, CommentSchema } = require('./comment.model');
const { Post, PostSchema } = require('./post.model');
const { User, UserSchema } = require('./user.model');

function setupModels(sequelize) {
    Comment.init(CommentSchema, Comment.config(sequelize));
    Post.init(PostSchema, Post.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;