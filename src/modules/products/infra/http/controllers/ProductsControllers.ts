import { Request, Response } from "express";
import AppError from "../../../../../shared/errors/AppErrors";
import CreateProductService from "../../../services/CreateProductService";
import DeleteProductService from "../../../services/DeleteProductService";
import GetProductService from "../../../services/GetProductService";
import GetProductsService from "../../../services/GetProductsService";
import UpdateProductService from "../../../services/UpdateProductService";

class ProductsControllers{
    async create(request: Request, response: Response){
        const data = request.body;

        const createProductService = new CreateProductService();

        const product = await createProductService.execute(data);

        return response.json(product);
    }

    async get(request: Request, response: Response){
        const { id } = request.params;
        const num = parseInt(id);

        const getProductService = new GetProductService();

        const product = await getProductService.execute(num);

        return response.json(product);
    }

    async list(request: Request, response: Response){
        const getProductsService = new GetProductsService();

        const products = await getProductsService.execute();

        return response.json(products);
    }
    
    async update(request: Request, response: Response){
        const { id } = request.params;
        const num = parseInt(id);

        const getProductService = new GetProductService();

        const isProduct = await getProductService.execute(num);

        if(!isProduct){
            throw new AppError("Produto não existe.");
        }

        const data = request.body;

        const updateProductService = new UpdateProductService();

        const product = updateProductService.execute(data);

        return response.json(product);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const num = parseInt(id);
        
        const deleteProductService = new DeleteProductService();

        const product = await deleteProductService.execute(num);

        return response.json(product);
    }
}

export default new ProductsControllers;