import User from "../models/user";
import BcryptUtil from "../utils/bcrypt.utils";
import jwt from "jsonwebtoken";
import "dotenv/config";

class UserService {
  static async createUser(req) {
    const { name, email, password } = req;
    const hashedPassword = BcryptUtil.hash(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
      isLoggedIn: false,
    });
    return user;
  }

  static async loginUser(req) {
    const { user } = req;
    const loggedInUser = await User.updateOne(
      { name: user.name },
      { $set: { isLoggedIn: true } }
    );
    const token = jwt.sign(
      { name: user.name, email: user.email, role: user.role },
      process.env.TOKEN_SECRET
    );
    const userObj = {
      name: user.name,
      role: user.role,
      token,
    };
    return userObj;
  }

  static async getALlSignedInUSers() {
    const AllLoggedUser = await User.find({
      $and: [{ role: "user", isLoggedIn: true }],
    });

    return AllLoggedUser
  }
}

export default UserService;
