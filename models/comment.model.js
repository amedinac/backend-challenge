const { Model, DataTypes, Sequelize } = require('sequelize');
const { Post, PostSchema } = require('./post.model'); 

const COMMENT_TABLE = 'comments';

const CommentSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    content: {
        allowNull: false,
        type: DataTypes.TEXT

    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },/*
    postId: {
        field: 'post_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: Post,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }*/
};

class Comment extends Model {
    static associate(models){
        this.hasMany(models.Post, {
            as: 'posts',
            foreignKey: 'postId',
    });
}
    static config(sequelize){
        return {
            sequelize,
            tableName: COMMENT_TABLE,
            modelName: 'Comment',
            timestamps: false
        }
    }
}

module.exports = {COMMENT_TABLE, CommentSchema, Comment};