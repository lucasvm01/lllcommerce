import { Request, Response } from "express";
import CreateCategoryService from "../../../services/CreateCategoryService";
import DeleteCategoryService from "../../../services/DeleteCategoryService";
import GetCategoriesService from "../../../services/GetCategoriesService";
import GetCategoryService from "../../../services/GetCategoryService";
import UpdateCategoryService from "../../../services/UpdateCategoryService";

class CategoriesController{
    async create(request: Request, response: Response){
        const data = request.body;

        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute(data);

        return response.json(category);
    }

    async get(request: Request, response: Response){
        const { id } = request.params;
        const num = parseInt(id);

        const getCategoryService = new GetCategoryService();

        const category = getCategoryService.execute(num);

        return response.json(category);
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const num = parseInt(id);

        const data = request.body;

        const updateCategoryService = new UpdateCategoryService();

        const category = await updateCategoryService.execute(num, data);

        return response.json(category);
    }

    async list(request: Request, response: Response){
        const getCategoriesService = new GetCategoriesService();

        const categories = await getCategoriesService.execute();

        return response.json(categories);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const num = parseInt(id);

        const deleteCategoryService = new DeleteCategoryService();

        const category = await deleteCategoryService.execute(num);

        return response.json(category);
    }
}

export default new CategoriesController();