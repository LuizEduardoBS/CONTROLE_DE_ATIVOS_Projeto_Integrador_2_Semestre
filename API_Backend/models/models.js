const mongoose = require('mongoose');

// Define o esquema dod ativos
const AtivosSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  categoria: { type: String, required: true },
  data_aquisicao: { type: Date, required: true },
  custo_aquisicao: { type: String, required: true },
  localizacao: { type: String, required: true },
});

// Exportando o modelo
module.exports = mongoose.model('ativos', AtivosSchema);