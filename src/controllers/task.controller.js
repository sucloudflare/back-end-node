const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { title, description } = req.body;
    const user_id = req.userId;

    if (!title) return res.status(400).json({ error: 'Título é obrigatório' });

    const [id] = await connection('tasks').insert({ title, description, user_id });
    return res.status(201).json({ id, title, description });
  },

  async index(req, res) {
    const user_id = req.userId;
    const tasks = await connection('tasks')
      .where({ user_id })
      .select('id', 'title', 'description', 'done');

    return res.json(tasks);
  },

  async update(req, res) {
    const { id } = req.params;
    const { title, description, done } = req.body;
    const user_id = req.userId;

    const task = await connection('tasks')
      .where({ id, user_id })
      .first();

    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });

    await connection('tasks')
      .where({ id })
      .update({ title, description, done });

    return res.json({ message: 'Tarefa atualizada' });
  },

  async delete(req, res) {
    const { id } = req.params;
    const user_id = req.userId;

    const task = await connection('tasks')
      .where({ id, user_id })
      .first();

    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });

    await connection('tasks')
      .where({ id })
      .del();

    return res.json({ message: 'Tarefa removida' });
  }
};
