const {Model, DataTypes, Sequelize } = require('sequelize');

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
    }
};

class Post extends Model {
    static associate(){
        //Associate
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
