const db = require('../data/db-config.js');

function getAll() {
  return db('user');
}

function getBy(filter) {
  return db('user')
    .where(filter)
    .first();
}

async function add(user) {
  const [id] = await db('user')
    .insert(user)
    .returning('id');

  return getBy({ id });
}

module.exports = {
  getAll,
  getBy,
  add
};