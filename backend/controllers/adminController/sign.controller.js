const admins = require('../../model/admin.model');
const users = require('../../model/user.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    signAdmin: async (req, res) => {
        if (!req.body.name || !req.body.password) return res.status(400).json({ message: 'name, password - fileds is required' })
        try {
            const user = await admins.findOne({ name: req.body.name });
            if (!user) return res.status(401).json({ success:false, message: 'incorrect mobile number or password' }) //unauthorized
            bcrypt.compare(req.body.password, user.password).then(response => {
                if (response) {
                    const accessToken = jwt.sign({ _id: user._id, }, process.env.JWT_SECRET);
                    res.status(200).json(accessToken);
                }
            }).catch(err=>console.log(err))
        } catch (error) {
            console.log(error.message)
            res.status(400).json({success:false, message:error.message});
        }
    },
    getAllUsers: async (req,res) => {
        try {
            const allUsers = await users.find();
            res.status(200).json(allUsers);
        } catch (error) {
            console.log(error.message)
            res.status(400).json({success:false, message:error.message});
        }
    },
    deleteUser: async (req,res) => {
        try {
            users.deleteOne({_id:req.params._id}).then(response=>{
                res.status(200).json({success:true})
            })
        } catch (error) {
            console.log(error.message)
            res.status(400).json({success:false, message:error.message});
        }
    }
}