import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class GetOrdersByClienteIdService{
    public async execute(clientId: number): Promise<Order[] | undefined>{
        const orderRepository = new OrderRepository();

        const orders = orderRepository.getAllByClientId(clientId);

        return orders;
    }
}