import { Request, Response } from "express";
import AppError from "../../../../../shared/errors/AppErrors";
import CreateClientService from "../../../services/CreateClientService";
import DeleteClientService from "../../../services/DeleteClientService";
import GetClientService from "../../../services/GetClientService";
import GetClientsService from "../../../services/GetClientsService";
import UpdateClientService from "../../../services/UpdateClientService";
import ClientRepository from "../../typeorm/repositories/ClientRepository";

class ClientsController{
    async create(request: Request, response: Response){
        const data = request.body;
        
        const clients = new ClientRepository();

        const listClients = await clients.getAll();

        listClients.forEach(client => {
            if(client.cpf === data.cpf){
                throw new AppError("Cliente já cadastrado com este cpf.");
            }
        });
        
        const createClientService = new CreateClientService();
        
        const client = await createClientService.execute(data);
    
        return response.json(client);
    }

    async delete(request: Request, response: Response){
        
        const { id } = request.params;

        var num = parseInt(id);

        const deleteClientService = new DeleteClientService();
        
        const client = await deleteClientService.execute(num);
    
        return response.json(client);
    }

    async get(request: Request, response: Response){
        const { id } = request.params;

        var num = parseInt(id);

        const getClientService = new GetClientService();

        const client = await getClientService.execute(num);

        if(!client){
            throw new AppError("Cliente não encontrado.");
        }

        return response.json(client);
    }

    async list(request: Request, response: Response){
        const getClientsService = new GetClientsService();

        const clients = await getClientsService.execute();

        return response.json(clients);
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const num = parseInt(id);

        const clientRepository = new GetClientService();

        const isCliente = await clientRepository.execute(num);

        if(isCliente === undefined){
            throw new AppError("Cliente não existe.");
        }
        
        const data = request.body;

        const clients = new ClientRepository();

        const listClients = await clients.getAll();

        listClients.forEach(client => {
            if(client.cpf === data.cpf && client.id !== data.id){
                throw new AppError("Cliente já cadastrado com este cpf.");
            }
        });

        const updated = {
            ...data,
            "id": num
        };
        
        const updateClientService = new UpdateClientService();

        const client = await updateClientService.execute(updated);

        if(client){
            return response.json(client);
        }else{
            throw new AppError("Não foi possível atualizar o cliente.");
        }
    }
    
}

export default new ClientsController();