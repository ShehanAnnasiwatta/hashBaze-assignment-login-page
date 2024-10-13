const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// User registration
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

        const { password, ...userData } = newUser.toJSON();

        if (newUser) {
            res.status(201).json({ userData })
        }
    }

}

// User login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        res.status(404).json({ message: "User with the provided email does not exist!" })
    }

    if (!await bcrypt.compare(password, user.password)) {
        res.status(400).json({ message: "Invalid password. Please try again!" })
    }

    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 //1 day
    })

    res.send({
        message: "Success"
    });
}

module.exports = {
    registerUser,
    loginUser
}