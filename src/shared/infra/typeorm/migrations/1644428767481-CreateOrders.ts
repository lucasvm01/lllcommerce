import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateOrders1644428767481 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "pedidos",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: "increment"
                },
                {
                    name: "clienteId",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "data",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "status",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "forma_pagamento",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "valor_total",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "desconto",
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

        await queryRunner.createForeignKey("pedidos", new TableForeignKey({
            columnNames: ["clienteId"],
            referencedColumnNames: ["id"],
            referencedTableName: "clientes",
            onDelete: "SET NULL"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pedidos");
    }

}
