import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    const res = await mongoose.connect("mongodb+srv://shrutimun17:4BcvR7m9zL4e29k4@cluster0.a5k1jf0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    if (res) {
      console.log("connected successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
