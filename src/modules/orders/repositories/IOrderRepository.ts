import { DeleteResult } from "typeorm";
import IOrderDto from "../dtos/IOrderDto";
import Order from "../infra/typeorm/entities/Order";

export default interface IOrderRepository{
    create(data: IOrderDto): Promise<Order>;
    getOne(id: number): Promise<Order | undefined>;
    getAll(): Promise<Order[]>;
    getAllByClientId(clientId: number): Promise<Order[] | undefined>;
    delete(id: number): Promise<DeleteResult>;
}