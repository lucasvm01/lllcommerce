import IOrderProductDto from "./IOrderProductDto";

export default interface IOrderDto{
    id?: number;
    clienteId: number;
    data: Date; // Ctrl+Space => Timestamp => ISO-8601
    status: string;
    forma_pagamento: string;
    valor_total: number;
    desconto?: number;
    pedido_produtos: IOrderProductDto[]; // Json com lista de objetos com produtoId e quantidade
}