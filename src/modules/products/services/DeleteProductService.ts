import { DeleteResult } from "typeorm";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class DeleteProductService{
    public async execute(id: number): Promise<DeleteResult> {
        const productRepository = new ProductRepository();

        const product = await productRepository.delete(id);

        return product;
    }
}