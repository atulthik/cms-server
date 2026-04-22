import mongoose from "mongoose";

const connectdb = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL || process.env.MONGO_url);
        console.log(`mongodb connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("DB error:", error.message);
        process.exit(1);
    }
};

export default connectdb;
