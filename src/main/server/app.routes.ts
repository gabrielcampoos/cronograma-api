import { Express } from "express";
import userRoutes from "../../app/features/user/user.routes";
import timeRoutes from "../../app/features/time/time.routes";
import disciplineRoutes from "../../app/features/discipline/discipline.routes";

export const makeRoutes = (app: Express) => {
  app.use(userRoutes(), timeRoutes(), disciplineRoutes());
};
