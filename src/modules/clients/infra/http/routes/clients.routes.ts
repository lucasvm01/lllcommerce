import { Router } from "express";
import ClientController from "../controllers/ClientsController";

const routes = Router();

routes.post("/", ClientController.create);

routes.delete("/:id", ClientController.delete);

routes.get("/", ClientController.list);

routes.get("/:id", ClientController.get);

routes.put("/:id", ClientController.update);

export default routes;