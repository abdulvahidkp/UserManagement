const users = require('../../model/user.model')
const bcrypt = require('bcrypt')

module.exports = {
    createUser: async (req, res) => {
        if (!req.body.name || !req.body.email || !req.body.mobile || !req.body.place || !req.body.password) return;
        req.body.password = await bcrypt.hash(req.body.password, 10)
        try {
            let user = await users.create(req.body)
            console.log(user)
        } catch (error) {
            console.log(error.code)
            if (error.code === 11000) {
                return res.status(400).json({ message: "error occured", error: 'email already registered' });
            }
            return res.status(400).json({ message: "error occured", error: error.message });
        }
    }
}