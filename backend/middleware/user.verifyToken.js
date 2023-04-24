const jwt = require('jsonwebtoken');
const user = require('../model/user.model');

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader) return res.status(401).json({ message: 'No authentication token, access denied' });
        //else
        const verified = jwt.verify(authHeader, process.env.JWT_SECRET);
        const userExist = await user.findById(verified._id)
        if (!userExist) return res.status(401).json({ message: "Token verification failed, authorization denied" });
        req._id = verified._id;
        next();
    } catch (error) {
        console.log('error',error.message)
        return res.status(400).json({message:'error occured',error:error.message})
    }
}

module.exports = verifyToken;