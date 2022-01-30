import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class GetProductService{
    public async execute(id: number): Promise<Product | undefined>{
        const productRepository = new ProductRepository();

        const product = await productRepository.getOne(id);

        return product;
    }
}