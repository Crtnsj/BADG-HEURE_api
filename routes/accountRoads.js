import { Router } from "express";
import {
  change,
  viewByID,
  remove,
  view,
  viewAll,
} from "../controllers/account-controllers.mjs";

const router = Router();

router.get("/view", view);
router.get("/view/:id", viewByID);
router.patch("/change/:id", change);
router.delete("/remove/:id", remove);
router.get("/viewAll", viewAll);

export default router;
