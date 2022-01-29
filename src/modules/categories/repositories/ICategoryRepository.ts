import { DeleteResult } from "typeorm";
import ICategoryDTO from "../dtos/ICategoryDto";
import Category from "../infra/typeorm/entities/Category";

export default interface ICategoryRepository{
    create(data: ICategoryDTO): Promise<Category>;

    getOne(id: number): Promise<Category | undefined>;

    update(data: ICategoryDTO): Promise<Category>
    
    getAll(): Promise<Category[]>;

    // Requisitos não especificados
    delete(id: number): Promise<DeleteResult>;
}