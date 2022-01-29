import ICategoryDto from "../dtos/ICategoryDto";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class UpdateCategoryService{
    async execute(data: ICategoryDto): Promise<Category>{
        const categoryRepository = new CategoryRepository();

        return categoryRepository.update(data);
    }
}