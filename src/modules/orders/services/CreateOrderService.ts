import { create } from "ts-node";
import AppError from "../../../shared/errors/AppErrors";
import GetClientService from "../../clients/services/GetClientService";
import GetProductService from "../../products/services/GetProductService";
import IOrderDto from "../dtos/IOrderDto";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class CreateOrderService{
    public async execute(data: IOrderDto): Promise<Order>{
       
        const produtos = data.pedido_produtos;

        if(data.valor_total > 0) throw new AppError("Favor não inserir valor.");

        if(produtos === undefined||produtos.length <= 0){
            throw new AppError("Deve-se informar pelo menos um produto");
        }
        
        if(data.clienteId <= 0) throw new AppError("Deve-se informar um cliente para o pedido.");

        const client = new GetClientService();
        if(await client.execute(data.clienteId) === undefined)
            throw new AppError("Não existe cliente com ID " + data.clienteId);

        let valor = 0;

        const getProductService = new GetProductService();
        
        produtos.forEach(async (p)  => {
            if(p.quantidade <= 0) throw new AppError("Deve-se informar uma quantidade para os produtos.");
            
            const produto = await getProductService.execute(p.produtoId);

            if(produto === undefined) throw new AppError("O produto com ID " + p.produtoId + " não existe.");

            if(produto.quantidade < p.quantidade) throw new AppError("Não há estoque do produto com ID " + p.produtoId);

            valor += produto.quantidade * produto.preco;
        });

        const createData = {
            ...data,
            valor_total : valor
        }

        const orderRepository = new OrderRepository();

        const order = await orderRepository.create(createData);


        return order;
    } 
}