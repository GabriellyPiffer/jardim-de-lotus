require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const pedidoRoutes = require('./src/routes/pedido.routes');

app.use('/pedido', pedidoRoutes);


const florRoutes = require('./src/routes/flor.routes');

app.use('/flor', florRoutes);


const clienteRoutes = require('./src/routes/cliente.routes');

app.use('/cliente', clienteRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
