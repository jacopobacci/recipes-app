const knex = require('knex');

const connectedKnex = knex({
  client: 'sqlite3',
  connection: {
    filename: 'db/recipes.sqlite3',
  },
});

module.exports = connectedKnex;

// CREATE TABLE "recipes" ("id" INTEGER, "title" TEXT, "content" TEXT, "ingredients" TEXT, "rating" INTEGER, PRIMARY KEY("id" AUTOINCREMENT));
