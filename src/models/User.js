import { model, Schema } from "mongoose";
import validator from "validator";
import bycrypt from "bcryptjs";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide email"],
      unique: true,
      validate: {
        validator: (email) => validator.isEmail(email),
        message: "Please provide valid email",
      },
    },
    username: {
      type: String,
      required: [true, "Please provide username"],
      minlength: 3,
      maxlength: 30,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      minlength: 6,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bycrypt.genSalt(12);
  this.password = await bycrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bycrypt.compare(candidatePassword, this.password);
  return isMatch;
};
const User = model("User", userSchema);

export default User;
