const router = require('express').Router()
const { registerUser } = require('../controllers/UserController')

router.post('/register', registerUser)


module.exports = router