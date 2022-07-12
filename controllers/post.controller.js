const { Post } = require('../models/post.model');
const { User } = require('../models/user.model');

const createPost = async (req, res) => {
    try {
        const { title, description, image, userId } = req.body;
        const post = await Post.create({
            title,
            description,
            image,
            userId
        });
        res.json(post);
        console.log("POST /api/post");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { createPost };