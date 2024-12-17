const Contato = require('../models/Contato');

module.exports = {
  async listarContatos(req, res) {
    try {
      const contatos = await Contato.findAll(); 
      res.status(200).json(contatos); 
    } catch (error) {
      console.error('Erro ao listar contatos:', error.message, error.stack);
      res.status(500).json({ error: 'Erro ao listar contatos.' });
    }
  },
  
  async criarContato(req, res) {
    try {
      const { nome, email, telefone } = req.body;
      const novoContato = await Contato.create({ nome, email, telefone });
      res.status(201).json(novoContato);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar contato.' });
    }
  },

  async editarContato(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, telefone } = req.body;
      await Contato.update({ nome, email, telefone }, { where: { id } }); 
      res.json({ message: 'Contato atualizado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao editar contato.' });
    }
  },

  async deletarContato(req, res) {
    try {
      const { id } = req.params;
      await Contato.destroy({ where: { id } });
      res.json({ message: 'Contato deletado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar contato.' });
    }
  },
};
