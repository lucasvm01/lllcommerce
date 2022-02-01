export default interface IOrderDto{
    id?: number;
    clienteId: number;
    data: string;
    status: string;
    forma_pagamento: string;
    valor: number;
    desconto: number;
}