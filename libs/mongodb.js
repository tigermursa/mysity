const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("successfully connected to MongoDB");
  } catch (error) {
    console.error("error connecting to mongoDB", error);
    process.exit(1);
  }
};

export default connectMongoDB;
