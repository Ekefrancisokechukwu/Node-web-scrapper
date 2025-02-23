import http from "http";
import app from "./app.js";

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    server.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
}

startServer();
