const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connection = require('../database/connection');
const { userSchema } = require('../validators/user.validator');

module.exports = {
  async register(req, res) {
    const { name, email, password } = req.body;

    const { error } = userSchema.validate({ name, email, password });
    if (error) return res.status(400).json({ error: error.details[0].message });

    const userExists = await connection('users').where({ email }).first();
    if (userExists) return res.status(400).json({ error: 'Email já cadastrado' });

    const hashedPassword = await bcrypt.hash(password, 8);

    const [id] = await connection('users').insert({
      name,
      email,
      password: hashedPassword
    });

    return res.status(201).json({ id, name, email });
  },

  async login(req, res) {
    const { email, password } = req.body;

    const user = await connection('users').where({ email }).first();
    if (!user) return res.status(400).json({ error: 'Credenciais inválidas' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: 'Credenciais inválidas' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    return res.json({ user: { id: user.id, name: user.name, email: user.email }, token });
  },

  async index(req, res) {
    const users = await connection('users').select('id', 'name', 'email');
    return res.json(users);
  }
};
