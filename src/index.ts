import app from "./app";
import { RoleEntity } from "./database/entities/Role.entity";
import { DatabaseSource } from "./database/index";

const main = async () => {
  await DatabaseSource.initialize();

  //* =============== INSERT ===================
  //* const role1 = new RoleEntity();

  //* role1.nombre = "Administrador";
  //* await role1.save()

  //* ================ SELECT =======================
  //* const selectedRoles = await RoleEntity.find(); //* SELECT * FROM roles
  //* console.log({selectedRoles});

  //* ================ SELECT BY ID =======================
  //* const adminRole = await RoleEntity.findOne({ //* SELECT * FROM roles WHERE id_rol = 1 LIMIT 1;
  //*   where: {
  //*     id_rol: 1
  //*   }
  //* })

  //* ============== UPDATE =====================
  //* METODO 1
  //* await RoleEntity.update(1, {
  //*   nombre: "Admin",
  //* });
  //* const adminRole = await RoleEntity.findOne({
  //*   //* SELECT * FROM roles WHERE id_rol = 1 LIMIT 1;
  //*   where: {
  //*     id_rol: 1,
  //*   },
  //* });

  //* METODO 2
  //* const adminRole = await RoleEntity.findOne({
  //*   //* SELECT * FROM roles WHERE id_rol = 1 LIMIT 1;
  //*   where: {
  //*     id_rol: 1,
  //*   },
  //* });
  //* adminRole.nombre = "Nuevo administrador"
  //* await adminRole.save()

  //* ================= DELETE ================
  //* METODO 1
     const adminRole = await RoleEntity.findOne({
       where: {
         id_rol: 3
       }
     })
    await adminRole?.remove()
    // await adminRole.reload()

  //* METODO 2
  // await RoleEntity.delete(1);

  // const adminRole = await RoleEntity.findOne({
  //   where: {
  //     id_rol: 1,
  //   },
  // });

  console.log({ adminRole });

  app.listen(app.get("port"));
  console.log("Servidor en puerto", app.get("port"));
};

main();
