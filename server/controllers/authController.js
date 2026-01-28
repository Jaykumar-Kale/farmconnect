export const signup = async (req, res) => {
  const { name, email, phone, password, role } = req.body;

  if (!name || !email || !phone || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // 🔐 BLOCK ADMIN SIGNUP
  if (role === "admin") {
    return res.status(403).json({ message: "Admin signup not allowed" });
  }

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    phone,
    password: hashed,
    role,
    approved: role === "vendor" ? false : true,
  });

  res.json({ message: "Signup successful" });
};
