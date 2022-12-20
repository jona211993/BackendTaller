//authorizacion
import jwt from "jsonwebtoken";
import config from "../config";
import {getConnection} from "./../database/database"
// import User from '../models/m_user'
// import Role from '../models/m_role'

// Jonatan Pacora Vega
// 17/10/22
// Esta funcion es para verificacion del token de sesion
export const verifyToken= async (req, res,next) => {
    try {
      const connection= await getConnection();  
      const token = req.headers["x-access-token"];

        if(!token) return res.status(403).json({message:"No token provided"})
    
        const decoded = jwt.verify(token)
        req.idUsuario=decoded.idUsuario;
    
        const user = await connection.query("SELECT * FROM Usuarios WHERE idusuario = ?",req.idUsuario);
        if(!user) return res.status(404).json({message: "usuario no encontrado"})
    
        next()
    } catch (error) {
        return res.status(500).json({message: 'No autorizado'})
    }
   
};
// Esta funcion es para verificacion de que el usuario logueado es un Jefe de Almacen
export const isJefeAlmacen= async (req, res,next) => {
  const user=await User.findById(req.userId);
  const roles= await Role.find({_id: { $in: user.roles} });

    if(roles[0].name === "jefe_almacen"){
        next();
        return;
    }
  
 return res.status(403).json({message:"Requiere Rol Jefe Almacen"});
};
// Esta funcion es para verificacion de que el usuario logueado es un Administrador
export const isAdmin= async (req, res,next) => {
    const connection= await getConnection();  
    const user = await connection.query("SELECT * FROM Usuarios WHERE idusuario = ?",req.idUsuario);  
    console.log(user.id_rol)     
    if(user.id_rol === "admin"){
          next();
          return;
      }
    
   return res.status(403).json({message:"Requiere Rol Admin"});
  };

// Esta funcion es para verificacion de que el usuario logueado es un Almacenero
 export const isALmacenero= async (req, res,next) => {
    const user=await User.findById(req.userId);
    const roles= await Role.find({_id: { $in: user.roles} });
  
      if(roles[0].name === "almacenero"){
          next();
          return;
      }
    return res.status(403).json({message:"Requiere Rol Almacenero"});
   };

   export const isJefeOrAlmacenero= async (req, res,next) => {
    const user=await User.findById(req.userId);
    const roles= await Role.find({_id: { $in: user.roles} });
  
      if(roles[0].name === "almacenero" || roles[0].name === "jefe_almacen"){
          next();
          return;
      }
    return res.status(403).json({message:"Requiere Rol de Jefe o Almacenero "});
   };

