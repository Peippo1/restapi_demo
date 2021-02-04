const bcrypt =require('bcryptjs')

// exports as below but this is a function (ES5)
exports.hashPassword = async (req, res, next) => {
    if ('password' in req.body) {
        // reassigning 
        req.body.password = await bcrypt.hash(req.body.password, 8)
    }
    next();
}