import 'dotenv/config';
import { Sequelize } from 'sequelize';

const sequelizeConnection: Sequelize = new Sequelize({
  dialect: 'postgres',
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: +process.env.DB_PORT,
  logging: false,
});

export default sequelizeConnection;
