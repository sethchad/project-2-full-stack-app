'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Group, { foreignKey: 'groupId' });
      User.hasMany(models.Task, { foreignKey: 'createdByUserId' });
      // User.hasMany(models.Task, { foreignKey: 'assignedToUserId' });
      // User.belongsToMany(models.Task, {through: 'UserTasks' });
      // User.belongsToMany(models.Task, { 
      //   through: "UserTasks",
      //   foreignKey: 'assignedUserId',
      //   otherKey: 'taskId',
      // });
    }
  };
  User.init({
    nameFirst: DataTypes.STRING,
    nameLast: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    groupId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};