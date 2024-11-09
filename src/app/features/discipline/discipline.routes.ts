import { Router } from "express";
import { authMiddleware } from "../../shared/middlewares/auth.middleware";
import { DisciplineController } from "./controller";

export default () => {
  const router = Router();

  router.post("/discipline", DisciplineController.createDiscipline);

  router.get("/discipline", DisciplineController.listDiscipline);

  router.put(
    "/discipline/:id",
    authMiddleware,
    DisciplineController.editDiscipline
  );

  router.delete(
    "/discipline/:id",
    authMiddleware,
    DisciplineController.deleteDiscipline
  );

  return router;
};
