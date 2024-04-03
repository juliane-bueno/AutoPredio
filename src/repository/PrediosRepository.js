const Predios = require("../models/PrediosModel.js");

class PrediosRepository {

  static async criarPredio(predio) {
    await Predios.create(predio);
    return { Sucesso: "Sucesso no registro!" };
  }

  static async buscarTodosPredios() {
    const response = await Predios.find();
    return response;
  }

  static async buscarTodosPrediosPorChave( key, value) {
    const response = await Predios.find({ [key]: value });
    return response;
  }

  static async buscarPredioPorId(id) {
    const response = await Predios.findOne({ _id: id });
    return response;
  }

  static async buscarPredioPorChave(key, value) {
    const response = await Predios.find({ [key]: value });
    return response;
  }

  static async atualizarPredioPorId(id, input) {
    await Predios.findOneAndUpdate({ _id: id }, input);
    return { message: "Sucesso na atualização de registro", id };
  }

  static async deletarPredioPorId(id) {
    await Predios.findOneAndDelete({ _id: id });
    return { message: "Sucesso na exclusão do registro", id };
  }

  static async deletarPredioPorChave(key, value) {
    await Predios.findOneAndDelete({ [key]: value });
    return { message: "Sucesso na exclusão do registro", key, value };
  }

}
module.exports = PrediosRepository;
