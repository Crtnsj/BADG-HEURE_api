import { Router } from "express";
import {
  badgIn,
  getViewBadg,
  getBadgByID,
} from "../controllers/badg-controllers.mjs";

const router = Router();

router.post("/badgIn", badgIn);
router.get("/viewBadg", getViewBadg);
router.get("/getBadgByID/:id", getBadgByID);

export default router;
