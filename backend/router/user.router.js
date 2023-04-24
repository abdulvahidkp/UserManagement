const router = require('express').Router();
const signController = require('../controllers/userController/sign.controllers')
const profileController = require('../controllers/userController/profile.controller')
const verifyToken = require('../middleware/user.verifyToken')

router.post('/signup', signController.createUser)
router.post('/signin', signController.signUser)

router.get('/user', verifyToken, profileController.getUserDetails)
router.post('/user', verifyToken, profileController.updateUserDetails)

module.exports = router;