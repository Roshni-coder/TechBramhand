import express from "express";
import { submitProject } from "../controllers/project_controllers.js";

const router = express.Router();

router.post("/start-project", submitProject);

export default router;
