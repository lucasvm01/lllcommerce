import AppError from "../../../shared/errors/AppErrors";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class GetOrderService{
    public async execute(id: number): Promise<Order | undefined>{
        const orderRepository = new OrderRepository();

        const order = orderRepository.getOne(id);

        if(order === undefined) throw new AppError("Não há pedidos registrados com ID " + id);

        return order;
    }
}