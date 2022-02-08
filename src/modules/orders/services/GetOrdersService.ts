import AppError from "../../../shared/errors/AppErrors";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class GetOrdersService{
    public async execute(): Promise<Order[]>{
        const orderRepository = new OrderRepository();
        console.log("aaaaaaaaaaa");

        const orders = await orderRepository.getAll();
        if(orders.length <= 0 || orders === undefined) 
            throw new AppError("Não há pedidos cadastrados.");

        console.log("bbbbbbbbb");
        return orders;
    }
}