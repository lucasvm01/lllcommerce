import { DeleteResult } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class DeleteClientService{
    public async execute(id: number): Promise<DeleteResult>{
        const clientRepository = new ClientRepository();

        const client = await clientRepository.delete(id);

        if(client === undefined){
            throw new AppError("Cliente não encontrado.");
        }
        
        return client;
    }
}