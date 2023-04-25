import BcryptUtil from "../utils/bcrypt.utils";
import User from "../models/user";

const isValid =
async (req, res, next) => {
  try {
    const { password, email } = req.body;
    const user = await User.findOne( { email  });
    const validPassword = await BcryptUtil.compare(password, user.password);
    if(!validPassword) return res.status(400).json({status:400, message: "invalid email or password"})
    req.user= user
    next()
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ status: 500, message: "internal server error" });
  }
};

export default isValid
