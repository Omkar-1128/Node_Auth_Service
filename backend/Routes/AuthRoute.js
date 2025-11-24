import { Signup , Login } from "../Controller/AuthController.js";
import { userVerification } from "../Middleware/AuthMiddleware.js";
import express from "express";
const router = express.Router();

router.post('/',userVerification)
router.post("/signup", Signup);
router.post("/login" , Login)

export { router };