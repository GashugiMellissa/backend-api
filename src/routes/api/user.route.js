import express from "express";
import UserController from "../../controller/userController.js";
import alreadyExist from "../../middleware/alreadyExist.js";
import extractToken from "../../middleware/extractToken.js";
import isValid from "../../middleware/isPasswordCorrect.js";
import userExist from "../../middleware/userExist.js";
import loginValidation from "../../validations/login.validation";
import signUpValidation from "../../validations/signup.validation";

const router = express.Router();

router.post("/signup", signUpValidation, alreadyExist, UserController.signUp);
router.post(
  "/login",
  loginValidation,
  userExist,
  isValid,
  UserController.login
);
router.get("/",extractToken, UserController.AllUsers)

export default router;
