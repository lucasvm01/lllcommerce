import { DeleteResult } from "typeorm";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class DeleteOrderService{
    public async execute(id: number): Promise<DeleteResult>{
        const orderRepository = new OrderRepository();

        const order = await orderRepository.delete(id);

        return order;
    }
}