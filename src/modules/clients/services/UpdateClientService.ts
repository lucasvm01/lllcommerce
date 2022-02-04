import AppError from "../../../shared/errors/AppErrors";
import IClientDTO from "../dtos/IClientDto";
import Client from "../infra/typeorm/entities/Clients";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
import GetClientService from "./GetClientService";

export default class UpdateClientService{
    public async execute(num: number, data: IClientDTO): Promise<Client>{
        const getClientService = new GetClientService();

        const isCliente = await getClientService.execute(num);

        if(isCliente === undefined){
            throw new AppError("Cliente com ID " + num + " não existe.");
        }

        const clientRepository = new ClientRepository();

        const listClients = await clientRepository.getAll();

        listClients.forEach(client => {
            if(client.cpf === data.cpf && client.id !== data.id){
                throw new AppError("Cliente já cadastrado com este cpf.");
            }
        });

        const updated = {
            ...data,
            "id": num
        };

        return clientRepository.update(updated);

    }
}