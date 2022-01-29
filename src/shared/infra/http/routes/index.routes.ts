import { Router } from "express";
import categoriesRoutes from "../../../../modules/categories/infra/http/routes/categories.routes";
import clientsRoutes from "../../../../modules/clients/infra/http/routes/clients.routes";

const routes = Router();

routes.use("/clientes", clientsRoutes);

routes.use("/categorias", categoriesRoutes);

export default routes;