import { Request, Response } from "express";
import AppError from "../../../../../shared/errors/AppErrors";
import DeleteOrderService from "../../../services/DeleteOrderService";
import GetOrdersByClienteIdService from "../../../services/GetOrdersByClienteIdService";
import GetOrderService from "../../../services/GetOrderService";
import GetOrdersService from "../../../services/GetOrdersService";

class OrdersController{
    async create(request: Request, response: Response){
        const data = request.body;

        if(data.clienteId <= 0 || ){

        }
    }

    async get(request: Request, response: Response){
        const { id } = request.params;
        const num = parseInt(id);

        const getOrderService = new GetOrderService();

        const order = getOrderService.execute(num);

        return response.json(order);
    }

    async list(request: Request, response: Response){
        const getOrdersService = new GetOrdersService();

        const orders = getOrdersService.execute();

        return response.json(orders);
    }

    async listByClientId(request: Request, response: Response){
        const { id } = request.params;
        const num = parseInt(id);

        const getOrdersByClienteIdService = new GetOrdersByClienteIdService();
        
        const orders = getOrdersByClienteIdService.execute(num);

        if(orders === undefined){
            return response.json("Não há pedidos para este cliente.");
        }

        return response.json(orders);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const num = parseInt(id);

        const deleteOrderService = new DeleteOrderService();

        const order = deleteOrderService.execute(num);

        return response.json(order);
    }
}

export default new OrdersController();