import { Router } from "express";
import ProductsControllers from "../controllers/ProductsControllers";

const routes = Router();

routes.post("/", ProductsControllers.create);

routes.get("/", ProductsControllers.list);

routes.get("/:id", ProductsControllers.get);

routes.get("/:id/qtd", ProductsControllers.getQtd);

routes.put("/:id", ProductsControllers.update);

routes.delete("/:id", ProductsControllers.delete);

export default routes;