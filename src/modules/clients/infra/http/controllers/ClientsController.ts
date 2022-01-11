import { Request, Response } from "express";
import CreateClientService from "../../../services/CreateClientService";

class ClientsController{
    async create(request: Request, response: Response){
        const data = request.body;

        const createClientService = new CreateClientService();
        
        const client = await createClientService.execute(data);
    
        return response.json(client);
    }
}

export default new ClientsController();