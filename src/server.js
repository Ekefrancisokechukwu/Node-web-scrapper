import http from "http";
import app from "./app.js";
import connectDB from "./config/db.js";

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB(process.env.MONGO_URI);
    server.listen(PORT, () =>
      console.log(`
        MongoDB connected successfully
        ========
        Server running on port:http://localhost:${PORT}
        ========
        `)
    );
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

startServer();
