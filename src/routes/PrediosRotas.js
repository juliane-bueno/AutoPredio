const PrediosRepository = require("../repository/PrediosRepository.js");

class PrediosRotas {
  static rotas(app) {
    app.post("/predios", async (req, res) => {
      try {
        const predio = req.body;
        const inserir = await PrediosRepository.criarPredio(predio);
        res.status(201).json(inserir);
      } catch (erro) {
        res.status(400).json({ message: erro.message });
      }
    });

    app.get("/predios", async (req, res) => {
      try {
        const predios = await PrediosRepository.buscarTodosPredios();
        res.status(200).json(predios);
      } catch (erro) {
        res.status(404).json(erro.message);
      }
    });

    app.get("/predios/:key/:data", async (req, res) => {
      try {
        const predio = await PrediosRepository.buscarPredioPorChave(
          req.params.key,
          req.params.data
        );
        if (!predio) {
          throw new Error("Chave e dados do prédio não foi encontrado");
        }
        res.status(200).json(predio);
      } catch (erro) {
        res.status(404).json({ message: erro.message, id: req.params.id });
      }
    });

    //TODO - Implementar a rota de atualização de prédios

    app.delete("/predios/:key/:data", async (req, res) => {
      try {
        const predio = await PrediosRepository.buscarPredioPorChave(
          req.params.key,
          req.params.data
        );
        if (!predio) {
          throw new Error("Prédio não encontrado");
        }
        const resposta = await PrediosRepository.deletarPredioPorChave(
          req.params.key,
          req.params.data
        );
        res.status(200).json(resposta);
      } catch (erro) {
        res.status(404).json({ message: erro.message, id: req.params.id });
      }
    });
  }
}
module.exports = PrediosRotas;
