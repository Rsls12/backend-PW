// src/config/database.js
import { Sequelize } from 'sequelize';

const hostname = "localhost";
const username = "postgres";
const password = "Juanzafi1$";
const port = 5432;
const dialect = "postgres";
const database = "prograWebProyDB";

const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host: hostname,
    dialect: dialect,
    port: port,
    operatorsAliases: false,
  }
);

export default sequelize;
