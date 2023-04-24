const signController = require('../controllers/adminController/sign.controller');

const router = require('express').Router();

router.get('/api/user',async(req,res)=> {
    res.send('router is working')
})

router.post('/signin',signController.signAdmin)
router.get('/users',signController.getAllUsers)
router.delete('/users/:_id',signController.deleteUser)

module.exports = router;