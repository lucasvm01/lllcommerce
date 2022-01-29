import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class GetCategoryService{
    async execute(id: number): Promise<Category | undefined>{
        const categoryRepository = new CategoryRepository();
        
        return categoryRepository.getOne(id);
    }
}