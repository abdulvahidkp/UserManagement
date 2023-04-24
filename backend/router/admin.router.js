const router = require('express').Router();

router.get('/api/user',async(req,res)=> {
    res.send('router is working')
})

module.exports = router;