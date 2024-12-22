import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);


const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL Database connected');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

export { sequelize };
export default connectDB;
