import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableTime1731122969444 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "time",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "number",
            type: "int4",
          },
          {
            name: "start_time",
            type: "varchar",
          },
          {
            name: "end_time",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("time", true, true, true);
  }
}
