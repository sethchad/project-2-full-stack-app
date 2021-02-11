'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Groups",
      [
        {
          name: "Unassigned"
        },
        {
          name: "Brady Ladies"
        },
        {
          name: "Brady Gentleman"
        },
        {
          name: "Quarterbacks"
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
