import AppError from "../../../shared/errors/AppErrors";
import ICategoryDto from "../dtos/ICategoryDto";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class UpdateCategoryService{
    async execute(num: number, data: ICategoryDto): Promise<Category>{
        const categoryRepository = new CategoryRepository();

        const isCategory = categoryRepository.getOne(num);

        if(isCategory === undefined){
            throw new AppError("Categoria não existe.");
        }

        return categoryRepository.update(data);
    }
}