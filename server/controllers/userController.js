const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRETKEY = process.env.SECRETKEY;

const CreateUser = async (req, res) => {
  const { email, name, password, role, phone } = req.body;
  const user0 = await User.find({ $or: [{ email: { $eq: email } }] });
  if (user0.length == 0) {
    const hashPassword = await bcrypt.hash(password, 5);
    const user = new User({
      firstName: name,
      email: email,
      password: hashPassword,
      role: role,
      phone: phone,
    });
    console.log(user);
    const addUser = await user.save();
    console.log(addUser);
    const token = jwt.sign(
      { id: addUser._id, username: addUser.firstName, role: addUser.role },
      SECRETKEY,
      { expiresIn: "1h" }
    );
    res.json({ token, addUser });
  } else {
    res.json({ error: "User Already Exist" });
  }
};

const getOneUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ _id: id });
  res.json(user);
};

const UserLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.find({ email: email });
  console.log(user);
  if (user.length != 0) {
    // password check
    const validpassword = await bcrypt.compare(password, user[0].password);
    console.log(validpassword);
    console.log("entered", password);
    if (!validpassword) {
      return res.status(401).send({ error: "Incorrect Password" });
    }
    if (validpassword) {
      const token = jwt.sign(
        {
          id: user[0]._id,
          username: user[0].firstName,
          role: user[0].role,
          email: email,
        },
        SECRETKEY,
        { expiresIn: "12h" }
      );
      console.log(token)
      const user0 = user[0];
      return res.json({ token, user0 });
    }
  } else {
    console.log('not found')
    return res.status(404).send({ error: "email not found" });
  }
};

// Protected route
const protected = async (req, res) => {
  const token = req.headers.authorization.trim();
  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }

  jwt.verify(token, SECRETKEY, (err, decoded) => {
    if (err) {
      console.log("token error:", err);
      return res.status(403).json({ message: "Failed to authenticate token." });
    }
    console.log("token Authenticated");
    res.json({ message: "Authenticated", user: decoded });
  });
};

module.exports = {
  CreateUser,
  getOneUser,
  protected,
  UserLogin,
};
