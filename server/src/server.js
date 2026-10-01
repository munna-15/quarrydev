import "./config/env.js";
import dns from "dns";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

import contactRoutes from "./routes/contact.routes.js";
import connectDB from "./config/db.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many inquiries. Please try again later.",
  },
});

app.use("/api/contact", contactLimiter, contactRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Quarry backend is running",
  });
});

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Quarry backend running on port ${PORT}`);
  });
};

startServer();
