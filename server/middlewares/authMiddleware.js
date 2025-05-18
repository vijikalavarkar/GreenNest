const jwt = require('jsonwebtoken');
const User = require('../models/auth-user')

const authMiddleware = async (req, res, next) => {
    try {
        
        const token = req.header('Authorization');

        if(!token || !token.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized: No Token Provided' })
        }

        const jwtToken = token.replace('Bearer ', '').trim();
    
        if(!jwtToken){
            return res.status(401).json({ message: 'Unauthorized' })
        }

        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);

        
        if(!isVerified || !isVerified.email){
            return res.status(401).json({ message: 'Unauthorized' })
        }

        const userData = await User.findOne({ email: isVerified.email });

        if(!userData) {
            return res.status(401).json({ message: 'Unauthorized' })
        }

        req.user = userData;
        req.token = token;
        req.userId = userData._id;

        

        next();
    } catch (error) {
        console.log(error);
    }
}
module.exports = authMiddleware;