import { Express } from "express";
import {
  createSessionHandler,
  deleteSessionHandler,
  getSessionHandler,
} from "./controllers/session.controllers";
import { requireUser } from "./middleware/requireUser";

function routes(app: Express) {
  //1. login
  app.post("/api/session/create", createSessionHandler);

  //2. get the current session
  app.get("/api/session/get", requireUser, getSessionHandler);

  //3. logout
  app.delete("/api/session/delete", requireUser, deleteSessionHandler);
}

export default routes;
