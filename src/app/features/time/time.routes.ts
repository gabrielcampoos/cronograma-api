import { Router } from "express";
import { authMiddleware } from "../../shared/middlewares/auth.middleware";
import { TimeController } from "./controller";

export default () => {
  const router = Router();

  router.post("/time", TimeController.createTime);

  router.get("/time", TimeController.listTimes);

  router.put("/time/:id", authMiddleware, TimeController.editTime);

  router.delete("/time/:id", authMiddleware, TimeController.deleteTime);

  return router;
};
