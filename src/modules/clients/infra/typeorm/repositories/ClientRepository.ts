import IClientDTO from "../../../dtos/IClientDto";
import IClientRepository from "../../../repositories/IClientRepository";
import { DeleteResult, getRepository, Repository, UpdateEvent, UpdateResult } from "typeorm";
import Client from "../entities/Clients";
import AppError from "../../../../../shared/errors/AppErrors";

export default class ClientRepository implements IClientRepository{
    private ormRepoitory: Repository<Client>;

    constructor(){
        this.ormRepoitory = getRepository(Client);
    }

    async create(data: IClientDTO): Promise<Client>{
        const client = this.ormRepoitory.create(data);
        return this.ormRepoitory.save(client);
    }

    async getOne(id: number): Promise<Client | undefined> {
        const client = await this.ormRepoitory.findOne(id);

        if(!client) throw new AppError("Cliente não encontrado");
        
        return client;
    }
    
    async getAll(): Promise<Client[]> {
        const clients = await this.ormRepoitory.find();
        return clients;
    }

    async update(data: IClientDTO): Promise<Client> {
        const status = await this.ormRepoitory.save(data);
        return status;
    }       

    async delete(id: number): Promise<DeleteResult>{
        const client = await this.ormRepoitory.delete(id);
        return client;
    }

}