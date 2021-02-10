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
      Task.belongsTo(models.User, { foreignKey: 'userId' })
      // Task.belongsTo(models.User, { 
      //   through: "UserTask",
      //   foreignKey: 'taskId',
      //   otherKey: 'userId',
      // });
    }
  };
  Task.init({
    name: DataTypes.STRING,
    frequency: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};