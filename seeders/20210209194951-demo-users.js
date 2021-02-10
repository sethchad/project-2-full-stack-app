'use strict';

// const { BelongsToMany } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          nameFirst: "Mike",
          nameLast: "Brady",
          username: "mike",
          password: "mike",
          groupId: 2
        },
        {
          nameFirst: "Carol",
          nameLast: "Brady",
          username: "carol",
          password: "carol",
          groupId: 1
        },
        {
          nameFirst: "Marcia",
          nameLast: "Brady",
          username: "marcia",
          password: "marcia",
          groupId: 1
        },
        {
          nameFirst: "Jan",
          nameLast: "Brady",
          username: "jan",
          password: "jan",
          groupId: 1
        },
        {
          nameFirst: "Cindy",
          nameLast: "Brady",
          username: "cindy",
          password: "cindy",
          groupId: 1
        },
        {
          nameFirst: "Greg",
          nameLast: "Brady",
          username: "greg",
          password: "greg",
          groupId: 2
        },
        {
          nameFirst: "Peter",
          nameLast: "Brady",
          username: "peter",
          password: "peter",
          groupId: 2
        },
        {
          nameFirst: "Bobby",
          nameLast: "Brady",
          username: "bobby",
          password: "bobby",
          groupId: 2
        },
        {
          nameFirst: "Alice",
          nameLast: "Nelson",
          username: "alice",
          password: "alice",
          groupId: 1
        },
        {
          nameFirst: "Tom", 
          nameLast: "Brady",
          username: "bestqbever",
          password: "superbowl",
          groupId: 3
        },
        {
          nameFirst: "Peyton", 
          nameLast: "Manning",
          username: "retired",
          password: "takiniteasy",
          groupId: 3
        },
        {
          nameFirst: "Drew", 
          nameLast: "Brees",
          username: "gosaints",
          password: "gopurdue",
          groupId: 3
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
