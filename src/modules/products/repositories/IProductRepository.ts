import { DeleteResult } from "typeorm";
import IProductDTO from "../dtos/IProductDto";
import Product from "../infra/typeorm/entities/Product";

export default interface IProductRepository{
    create(data: IProductDTO): Promise<Product>;

    getOne(id: number): Promise<Product | undefined>;

    update(data: IProductDTO): Promise<Product>
    
    getAll(): Promise<Product[]>;

    // Requisitos não especificados
    delete(id: number): Promise<DeleteResult>;
}