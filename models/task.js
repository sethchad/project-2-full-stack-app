'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User, { foreignKey: 'createdByUserId' });
      // Task.belongsToMany(models.User, { 
      //   through: "UserTask",
      //   foreignKey: 'taskId',
      //   otherKey: 'assignedUserId',
      // }); 
    }
  };
  Task.init({
    name: DataTypes.STRING,
    frequency: DataTypes.INTEGER,
    createdByUserId: DataTypes.INTEGER,
    assignedToUser: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};