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
import Category from "../../../../categories/infra/typeorm/entities/Category";
import OrderProducts from "../../../../orders/infra/typeorm/entities/OrderProduct";

@Entity("produtos")
export default class Product{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    nome: string;

    @Column()
    preco: number;

    @Column()
    quantidade: number;

    @Column()
    categoriaId: number;
    
    @ManyToOne(() => Category, (category) => category.produtos)
    @JoinColumn({ name: "categoriaId" })
    categoria: Category;

    @OneToMany(() => OrderProducts, (order_product) => order_product.produto)
    produto_pedidos: OrderProducts[];

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date; 
}