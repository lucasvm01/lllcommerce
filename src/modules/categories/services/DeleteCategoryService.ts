import { DeleteResult } from "typeorm";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class DeleteCategoryService{
    async execute(id: number): Promise<DeleteResult>{
        const categoryRepository = new CategoryRepository();

        return categoryRepository.delete(id);
    }
}