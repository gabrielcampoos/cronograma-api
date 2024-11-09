import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUser1731122776422 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "username",
            type: "varchar",
            length: "100",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
            length: "100",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user", true, true, true);
  }
}
