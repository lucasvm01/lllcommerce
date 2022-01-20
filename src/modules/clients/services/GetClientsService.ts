import Client from "../infra/typeorm/entities/Clients";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class GetClientsService{
    public async execute(): Promise<Client[]>{
        const clientRepository = new ClientRepository();

        const clients = await clientRepository.getAll();

        return clients;
    }
}