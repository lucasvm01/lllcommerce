import { DeleteResult, getRepository, Repository } from "typeorm";
import IOrderDto from "../../../dtos/IOrderDto";
import IOrderRepository from "../../../repositories/IOrderRepository";
import Order from "../entities/Order";

export default class OrderRepository implements IOrderRepository{
    private ormRepository: Repository<Order>;

    constructor(){
        this.ormRepository = getRepository(Order);
    }
    
    async create(data: IOrderDto): Promise<Order> {
        const order = this.ormRepository.create(data);
        return this.ormRepository.save(order);
    }

    async getOne(id: number): Promise<Order | undefined> {
        const order = await this.ormRepository.findOne(id);
        return order;
    }

    async getAll(): Promise<Order[]> {
        const orders = await this.ormRepository.find();
        return orders;
    }
    
    async getAllByClientId(clientId: number): Promise<Order[] | undefined> {
        const orders = await this.ormRepository.find({
            where: {
                clienteId: clientId
            }
        });

        // const orders = await this.ormRepository.createQueryBuilder('p')
        // .leftJoinAndSelect('p.cliente', 'c')
        // .where('p.clienteId = :id', { clientId })
        // .getMany()

        return orders;
    }

    async delete(id: number): Promise<DeleteResult> {
        const order = await this.ormRepository.delete(id);
        return order;
    }

}