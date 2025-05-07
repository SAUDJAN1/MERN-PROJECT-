import { User } from "../Models/user.model.js"; //import user from Models Folder
import bcryptjs from "bcryptjs"; // import bcrytps package for encryption
import jwt from "jsonwebtoken";
//Register Controller Logic
export const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body; //access fields from req.body

    // check if user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, msg: "User Already Exist" });
    }

    // encrypt the userPassword
    const passHashed = await bcryptjs.hash(password, 10);

    //  new UserAdded
    const userAdded = await User.create({
      username,
      email,
      password: passHashed,
    });

    // success Response
    return res
      .status(201)
      .json({ success: true, msg: "User Registered Successfully", userAdded });
  } catch (error) {
    console.error(`Error in Register Controller ${error.message}`);
    return res.status(500).json({ success: false, msg: "Server Error" });
  }
};

//Login Controller Logic
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body; // access from req.body
    const userExist = await User.findOne({ email }); // find user by email
    // if user not exist
    if (!userExist) {
      return res.status(404).json({ success: false, msg: "User Not Exist " });
    }

    //comparePassword
    const comparePassword = await bcryptjs.compare(
      password,
      userExist.password
    );

    //not comparePassword
    if (!comparePassword) {
      return res
        .status(401)
        .json({ success: false, msg: "Incorrect Password Sorry Try Again" });
    }

    // jsonwebtoken for authentication and authorization
    const payload = {
      id: userExist._id,
      username: userExist.username,
      email: userExist.email,
      isAdmin: userExist.isAdmin,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });

    return res
      .status(200)
      .json({ success: true, msg: "Login Successfully", token });
  } catch (error) {
    console.error(`Error in Login Controller ${error.message}`);
    return res.status(500).json({ success: false, msg: "Server Error" });
  }
};
