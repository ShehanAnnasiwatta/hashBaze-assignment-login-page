const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {

    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (!email || !password) {
        res.status(400).json({ message: "Please fill all feilds" })
    }

    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400).json({ message: "A user with this email already exists!" })
    } else {
        const createUser = {
            username,
            email,
            password: hashedPassword
        }

        const newUser = await User.create(createUser);

        if (newUser) {
            res.status(201).send({ username, email })
        }
    }

}

module.exports = {
    registerUser
}