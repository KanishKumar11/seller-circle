import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URL}`);

    const response = conn.connection.host;

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
