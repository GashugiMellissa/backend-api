import JwtUtil from "../utils/tokenUtil"
import'dotenv/config'

const extractToken= async (req,res,next)=>{
try {
    if(!req.header('Authorization')) return res.status(401).json({status:401,message:'please sign in'})

    const token = req.header('Authorization').split(' ')[1]
    const user= JwtUtil.verify(token)
    if(user.role !== "admin") return res.status(401).json({status:401, message:"you are unauthorized"})
    next()
} catch (error) {
    console.log(error)
    return res.status(500).json({status:500, message:"internal server error"})
}
}

export default extractToken