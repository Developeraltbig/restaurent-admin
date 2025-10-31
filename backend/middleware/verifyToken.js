const jwt = require('jsonwebtoken');
const User = require('../model/User');

const verifyToken = async(req, res, next) => {
    let token;

    if(req.cookies && req.cookies.jwt){
        token = req.cookies.jwt;
    }

    if(!token) {
        return res.status(401).json({
            status:'fail',
            message:'You are not logged in. please log in to get access',
        })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const currentUser = await User.findById(decode.id).select('-password');

        if(!currentUser) {
            return res.status(401).json({
                status:'fail',
                message:'The User belonging to this token is no longer exists',

            });
        }
        req.user = currentUser;
        next();

    } catch(err){
        return res.status(401).json({
            status:'fail',
            message:"Invalid token or session has expired. Please log in again"
        })
    }
}


modify.exports = verifyToken