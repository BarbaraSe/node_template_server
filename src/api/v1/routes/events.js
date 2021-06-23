import express from "express";
import { protect } from "../middlewares/protect";

function getEventRoutes() {
  const router = express.Router();

  router.get("/", (req, res, next) => {
    res.send("events");
  });

  return router;
}

export { getEventRoutes };
