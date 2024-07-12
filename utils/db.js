const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "stocks"
    });

    console.log("db connection successful")
  } catch (err) {
    console.log("db connection failed: ", err);
  }
}

module.exports = {
  connectDb,
}