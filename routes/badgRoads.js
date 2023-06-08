import { Router } from "express";
import { badgIn, getViewBadg } from "../controllers/badg-controllers.mjs";

const router = Router();

router.post("/badgIn", badgIn);
router.get("/viewBadg", getViewBadg);

export default router;
