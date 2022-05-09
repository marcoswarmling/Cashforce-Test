const express = require('express');
const { users } = require('./models');

const app = express();
app.use(express.json());
app.listen(3000, () => console.log('ouvindo porta 3000!'));

// Este endpoint usa o método findAll do Sequelize para retorno todos os users.
app.get('/', async (_req, res) => {
  try {
    const user = await users.findAll();

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

// ...
