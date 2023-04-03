const jwt= require("jsonwebtoken")
require("dotenv").config()

const authenticator=async(req,res,next)=>{
    try {
        let token = req?.headers?.authorization
        if(!token){
            return res.status(401).json({msg:"Not Authorized"})

        }
        token= req.headers.authorization.split(" ")[1]

        const isTokenValid=await jwt.verify(token,process.env.JWT_SECRET_KEY)

        if(!isTokenValid){
            return res.status(401).json({message:"Not Authorized"})
        }
        req.body.userId=isTokenValid.userId
        next()

        
    } catch (error) {
        console.log(error)
        return res.status(401).json({message:"SOmething Wrong"})
    }
}
module.exports={authenticator}