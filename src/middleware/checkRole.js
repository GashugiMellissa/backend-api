import JwtUtil from "../utils/tokenUtil"

const CheckRole= async(req,res,next)=>{
    try {
       const {authorization}= req.headers
       const token = authorization.split(" ")[1]
       const user= JwtUtil.verify(token)
       if(user.data.role !== "admin"){
           return  res.status(401).json({status:401, message:"you are not an admin"})
        }
        req.user= user.data
        next()
    } catch (error) {
       return res.status(500).json({status:500, message:"internal server error"}) 
    }
}

export default CheckRole