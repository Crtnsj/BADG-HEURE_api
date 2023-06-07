import { Router } from "express";
import { SignIn, SignUp } from "../controllers/auth-controllers.mjs";

const router = Router();

router.post("/SignIn", SignIn);
router.post("/SignUp", SignUp);

export default router;
