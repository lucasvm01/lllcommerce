import { Router } from "express";
import ClientController from "../controllers/ClientsController";

const routes = Router();

routes.post("/", ClientController.create);

export default routes;