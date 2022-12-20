import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserEntity } from "./User.entity";

@Entity("roles")
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id_rol: number;

  @Column({
    length: 50,
  })
  nombre: string;

  @OneToMany(type => UserEntity, user => user.role)
  users: UserEntity[]

  @CreateDateColumn()
  creado_en: Date;

  @UpdateDateColumn()
  actualizado_en: Date;
}
