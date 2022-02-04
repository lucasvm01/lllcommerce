import AppError from "../../../shared/errors/AppErrors";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class GetProductService{
    public async execute(id: number): Promise<Product | undefined>{
        const productRepository = new ProductRepository();

        const product = await productRepository.getOne(id);

        if(product === undefined){
            throw new AppError("Produto não existe.");
        }

        return productRepository.getOne(id);
    }
}