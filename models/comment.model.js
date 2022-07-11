const { Model, DataTypes, Sequelize } = require('sequelize');
const { Post, PostSchema } = require('./post.model'); 
const { User, UserSchema } = require('./user.model'); 

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
        allowNull: true,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
    post_id: {
        field: 'post_id',
        type: DataTypes.INTEGER
    },
    user_id: {
        field: 'user_id',
        type: DataTypes.INTEGER
    }
};

class Comment extends Model {
    static associate(models){
        this.belongsTo(models.Post, {
            foreignKey: 'post_id',
            onDelete: 'CASCADE'
        });
        models.Post.hasMany(this, {
            foreignKey: 'post_id',
            onDelete: 'CASCADE'
        });

        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
        });
        models.User.hasMany(this, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
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