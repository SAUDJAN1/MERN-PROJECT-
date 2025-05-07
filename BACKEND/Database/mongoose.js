import mongoose from "mongoose";
import chalk from "chalk";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(
      chalk.bgGreen.whiteBright(`MongoDb Connected : ${conn.connection.host}`)
    );
  } catch (error) {
    console.log(chalk.bgRed.whiteBright(`Database Connection Failed ${error}`));
    process.exit(1);
  }
};
export default connectDB;
