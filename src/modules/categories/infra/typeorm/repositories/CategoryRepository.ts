import { DeleteResult, getRepository, Repository } from "typeorm";
import AppError from "../../../../../shared/errors/AppErrors";
import ICategoryDto from "../../../dtos/ICategoryDto";
import ICategoryRepository from "../../../repositories/ICategoryRepository";
import Category from "../entities/Category";

export default class CategoryRepository implements ICategoryRepository{
    private ormRepoitory: Repository<Category>;

    constructor(){
        this.ormRepoitory = getRepository(Category);
    }
    
    async create(data: ICategoryDto): Promise<Category> {
        const category = this.ormRepoitory.create(data);
        return this.ormRepoitory.save(category);
    }

    async getOne(id: number): Promise<Category | undefined> {
        const category = await this.ormRepoitory.findOne(id);

        return category;
    }

    async update(data: ICategoryDto): Promise<Category> {
        const status = await this.ormRepoitory.save(data);
        return status;
    }

    async getAll(): Promise<Category[]> {
        const categories = await this.ormRepoitory.find();
        return categories;
    }

    async delete(id: number): Promise<DeleteResult> {
        const category = await this.ormRepoitory.delete(id);
        return category;
    }

}