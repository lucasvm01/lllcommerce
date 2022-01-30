import IProductDto from "../dtos/IProductDto";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class CreateProductService{
    public async execute(data: IProductDto): Promise<Product> {
        const productRepository = new ProductRepository();

        const product = await productRepository.create(data);

        return product;
    }
}