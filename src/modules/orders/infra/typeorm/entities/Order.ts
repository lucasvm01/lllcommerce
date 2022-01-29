import { 
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import Client from "../../../../clients/infra/typeorm/entities/Clients";
import OrderProducts from "../../../../intermediate_tables/infra/typeorm/entities/OrderProduct";

@Entity("pedidos")
export default class Order{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    data: Date;

    @Column()
    status: string;

    @Column()
    forma_pagamento: string;

    @Column()
    valor: number;

    @Column()
    desconto: number;

    @Column()
    clienteId: number;
    
    @ManyToOne(() => Client, (client) => client.pedidos)
    @JoinColumn({ name: "clienteId" })
    cliente: Client;

    @OneToMany(() => OrderProducts, (order_product) => order_product.pedido)
    pedido_produtos: OrderProducts[];

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date; 
}