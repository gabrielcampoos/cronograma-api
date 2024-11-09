import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableDiscipline1731123079344 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "discipline",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "instructor",
            type: "varchar",
          },
          {
            name: "patent",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("discipline", true, true, true);
  }
}
