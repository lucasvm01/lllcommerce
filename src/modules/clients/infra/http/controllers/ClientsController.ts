import { Request, Response } from "express";
import CreateClientService from "../../../services/CreateClientService";
import DeleteClientService from "../../../services/DeleteClientService";
import GetClientService from "../../../services/GetClientService";
import GetClientsService from "../../../services/GetClientsService";
import UpdateClientService from "../../../services/UpdateClientService";

class ClientsController{
    async create(request: Request, response: Response){
        const data = request.body;
        
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

        return response.json(client);
    }

    async list(request: Request, response: Response){
        const getClientsService = new GetClientsService();

        const clients = await getClientsService.execute();

        return response.json(clients);
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const num = parseInt(id)
        
        const data = request.body;
        
        const updateClientService = new UpdateClientService();

        const client = await updateClientService.execute(num, data);

        return response.json(client);
    }
    
}

export default new ClientsController();