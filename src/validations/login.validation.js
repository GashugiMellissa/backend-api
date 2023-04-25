import Joi from "joi";

const validateForm = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(12).required(),
});

const validateLogin = validateForm(userLoginSchema);

const loginValidation = (req, res, next) => {
  try {
    const { error } = validateLogin(req.body);
    if (error) {
      return res
        .status(400)
        .json({
          status: 400,
          message: error.details.map((detail) =>
            detail.message.replace(/[^a-zA-Z0-9 ]/g, "")
          ),
        });
    }
    next()
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "internal server error" });
  }
};

export default loginValidation
