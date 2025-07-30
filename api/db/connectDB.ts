import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

export const connectDB = async () => {
    try {

        const conn = await mongoose.connect(uri!);
        console.log(`MongoDB connected: ${conn.connection.host}`);

    }catch (error) {
        console.error("Database connection failed:", error);
        throw error;
    }
}

export default connectDB;