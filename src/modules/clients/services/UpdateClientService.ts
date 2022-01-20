import { UpdateResult } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import IClientDTO from "../dtos/IClientDto";
import Client from "../infra/typeorm/entities/Clients";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class UpdateClientService{
    public async execute(id: number,data: IClientDTO): Promise<Client>{
        const clientRepository = new ClientRepository();

        await clientRepository.getOne(id);

        const updated = {
            ...data,
            id
        };

        const status = await clientRepository.update(updated);

        if(status){
            return status;
        }else{
            throw new AppError("Não foi possível atualizar o cliente");
        }
    }
}