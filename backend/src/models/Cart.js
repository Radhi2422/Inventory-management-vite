const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:true
    },

    description:{
        type:String,
        unique:true,
        required:true
    },
  },
{
    timestamps:true,
    collection: "CartDetails"
}
);

// // Index on email
// cartSchema.index({ userID: 1 });
// const User = mongoose.model("User", userSchema);
// console.log(User.collection.name);
module.exports = mongoose.model("Cart", cartSchema);