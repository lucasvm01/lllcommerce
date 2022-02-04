import AppError from "../../../shared/errors/AppErrors";
import ICategoryDTO from "../dtos/ICategoryDto";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class CreateCategoryService{
    public async execute(data: ICategoryDTO): Promise<Category>{
        if(data.descricao === "" ||
            data.descricao === undefined)
                throw new AppError("Deve-se informar uma descrição para a categoria.");

        const categoryRepository = new CategoryRepository();

        const category = await categoryRepository.create(data);

        return category;
    }
}