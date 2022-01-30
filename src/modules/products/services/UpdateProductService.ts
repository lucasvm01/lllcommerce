import IProductDto from "../dtos/IProductDto";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class UpdateProductService{
    public async execute(data: IProductDto): Promise<Product>{
        const productRepository = new ProductRepository();

        const product = await productRepository.update(data);

        return product;
    }
}