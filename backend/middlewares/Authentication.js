const jwt = require("jsonwebtoken");

exports.protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "User is not authenticated.", success: false });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token", success: false });
    }
    console.log(decoded);

    req.id = decoded.userId;
    next();
  } catch (e) {
    console.log(e);
  }
};
