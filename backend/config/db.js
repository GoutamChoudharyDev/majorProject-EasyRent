const mongoose = require("mongoose");

// Create a async arrow function for connect the DB
const connectDb = async () => {
    try {
        // await mongoose.connect(process.env.MONGODB_URL)
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected.....")
    } catch (error) {
        console.log("db connection error...")
    }
}

module.exports = connectDb;