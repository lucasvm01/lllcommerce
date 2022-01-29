import Client from "../infra/typeorm/entities/Clients";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class GetClientService{
    public async execute(id: number): Promise<Client | undefined>{
        const clientRepository = new ClientRepository();

        const client = await clientRepository.getOne(id);

        return client;
    }
}