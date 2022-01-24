const mongoose = require("mongoose");

const KidSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    wrongAns: {
      type: Number,
    },
  },
  { timestamps:true }
);

const Kid = mongoose.model("kid", KidSchema);
module.exports = Kid;
