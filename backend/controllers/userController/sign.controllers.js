const users = require('../../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    createUser: async (req, res) => {
        if (!req.body.name || !req.body.email || !req.body.mobile || !req.body.place || !req.body.password) return res.status(400).json({ message: 'name, email, mobile, place, password - fileds is required' })
        req.body.password = await bcrypt.hash(req.body.password, 10)
        try {
            let user = await users.create(req.body);
            res.status(200).json({ success: true });
        } catch (error) {
            console.log(error.message)
            if (error.code === 11000) {
                return res.status(400).json({ message: "error occured", error: 'email already registered' });
            }
            res.status(400).json({ success: false, error: error.message });
        }
    },
    signUser: async (req, res) => {
        if (!req.body.email || !req.body.password) return res.status(400).json({ message: 'email, password - fileds is required' })
        try {
            const user = await users.findOne({ email: req.body.email });
            if (!user) return res.status(401).json({ success:false, message: 'incorrect mobile number or password' }) //unauthorized
            bcrypt.compare(req.body.password, user.password).then(response => {
                if (response) {
                    const accessToken = jwt.sign({ _id: user._id, }, process.env.JWT_SECRET);
                    res.status(200).json(accessToken);
                }
            }).catch(err=>console.log(err))
        } catch (error) {
            console.log(error.message)
            res.status(400).json({success:false, message:error.messaage});
        }

    }
}