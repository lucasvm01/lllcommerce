import IClientDTO from "../dtos/IClientDto";
import Client from "../infra/typeorm/entities/Clients";

export default interface IClientRepository{
    create(data: IClientDTO): Promise<Client>;
}