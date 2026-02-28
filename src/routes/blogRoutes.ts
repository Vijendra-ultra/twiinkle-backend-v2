import { Router } from "express";
import { sendHello } from "../controllers/blogController";

const router = Router();
router.get("/hello", sendHello);

export default router;
