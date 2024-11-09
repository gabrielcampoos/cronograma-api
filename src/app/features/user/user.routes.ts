import { Router } from "express";
import { authMiddleware } from "../../shared/middlewares/auth.middleware";
import { UsersController } from "./controller/user.controller";

export default () => {
  const router = Router();

  router.post("/user", UsersController.createUser);
  router.post("/login", UsersController.loginUser);

  return router;
};
