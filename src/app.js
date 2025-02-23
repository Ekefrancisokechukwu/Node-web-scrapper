import express from "express";
import { config } from "dotenv";
import morgan from "morgan";

// Load environment variables
config();

const app = express();

export default app;
