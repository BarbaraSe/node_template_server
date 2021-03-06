import express from "express";
import {
  register,
  login,
  currentUser,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
} from "../controllers/auth";
import { protect } from "../middlewares/protect";

function getAuthRoutes() {
  const router = express.Router();

  router.post("/register", register);
  router.post("/login", login);
  router.get("/current-user", protect, currentUser);
  router.put("/updatedetails", protect, updateDetails);
  router.put("/updatepassword", protect, updatePassword);
  router.post("/forgotpassword", forgotPassword);
  router.put("/resetpassword/:resettoken", resetPassword);

  return router;
}

export { getAuthRoutes };
