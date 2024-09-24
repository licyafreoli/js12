const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const livrosFilePath = path.join(__dirname, '../data/livros.json');

// Função para ler os livros do arquivo JSON
const getLivros = () => {
  const data = fs.readFileSync(livrosFilePath);
  return JSON.parse(data);
};

// Função para salvar os livros no arquivo JSON
const saveLivros = (livros) => {
  fs.writeFileSync(livrosFilePath, JSON.stringify(livros, null, 2));
};

// Listar todos os livros
router.get('/', (req, res) => {
  const livros = getLivros();
  res.json(livros);
});

// Adicionar novo livro
router.post('/', (req, res) => {
  const livros = getLivros();
  const novoLivro = req.body;
  novoLivro.id = livros.length + 1;
  livros.push(novoLivro);
  saveLivros(livros);
  res.status(201).json(novoLivro);
});

// Buscar livros por título ou autor
router.get('/search', (req, res) => {
  const { query } = req.query;
  const livros = getLivros();
  const resultado = livros.filter(livro =>
    livro.titulo.toLowerCase().includes(query.toLowerCase()) ||
    livro.autor.toLowerCase().includes(query.toLowerCase())
  );
  res.json(resultado);
});

module.exports = router;
