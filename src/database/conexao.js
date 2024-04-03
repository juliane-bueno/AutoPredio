const mongoose = require("mongoose");
require("dotenv").config();

class ConexaoDB {
  static async create() {
    const USER_DB = process.env.USER_DB;
    const DATABASE = process.env.DATABASE;
    const PASSWORD = process.env.PASSWORD;
    const CLUSTER = process.env.CLUSTER;

    await mongoose
      .connect(
        `mongodb+srv://${USER_DB}:${PASSWORD}@${CLUSTER}.${DATABASE}.mongodb.net/`
      )
      .then(() => console.log("Conectado ao banco de dados"))
      .catch((e) => console.log(e.message));
  }
}

module.exports = ConexaoDB;
