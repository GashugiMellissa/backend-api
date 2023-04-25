import Jwt from "jsonwebtoken";

class JwtUtil {
  static generate(data, options) {
    const token = Jwt.sign({ data }, process.env.TOKEN_SECRET, options);
    return token;
  }

  static generateExp(data, min) {
    const token = Jwt.sign({ data }, process.env.TOKEN_SECRET, {
      expiresIn: min,
    });
    return token;
  }

  static verify(token) {
    const obj = Jwt.verify(token, process.env.TOKEN_SECRET);
    return obj;
  }
}

export default JwtUtil;