import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// This code connects to a MongoDB database using Mongoose.
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};


