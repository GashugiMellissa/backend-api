import expres from "express"
import User from "./api/user.route"

const Router= expres.Router()

Router.use("/user", User)

export default Router  