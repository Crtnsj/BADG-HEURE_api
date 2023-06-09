import { Router } from "express";
import { signIn, signUp } from "../controllers/auth-controllers.mjs";
import { remove } from "../controllers/account-controllers.mjs";

const router = Router();

router.get("/signIn", signIn);
router.post("/signUp", signUp);

export default router;
