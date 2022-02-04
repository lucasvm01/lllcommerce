import AppError from "../../../shared/errors/AppErrors";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class GetCategoriesService{
    async execute() : Promise<Category[]>{
        const categoryRepository = new CategoryRepository();

        const clients = await categoryRepository.getAll();

        if(clients.length > 0){ 
            return clients;
         }else{
            throw new AppError("Não há categorias cadastradas.");
        }
    }
}