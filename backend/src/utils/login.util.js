const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } }); // ✅ correct

  if (!user) {
    res.status(404).json({
      success: false,
      message: "User not found",
    });
}

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch){
     res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  };

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  const { password: _, ...userData } = user.toJSON();

  return { user: userData, token };
};

module.exports = handleLogin;
