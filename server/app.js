import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projectrotes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/projects", projectRoutes);

export default app;
