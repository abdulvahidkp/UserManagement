const router = require('express').Router();
const signController = require('../controllers/userController/sign.controllers')

router.post('/signup',signController.createUser)

module.exports = router;