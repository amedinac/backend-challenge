const { User } = require('../models/user.model');

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({
            username,
            email,
            password
        });
        res.json(user);
        console.log("POST /api/users");
    } catch (error) {

    }
};

module.exports = {  createUser };
