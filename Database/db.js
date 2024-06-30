import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()
const Connection = async () => {
    const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-qo9qpbg-shard-00-00.xqpknrv.mongodb.net:27017,ac-qo9qpbg-shard-00-01.xqpknrv.mongodb.net:27017,ac-qo9qpbg-shard-00-02.xqpknrv.mongodb.net:27017/?ssl=true&replicaSet=atlas-pg6n51-shard-0&authSource=admin&retryWrites=true&w=majority&appName=email-clone`;
    try {
        await mongoose.connect(DB_URI);
        console.log("Database connected successfully");
    } catch (err) {
        console.log(err.message);
    }
}; 

export default Connection;
