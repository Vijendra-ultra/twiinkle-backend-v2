import { Router } from "express";
import { sendHello, writeEnv } from "../controllers/blogController";

const router = Router();
router.get("/hello", sendHello);
router.get("/printEnv", writeEnv);

export default router;
