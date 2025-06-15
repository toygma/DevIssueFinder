import { Router } from "express";
import { getIssues } from "../controllers/issue.controller";

const router = Router();

router.get("/issues", getIssues);

export default router;