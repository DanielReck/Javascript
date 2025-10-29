const path = require('path');

module.exports = {
    clientes: (req, res) => {
        res.sendFile('clientes.html', { root: './views' });
    },

    index: (req, res) => {
        res.sendFile('clientes.html', { root: './views' });
    },

    formCadastrar: (req, res) => {
        res.sendFile('formCadastrarCliente.html', { root: './views' });
    },

    formulario: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    },

    loginCliente: (req, res) => {
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
    }
};
