const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    cityname: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const User = mongoose.model("user", enquirySchema);
module.exports = User;
