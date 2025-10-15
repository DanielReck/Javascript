const express = require('express');
const path = require('path');

// Middleware para arquivos estáticos
app.use(express.static('public'));

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));

// Rotas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const indexRoutes = require('./routes/users');
app.use('/users', indexRoutes);

const indexRoutes = require('./routes/exports');
app.use('/exports', indexRoutes);


// Servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
