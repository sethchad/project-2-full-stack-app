'use strict';

const { BelongsToMany } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          nameFirst: Mike,
          nameLast: Brady,
          username: mike,
          password: mikeb,
          groupId: null,
        },
        {
          nameFirst: Carol,
          nameLast: Brady,
          username: carol,
          password: carol,
          groupId: null
        },
        {
          nameFirst: Marcia,
          nameLast: Brady,
          username: marcia,
          password: marcia,
          groupId: null
        },
        {
          nameFirst: Jan,
          nameLast: Brady,
          username: jan,
          password: jan,
          groupId: null
        },
        {
          nameFirst: Cindy,
          nameLast: Brady,
          username: cindy,
          password: cindy,
          groupId: null
        },
        {
          nameFirst: Greg,
          nameLast: Brady,
          username: greg,
          password: greg,
          groupId: null
        },
        {
          nameFirst: Peter,
          nameLast: Brady,
          username: peter,
          password: peter,
          groupId: null
        },
        {
          nameFirst: Bobby,
          nameLast: Brady,
          username: bobby,
          password: bobby,
          groupId: null
        },
        {
          nameFirst: Alice,
          nameLast: Nelson,
          username: alice,
          password: alice,
          groupId: null
        },
        {
          nameFirst: Tom, 
          nameLast: Brady,
          username: bestqbever,
          password: superbowl,
          groupId: null
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
