import express from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";

// public route
router.post("/register", UserController.userRegisteration);
router.post("/login", UserController.userLogin);

export default router;
