import express from "express";
import messageController from "../controllers/message.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";


const router = express.Router();

router.post("/chat/:id" , authMiddleware , messageController.chat);
router.get("/getMessages/:id" , authMiddleware , messageController.getMessages);


export default router