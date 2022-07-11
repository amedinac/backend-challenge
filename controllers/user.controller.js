const { User } = require('../models/user.model');

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({
            name,
            email,
            password
        });
        res.json(user);
        console.log("POST /api/users");
    } catch (error) {

    }
};

