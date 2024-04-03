const express = require("express");
const cors = require("cors");
const ConexaoDB = require("./src/database/conexao.js");
const PrediosRotas = require("./src/routes/PrediosRotas.js");

const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.use(express.json());
app.use(cors("*"));

// Rotas
PrediosRotas.rotas(app);

// Conexão com o banco de dados
ConexaoDB.create();
