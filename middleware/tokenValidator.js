import jwt from "jsonwebtoken";

const tokenValidator = async (req, res) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    res.status(403).json({ message: "No token" });
  } else {
    const token = authHeader.split(" ")[1];
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    } catch (err) {
      console.error(err);
    }
    if (!decodedToken) {
      res.status(200).json({ valid: false });
    } else {
      res.status(200).json({ valid: true });
    }
  }
};

export default tokenValidator;
