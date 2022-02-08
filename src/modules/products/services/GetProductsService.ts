import AppError from "../../../shared/errors/AppErrors";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class GetProductsService{
    public async execute(): Promise<Product[]>{
        const productRepository = new ProductRepository();

        const products = await productRepository.getAll();

        if(products.length <= 0) throw new AppError("Não há produtos cadastrados;");

        return products;
    }
}