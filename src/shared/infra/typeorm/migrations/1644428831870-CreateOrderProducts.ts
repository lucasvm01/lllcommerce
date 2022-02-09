import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateOrderProducts1644428831870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "pedido_produtos",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: "increment"
                },
                {
                    name: "pedidoId",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "produtoId",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "quantidade",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));

        await queryRunner.createForeignKey("pedido_produtos", new TableForeignKey({
            columnNames: ["pedidoId"],
            referencedColumnNames: ["id"],
            referencedTableName: "pedidos",
            onDelete: "SET NULL"
        }));

        await queryRunner.createForeignKey("pedido_produtos", new TableForeignKey({
            columnNames: ["produtoId"],
            referencedColumnNames: ["id"],
            referencedTableName: "produtos",
            onDelete: "SET NULL"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pedido_produtos");
    }

}
