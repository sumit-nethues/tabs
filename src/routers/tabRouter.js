import express from "express";

import { GetAllTabs } from "../controllers/tabController.js";

const router = express.Router();

router.get("/get-all-tabs", GetAllTabs);

export default router;
