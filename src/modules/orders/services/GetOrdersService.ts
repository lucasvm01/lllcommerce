import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class GetOrdersService{
    public async execute(): Promise<Order[]>{
        const orderRepository = new OrderRepository();

        const orders = orderRepository.getAll();

        return orders;
    }
}