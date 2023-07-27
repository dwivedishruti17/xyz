import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    const res = await mongoose.connect("mongodb+srv://dwivedi1704:dwivedi17@cluster0.ir6vihe.mongodb.net/?retryWrites=true&w=majority");
    if (res) {
      console.log("connected successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
