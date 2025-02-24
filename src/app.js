import express from "express";
import { config } from "dotenv";
import morgan from "morgan";

// Routes
import authRouter from "./routes/authRoute.js";

// Load environment variables
config();
const app = express();

app.use(morgan("dev"));

// API ROUTES
app.use("/api/v1/auth", authRouter);

export default app;
