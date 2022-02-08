import { Request, Response } from "express";
import CreateOrderService from "../../../services/CreateOrderService";
import DeleteOrderService from "../../../services/DeleteOrderService";
import GetOrdersByClienteIdService from "../../../services/GetOrdersByClienteIdService";
import GetOrderService from "../../../services/GetOrderService";
import GetOrdersService from "../../../services/GetOrdersService";

class OrdersController{
    async create(request: Request, response: Response){
        const data = request.body;

        const createOrderService = new CreateOrderService();

        const order = await createOrderService.execute(data);

        return response.json(order);
        
    }

    async get(request: Request, response: Response){
        const { id } = request.params;
        const num = parseInt(id);

        const getOrderService = new GetOrderService();

        const order = await getOrderService.execute(num);

        return response.json(order);
    }

    async list(request: Request, response: Response){
        const getOrdersService = new GetOrdersService();

        const orders = await getOrdersService.execute();

        return response.json(orders);
    }

    async listByClientId(request: Request, response: Response){
        const { id } = request.params;
        const num = parseInt(id);

        const getOrdersByClienteIdService = new GetOrdersByClienteIdService();
        
        const orders = await getOrdersByClienteIdService.execute(num);

        return response.json(orders);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const num = parseInt(id);

        const deleteOrderService = new DeleteOrderService();

        const order = await deleteOrderService.execute(num);

        return response.json(order);
    }
}

export default new OrdersController();