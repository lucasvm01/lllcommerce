import { DeleteResult, UpdateEvent, UpdateResult } from "typeorm";
import IClientDTO from "../dtos/IClientDto";
import Client from "../infra/typeorm/entities/Clients";

export default interface IClientRepository{
    create(data: IClientDTO): Promise<Client>;

    getOne(id: number): Promise<Client | undefined>;
    
    getAll(): Promise<Client[]>;

    update(data: IClientDTO): Promise<Client>// Falta update

    delete(id: number): Promise<DeleteResult>;

}