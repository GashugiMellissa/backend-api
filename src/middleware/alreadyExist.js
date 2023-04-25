import User from "../models/user";

const alreadyExist = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if(user){
        return res.status(409).json({status:409, message:"User already exist"})
    }
    next()
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "internal server error" });
  }
};

export default alreadyExist
