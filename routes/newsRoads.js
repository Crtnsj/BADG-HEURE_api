import { Router } from "express";
import { addNews, viewNews } from "../controllers/news-controllers.mjs";

const router = Router();

router.get("/viewNews", viewNews);
router.post("/addNews", addNews);

export default router;
