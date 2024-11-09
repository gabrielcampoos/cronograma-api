import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { randomUUID } from "crypto";

@Entity({ name: "user" })
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @BeforeInsert()
  beforeInsert() {
    this.id = randomUUID();
  }
}
