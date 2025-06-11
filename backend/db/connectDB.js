import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        
        const conn = await mongoose.connect("mongodb://localhost:27017/linkprosoft")
        console.log(`Mongodb connected ${conn.connection.host}`);
        
    } catch (error) {
        console.log("Error", error.message);
        process.exit(1)
    }
}