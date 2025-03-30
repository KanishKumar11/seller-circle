import mongoose from "mongoose";
console.log(process.env.MONGODB_URL, "my url");
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log(conn, "conn DB conn");

    const response = conn.connection.host;
    console.log(response, "response DB response")
    console.log(`Connected to MongoDB: ${response}`);
  } catch (err) {
    console.log("error in connecting")
    console.error(err);
    process.exit(1);
  }
};
