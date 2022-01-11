import IClientDTO from "../dtos/IClientDto";
import Client from "../infra/typeorm/entities/Clients";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class CreateClientService{
    public async execute(data: IClientDTO): Promise<Client>{
        const clientRepository = new ClientRepository();

        const client = await clientRepository.create(data);

        return client;
    }
}