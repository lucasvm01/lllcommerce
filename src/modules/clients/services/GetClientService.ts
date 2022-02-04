import AppError from "../../../shared/errors/AppErrors";
import Client from "../infra/typeorm/entities/Clients";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class GetClientService{
    public async execute(id: number): Promise<Client | undefined>{
        const clientRepository = new ClientRepository();

        const client = await clientRepository.getOne(id);

        if(client === undefined){
            throw new AppError("Cliente não encontrado.");
        }

        return client;
    }
}