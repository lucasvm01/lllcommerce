import { Request, Response } from "express";
import AppError from "../../../../../shared/errors/AppErrors";
import ClientRepository from "../../../../clients/infra/typeorm/repositories/ClientRepository";
import ProductRepository from "../../../../products/infra/typeorm/repositories/ProductRepository";
import DeleteOrderService from "../../../services/DeleteOrderService";
import GetOrdersByClienteIdService from "../../../services/GetOrdersByClienteIdService";
import GetOrderService from "../../../services/GetOrderService";
import GetOrdersService from "../../../services/GetOrdersService";
import OrderProduct from "../../typeorm/entities/OrderProduct";

class OrdersController{
    async create(request: Request, response: Response){
        const data = request.body;

        const produtos = data.pedido_produto;

        const productRepository = new ProductRepository();

        produtos.forEach(async (p: OrderProduct)  => {
            if(p.quantidade <= 0) throw new AppError("Deve-se informar uma quantidade para os produtos.");
            
            const produto = await productRepository.getOne(p.produtoId);

            if(produto === undefined) throw new AppError("O produto com ID " + p.produtoId + " não existe.");

            if(produto.quantidade < p.quantidade) throw new AppError("Não há estoque do produto com ID " + p.produtoId);
        });

        const client = new ClientRepository();

        if(data.clienteId <= 0) throw new AppError("Deve-se informar um cliente para o pedido.");
        
        if(await client.getOne(parseInt(data.clienteId)) === undefined)
            throw new AppError("Não existe cliente com ID " + data.clienteId);

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