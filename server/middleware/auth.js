const jwt = require('jsonwebtoken')

const verifyUser = async (req, res, next) => {
    const token = req.cookies['jwt'];

    if (!token) {
        res.status(404).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
}

module.exports = verifyUser