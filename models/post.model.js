const {Model, DataTypes, Sequelize } = require('sequelize');
const { User, UserSchema } = require('./user.model');

const POST_TABLE = 'posts';

const PostSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id'
    }
};

class Post extends Model {
    static associate(models){
        this.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });
        models.User.hasMany(this, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: POST_TABLE,
            modelName: 'Post',
            timestamps: false
        }
    }
}


module.exports = {POST_TABLE, PostSchema, Post};
