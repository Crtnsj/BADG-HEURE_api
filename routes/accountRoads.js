import { Router } from "express";
import {
  change,
  remove,
  view,
  viewAll,
} from "../controllers/account-controllers.mjs";

const router = Router();

router.get("/view", view);
router.patch("/change/:id", change);
router.delete("/remove/:id", remove);
router.get("/viewAll", viewAll);

export default router;
