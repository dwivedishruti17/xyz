import mongoose from "mongoose";

const userShema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  RegNo: {
    type: Number,
  },
  Section: {
    type: String,
  },

});

const userModel = mongoose.model("users", userShema);
export default userModel;
