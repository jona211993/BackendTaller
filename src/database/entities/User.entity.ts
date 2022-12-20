import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { RoleEntity } from "./Role.entity";

@Entity("usuarios")
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({
    length: 50,
  })
  nombre: string;

  @Column({
    length: 15,
  })
  dni: string;

  @Column({
    length: 255,
  })
  correo: string;

  @Column({
    length: 255,
  })
  contrasenia: string;

  @Column("text")
  direccion: string;

  @Column({
    length: 15,
  })
  celular: string;

  @ManyToOne((type) => RoleEntity, (rol) => rol.users)
  @JoinColumn({name: 'rol_id'})
  role: RoleEntity;

  @Column({
    length: 25,
  })
  estado: string;

  @Column({
    length: 127,
  })
  motivo: string;

  @Column({
    default: false
  })
  eliminado: boolean;

  @CreateDateColumn()
  fecha_registro: Date;

  @UpdateDateColumn()
  fecha_actualizacion: Date;
}
