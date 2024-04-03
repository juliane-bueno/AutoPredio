const mongoose = require("mongoose");

const Predios = mongoose.model("Predios", {
  nome: String,
  rua: String,
  cep: Number,
  numero: Number
});

module.exports = Predios;