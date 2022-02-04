import AppError from "../../../shared/errors/AppErrors";
import IProductDto from "../dtos/IProductDto";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class CreateProductService{
    public async execute(data: IProductDto): Promise<Product> {
        if(data.categoriaId === 0 || 
            data.categoriaId === undefined) 
                throw new AppError("Deve-se informar uma categoria.");

        const productRepository = new ProductRepository();

        const product = await productRepository.create(data);

        return product;
    }
}