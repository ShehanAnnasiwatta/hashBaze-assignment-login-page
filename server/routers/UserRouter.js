const router = require('express').Router();
const { registerUser, loginUser, getUser} = require('../controllers/UserController');
// const verifyUser = require('../middleware/auth');

router.post('/register', registerUser).post('/login', loginUser).get('/user', getUser)

module.exports = router