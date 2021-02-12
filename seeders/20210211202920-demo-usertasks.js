'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "UserTasks",
      [
        {
          assignedUserId: 1,
          taskId: 1
        },
        {
          assignedUserId: 1,
          taskId: 2
        },
        {
          assignedUserId: 1,
          taskId: 3
        },
        {
          assignedUserId: 1,
          taskId: 4
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
