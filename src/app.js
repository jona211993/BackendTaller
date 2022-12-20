import express from 'express';
import morgan from 'morgan';


// import { createRoles } from './libs/initialSetup'

// import productosRoutes from './routes/producto'
// import categoriaRoutes from './routes/categoria'
// import auhtRoutes from './routes/auth'
// import usersRoutes from './routes/user'
// import movimientoRoutes from './routes/movimiento'


// const cors = require('cors')
// let corsOptions = {
//     origin: 'trustedwebsite.com' // Compliant
//   };
const app = express();
app.set("port",4000);


// app.disable("x-powered-by");
// app.use(cors(corsOptions))
// createRoles();
app.use(morgan("dev"));
// app.use(express.json());
app.use('/api/productos',productosRoutes)
// app.use('/api/categoria',categoriaRoutes)
// app.use('/api/auth',auhtRoutes)
// app.use('/api/users',usersRoutes)
// app.use('/api/movimiento',movimientoRoutes)



export default app;