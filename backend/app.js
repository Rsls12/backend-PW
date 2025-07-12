import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import productoRoutes from './src/routes/producto.js'
import CarritoDeCompraRouter from './src/routes/CarritoDeCompra.js'
import OrdenRouter from './src/routes/Orden.js'
import UsuarioRouter from './src/routes/Usuario.js'
import CategoriaRouter from './src/routes/categoria.js';
import loginRouter from './src/routes/login.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API de Tienda Online');
});

app.use('/producto', productoRoutes); 
app.use('/Usuario',UsuarioRouter); 
app.use('/Carrito', CarritoDeCompraRouter); 
app.use('/Orden',OrdenRouter);
app.use('/Categoria', CategoriaRouter);
app.use('/login', loginRouter);

export default app;