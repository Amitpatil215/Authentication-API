const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const { registerValidation } = require("../validators/validation");

router.post("/register", async (req, res) => {
  // Lets Validate User before saving to DB
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error?.details[0]?.message);

  // Check if user is alredy in database
  const isEmailExist = await User.findOne({ email: req.body.email });
  if (isEmailExist) return res.status(400).send("Email Alredy Exists");

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create New user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  // Save new user to the database
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
