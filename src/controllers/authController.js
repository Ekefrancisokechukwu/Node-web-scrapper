export async function register(req, res) {
  res.status(201).json({ message: "Register sucessfully" });
}

export async function login(req, res) {
  res.status(201).json({ message: "Login sucessfully" });
}
