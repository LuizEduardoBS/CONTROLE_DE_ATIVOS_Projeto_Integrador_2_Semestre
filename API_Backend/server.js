const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Inicialização do app
const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb+srv://luized:Luiz123@cluster0.u7srm.mongodb.net/gerenciamentoativos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Banco de dados MongoDB CONECTADO'))
.catch(err => console.error('Erro ao se conectar ao banco de dados MongoDB'));

// Importando as rotas da aplicação
const ativosRoutes = require('./routes/routes');
app.use('/api/routes', ativosRoutes);

// Porta do servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});