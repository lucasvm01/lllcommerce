import { Router } from "express";import OrdersController from "../controllers/OrdersController";

const routes = Router();

routes.post("/", OrdersController.create);

routes.get("/", OrdersController.get);

routes.get("/:id", OrdersController.list);

routes.get("/:id/sex", OrdersController.listByClientId);

routes.delete("/:id", OrdersController.delete);

export default routes;