module.exports = {

    clientes: (req, res) => {
        res.sendFile('clientes.html', { root: './views' });
    },

};

const path = require('path');

exports.telaLogin = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
};

exports.fazerLogin = (req, res) => {
  const { usuario, senha } = req.body;

  if (usuario === 'admin' && senha === '123') {
    res.redirect('/Cliente/Home');
  } else {
    res.send(`
      <h1 style="color:red;">Acesso negado!</h1>
      <p>Usuário ou senha incorretos.</p>
      <a href="/Cliente/Login">Voltar</a>
    `);
  }
};
