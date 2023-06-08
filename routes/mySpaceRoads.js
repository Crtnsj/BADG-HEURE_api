import { Router } from "express";
import { change, view } from "../controllers/mySpace-controllers.mjs";

const router = Router();

router.get("/view", view);
router.post("/change", change);

export default router;
