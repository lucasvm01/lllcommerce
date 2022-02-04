import AppError from "../../../shared/errors/AppErrors";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class GetQtdProductService{
    public async execute(id: number): Promise<number | undefined>{
        const productRepository = new ProductRepository();

        const product = await productRepository.getOne(id);

        if(product === undefined) throw new AppError("Não existe produto com ID " + id);

        return product.quantidade;
    }
}