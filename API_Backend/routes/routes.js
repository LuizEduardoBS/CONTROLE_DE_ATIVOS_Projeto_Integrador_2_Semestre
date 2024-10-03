const express = require('express');
const models = require('../models/models');
const router = express.Router();

// Rota para POST
router.post('/', async (req, res) => {
  const { nome, categoria, data_aquisicao, custo_aquisicao, localizacao } = req.body;
  try {
    const newAtivo = new models({ nome, categoria, data_aquisicao, custo_aquisicao, localizacao });
    await newAtivo.save();
    res.status(201).json(newAtivo);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar ativo', error });
  }
});

// Rota para GET
router.get('/', async (req, res) => {
  try {
    const ativos = await models.find();
    res.status(200).json(ativos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar ativos', error });
  }
});

// Rota para PUT
router.put('/:id', async (req, res) => {
  const { nome, categoria, data_aquisicao, custo_aquisicao, localizacao } = req.body;
  try {
    const updatedAtivo = await models.findByIdAndUpdate(req.params.id, { nome, categoria, data_aquisicao, custo_aquisicao, localizacao }, { new: true });
    res.status(200).json(updatedAtivo);
  } catch (erro) {
    res.status(500).json({ message: 'Erro ao atualizar ativo', error });
  }
});

// Rota para DELETE
router.delete('/:id', async (req, res) => {
  try {
    await models.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Ativo deletado com seucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar ativo', error });
  }
});

// Exportando o roteador para ser usado no server.js
module.exports = router