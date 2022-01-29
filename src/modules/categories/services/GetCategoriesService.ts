import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class GetCategoriesService{
    async execute() : Promise<Category[]>{
        const categoryRepository = new CategoryRepository();

        return categoryRepository.getAll();
    }
}