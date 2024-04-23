import express from "express";
import {
  createUrl,
  deleteUrl,
  getAllUrl,
  getUrlById,
} from "../controllers/shorturl";

const router = express.Router();

router.post("/shorturl", createUrl);
router.get("/shorturl", getAllUrl);
router.get("/shorturl/:id", getUrlById);
router.delete("/shorturl/:id", deleteUrl);

export default router;
