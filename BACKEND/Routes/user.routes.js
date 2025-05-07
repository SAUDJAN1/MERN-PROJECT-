import express from "express"; // import express
const router = express.Router(); // give all the functionality of express.Router() to router variable
import { Register, Login } from "../Controllers/user.controller.js"; //import Regsiter and Login from Controller Folder
import Validate from "../Middlewares/Validate.js";
import { registerValidator } from "../Validators/registerValidator.js";
import { loginValidator } from "../Validators/loginValidator.js";
router.route("/register").post(Validate(registerValidator), Register); //define route here and also method
router.route("/login").post(Validate(loginValidator), Login); //define route here and also method
export default router; // export router
