import AppError from "../../../shared/errors/AppErrors";
import IProductDto from "../dtos/IProductDto";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class CreateProductService{
    public async execute(data: IProductDto): Promise<Product> {
        if(data.categoriaId === 0 || 
            data.categoriaId === undefined) 
                throw new AppError("Deve-se informar uma categoria.");

        if(data.nome === "" || data.nome === undefined)
                throw new AppError("Deve-se informar um nome.");
        
        if(data.preco <= 0 || data.preco === undefined ){
                throw new AppError("Deve-se informar um preço.");
        }

        if(data.quantidade <= 0 || data.quantidade === undefined){
            throw new AppError("Deve-se incluir pelo menos um produto");
        }

        const productRepository = new ProductRepository();

        const product = await productRepository.create(data);

        return product;
    }
}