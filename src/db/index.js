import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB;


// async/await: The function is marked as async, meaning it can handle asynchronous operations. The await keyword is used to pause the function until the database connection is successful.

// try/catch:

// try: The code inside the try block attempts to connect to the MongoDB database using mongoose.connect(). If successful, it logs a message with the host name of the connected database.
// catch: If the connection fails, the catch block handles the error by logging an error message and then exiting the application with an error status (process.exit(1)).