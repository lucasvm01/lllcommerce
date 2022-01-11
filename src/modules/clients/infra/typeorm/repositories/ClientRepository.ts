import IClientDTO from "../../../dtos/IClientDto";
import IClientRepository from "../../../repositories/IClientRepository";
import { getRepository, Repository } from "typeorm";
import Client from "../entities/Clients";

export default class ClientRepository implements IClientRepository{
    private ormRepoitory: Repository<Client>;

    constructor(){
        this.ormRepoitory = getRepository(Client);
    }

    async create(data: IClientDTO): Promise<Client>{
        const client = this.ormRepoitory.create(data);
        return this.ormRepoitory.save(client);
    }
}