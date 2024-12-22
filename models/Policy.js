import { DataTypes } from 'sequelize';

const PolicyModel = (sequelize) => {
  return sequelize.define('Policy', {
    policyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    policyType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    premium: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    benefits: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

export default PolicyModel;
