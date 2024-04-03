const Predios = require("../models/PrediosModel.js");
const Repository = require("./Repository.js");

class PrediosRepository extends Repository {
  static async criarPredio(predio) {
    const response = await Repository.create(Predios, predio);
    return response;
  }

  static async buscarTodosPredios() {
    const response = await Repository.findAll(Predios);
    return response;
  }

  static async buscarPredioPorId(id) {
    const response = await Repository.findById(Predios, id);
    return response;
  }

  static async buscarPredioPorChave(key, data) {
    const response = await Repository.findByKey(Predios, key, data);
    return response;
  }

  static async atualizarPredioPorId(id, data) {
    const response = await Repository.updateById(Predios, id, data);
    return response;
  }

  static async deletarPredioPorId(id) {
    const response = await Repository.deleteById(Predios, id);
    return response;
  }

  static async deletarPredioPorChave(key, data) {
    const response = await Repository.deleteByKey(Predios, key, data);
    return response;
  }
}
module.exports = PrediosRepository;
