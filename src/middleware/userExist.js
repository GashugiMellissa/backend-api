import User from "../models/user";

const userExist = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ status: 400, message: "invalid email or password" });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "internal server error" });
  }
};

export default userExist;
