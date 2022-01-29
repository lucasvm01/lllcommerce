import IClientDTO from "../dtos/IClientDto";
import Client from "../infra/typeorm/entities/Clients";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class UpdateClientService{
    public async execute(data: IClientDTO): Promise<Client>{
        const clientRepository = new ClientRepository();

        const clients = await clientRepository.update(data);

        return clients;
    }
}