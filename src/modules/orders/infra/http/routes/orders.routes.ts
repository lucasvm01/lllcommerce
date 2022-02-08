import { Router } from "express";
import OrdersController from "../controllers/OrdersController";

const routes = Router();

routes.post("/", OrdersController.create);

routes.get("/", OrdersController.list);

routes.get("/:id", OrdersController.get);

routes.get("/cliente/:id", OrdersController.listByClientId);

routes.delete("/:id", OrdersController.delete);

export default routes;