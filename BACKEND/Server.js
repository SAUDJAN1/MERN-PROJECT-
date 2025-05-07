import express from "express"; //import express
import dotenv from "dotenv"; //import dotenv
import cors from "cors"; // import cors for cross origin
import router from "./Routes/user.routes.js"; //import router from  Routes Folder
import connectDB from "./Database/mongoose.js"; // import connectDB from Database Folder
import chalk from "chalk"; //import chalk package as a devDependency for better debugging
import { errorMiddleWare } from "./Middlewares/errorMiddleware.js";
dotenv.config({ path: ".env" }); //configure dotenv file
const app = express(); // assign the express functionality to app variable
const Port = process.env.PORT || 4040; // get PORT from .env file

//Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/auth", router);
app.use(errorMiddleWare);
connectDB().then(() => {
  app.listen(Port, () => {
    console.log(
      chalk.bgGreen.whiteBright(`Server is Running at Port :${Port}`)
    );
  });
});
