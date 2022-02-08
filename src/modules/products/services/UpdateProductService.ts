import AppError from "../../../shared/errors/AppErrors";
import IProductDto from "../dtos/IProductDto";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";
import GetProductService from "./GetProductService";

export default class UpdateProductService{
    public async execute(num: number, data: IProductDto): Promise<Product>{
        const getProductService = new GetProductService();

        const isProduct = await getProductService.execute(num);

        if(!isProduct){
            throw new AppError("Produto não existe.");
        }
        
        const productRepository = new ProductRepository();

        const product = await productRepository.update(data);

        return product;
    }
}