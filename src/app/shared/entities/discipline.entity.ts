import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { randomUUID } from "crypto";

@Entity({ name: "discipline" })
export class DisciplineEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  instructor!: string;

  @Column()
  patent!: string;

  @BeforeInsert()
  beforeInsert() {
    this.id = randomUUID();
  }
}
