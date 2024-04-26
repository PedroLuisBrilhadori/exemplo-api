import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("TB_TASKS")
export class Task {


  @PrimaryGeneratedColumn('uuid')
  id: string


  @Column("varchar")
  name: string;

}
