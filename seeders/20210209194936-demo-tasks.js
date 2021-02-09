'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tasks",
      [
        {
          name: "vacuum living room",
          frequency: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "grocery shop",
          frequency: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "clean litterboxes",
          frequency: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "pay taxes",
          frequency: 365,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "run dishwasher",
          frequency: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "do laundry",
          frequency: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "water plants in front room",
          frequency: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "water plants upstairs",
          frequency: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "win superbowl",
          frequency: 365,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "take out trash",
          frequency: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "sweep the kitchen",
          frequency: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "mop the dining room",
          frequency: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dust the living room",
          frequency: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dust the dining room",
          frequency: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dust the bedroom",
          frequency: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "feed dog",
          frequency: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "feed cat",
          frequency: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "walk dog",
          frequency: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "play with cat",
          frequency: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
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
