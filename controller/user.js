
const User = require("../model/user");
exports.getUserById = (req,res,next,id) => {
    User.findById(id).exec((err,user)=>{
          if(err || !user) {

            return res.status(400).json({
                error:"NO USER IN DB"
            })

          }
          req.profile = user

          next();

          
    })
}