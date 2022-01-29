import { 
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import Order from "../../../../orders/infra/typeorm/entities/Order";
import Product from "../../../../products/infra/typeorm/entities/Product";


@Entity("pedido_produtos")
export default class OrderProducts{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    quantidade: number;

    @Column()
    pedidoId: number;

    @ManyToOne(() => Order, (order) => order.pedido_produtos)
    @JoinColumn({ name: "pedidoId" })
    pedido: Order;

    @Column()
    produtoId: number;

    @ManyToOne(() => Product, (product) => product.produto_pedidos)
    @JoinColumn({ name: "produtoId" })
    produto: Product;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date; 
}