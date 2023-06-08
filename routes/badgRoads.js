import { Router } from "express";
import { badgIn } from "../controllers/badg-controllers.mjs";

const router = Router();

router.post("/badgIn", badgIn);

export default router;
