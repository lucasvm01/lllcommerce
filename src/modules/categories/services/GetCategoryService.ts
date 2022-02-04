import AppError from "../../../shared/errors/AppErrors";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class GetCategoryService{
    async execute(id: number): Promise<Category | undefined>{
        const categoryRepository = new CategoryRepository();
        
        const category = await categoryRepository.getOne(id);

        if(category === undefined){
            throw new AppError("Categoria não encontrada.");
        }
        
        return category;
    }
}