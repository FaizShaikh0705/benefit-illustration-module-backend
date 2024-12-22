import { sequelize } from '../config/db.js';
import UserModel from './User.js';
import PolicyModel from './Policy.js';

export const User = UserModel(sequelize);
export const Policy = PolicyModel(sequelize);

sequelize.sync({ alter: true }).then(() => {
  console.log('Tables synced');
});
