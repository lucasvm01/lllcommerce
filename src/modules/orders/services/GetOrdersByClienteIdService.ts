import AppError from "../../../shared/errors/AppErrors";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class GetOrdersByClienteIdService{
    public async execute(clientId: number): Promise<Order[] | undefined>{
        const orderRepository = new OrderRepository();

        const orders = orderRepository.getAllByClientId(clientId);

        if(orders === undefined){
            throw new AppError("Não há pedidos para este cliente.");
        }

        return orders;
    }
}