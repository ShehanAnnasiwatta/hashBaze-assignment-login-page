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
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User with the provided email does not exist!" })
        }

        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({ message: "Invalid password. Please try again!" })
        }

        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 //1 day
        })
        res.status(200).json(user);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}

// Get the current user
const getUser = async (req, res) => {
    try {
        const token = req.cookies['jwt'];

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.SECRET_KEY);
        } catch (err) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }

        if (!decoded) {
            res.status(404).json({ message: "Unauthorized" });
        }

        const user = await User.findOne({ _id: decoded._id });

        // const { username, ...userInfo } = user.toJSON()

        res.send(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}


module.exports = {
    registerUser,
    loginUser,
    getUser
}