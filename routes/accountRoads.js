import { Router } from "express";
import { change, remove, view } from "../controllers/account-controllers.mjs";

const router = Router();

router.get("/view/:id", view);
router.patch("/change/:id", change);
router.delete("/remove/:id", remove);

export default router;
