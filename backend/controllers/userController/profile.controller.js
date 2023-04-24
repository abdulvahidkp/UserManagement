const users = require('../../model/user.model')

module.exports = {
    getUserDetails: async (req, res) => {
        try {
            const user = await users.findOne({ _id: req._id }, { password: 0 })
            res.status(200).json(user);
        } catch (error) {
            console.log(error.message)
            res.status(400).json({ messaage: "error occured", error: error.message });
        }
    },
    updateUserDetails: async (req, res) => {
        try {
            const user = await users.findByIdAndUpdate({_id:req._id},req.body,{new:true})
            console.log(user)
            res.status(200).json(user);
        } catch (error) {
            console.log(error.message)
            res.status(400).json({ messaage: "error occured", error: error.message });
        }
    }
}