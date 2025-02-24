import User from "../models/User.js";

export async function register(req, res) {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    throw new BadRequestError("Please Provide all values");
  }

  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists) {
    throw new BadRequestError("Email already exists");
  }

  const user = await User.create({ email, password, username });
  res.status(201).json({ message: "Register sucessfully" });
}

export async function login(req, res) {
  res.status(201).json({ message: "Login sucessfully" });
}
