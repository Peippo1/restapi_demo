const bcrypt =require('bcryptjs');
const jwt = require ('jsonwebtoken');
const { User } = require ("../models/User")

// exports as below but this is a function (ES5)
exports.hashPassword = async (req, res, next) => {
    if ('password' in req.body) {
        // reassigning 
        req.body.password = await bcrypt.hash(req.body.password, 8)
    }
    next();
}
// authourisation middleware function for token
exports.auth = (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.SECRET)
        // console.log(token);
        const user = User.findOne({ _id: decoded._id, "tokens.token": token});
        if(!user){
            throw new Error()
        }

        req.user = user
        req.token = token
        next();
    } catch (error) {
        res.status(401).send({message: "Please Login"})
        // console.log(error);
    }
    
};
