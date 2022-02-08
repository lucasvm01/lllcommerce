import { DeleteResult, getRepository, Repository } from "typeorm";
import AppError from "../../../../../shared/errors/AppErrors";
import IProductDto from "../../../dtos/IProductDto";
import IProductRepository from "../../../repositories/IProductRepository";
import Product from "../entities/Product";

export default class ProductRepository implements IProductRepository{
    private ormRepoitory: Repository<Product>;

    constructor(){
        this.ormRepoitory = getRepository(Product);
    }

    create(data: IProductDto): Promise<Product> {
        const product = this.ormRepoitory.create(data);

        return this.ormRepoitory.save(product);
    }

    getOne(id: number): Promise<Product | undefined> {
        const product = this.ormRepoitory.findOne(id);

        return product;
    }

    update(data: IProductDto): Promise<Product> {
        const product = this.ormRepoitory.save(data);

        return product;
    }

    getAll(): Promise<Product[]> {
        const products = this.ormRepoitory.find();

        return products;
    }

    delete(id: number): Promise<DeleteResult> {
        const product = this.ormRepoitory.delete(id);

        return product;
    }
}