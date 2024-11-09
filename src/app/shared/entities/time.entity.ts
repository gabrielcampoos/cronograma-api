import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { randomUUID } from "crypto";

@Entity({ name: "time" })
export class TimeEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  number!: number;

  @Column({ name: "start_time" })
  startTime!: string;

  @Column({ name: "end_time" })
  endTime!: string;

  @BeforeInsert()
  beforeInsert() {
    this.id = randomUUID();
  }
}
