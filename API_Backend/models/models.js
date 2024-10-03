const mongoose = require('mongoose');

// Define o esquema dod ativos
const AtivosSchema = new mongoose.Schema({
  nome: { type: String, require: true },
  categoria: { type: String, require: true },
  data_aquisicao: { type: Number },
  custo_aquisicao: { type: String, require: true },
  localizacao: { type: String, require: true },
});

// Exportando o modelo
module.exports = mongoose.model('models', AtivosSchema);