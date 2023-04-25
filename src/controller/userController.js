import UserService from "../service/userService"



class UserController{
    static async signUp(req,res){
        try {
            const response= await UserService.createUser(req.body)
            return res.status(201).json({status:201, response})
        } catch (error) {
            return res.status(500).json({status:500, message:"internal server error"})
        }
    }
    static async login(req,res){
        try {
            const response= await UserService.loginUser(req)
            return res.status(200).json({status:200, response})
        } catch (error) {
            return res.status(500).json({status:500, message:"internal server error"})
        }
    }

    static async AllUsers(req,res){
        try {
            const response= await UserService.getALlSignedInUSers();
            return res.status(200).json({status:200, response})
        } catch (error) {
            return res.status(500).json({status:500, message:"internal server error"})
        }
    }
}

export default UserController