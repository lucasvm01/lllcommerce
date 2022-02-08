import { 
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import Order from "./Order";
import Product from "../../../../products/infra/typeorm/entities/Product";


@Entity("pedido_produtos")
export default class OrderProduct{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    quantidade: number;

    @PrimaryColumn()
    pedidoId: number;

    @ManyToOne(() => Order, (order) => order.pedido_produtos,{
        orphanedRowAction: "delete"
    })
    @JoinColumn({ name: "pedidoId" })
    pedido: Order;

    @PrimaryColumn()
    produtoId: number;

    @ManyToOne(() => Product, (product) => product.produto_pedidos,{
        orphanedRowAction: "delete"
    })
    @JoinColumn({ name: "produtoId" })
    produto: Product;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date; 
}