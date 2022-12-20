import { DataSource } from "typeorm";
import { RoleEntity } from "./entities/Role.entity";
import { UserEntity } from "./entities/User.entity";
require("dotenv").config();

export const DatabaseSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: 'admin',
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: true,
  entities: [RoleEntity, UserEntity], //* TABLAS
  subscribers: [],
  migrations: [],
});

