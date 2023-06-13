import { Router } from "express";
import {
  changeCompany,
  viewCompany,
} from "../controllers/company-controller.mjs";

const router = Router();

router.get("/viewCompany", viewCompany);
router.post("/changeCompany", changeCompany);

export default router;
