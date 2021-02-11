'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tasks",
      [
        {
          name: "vacuum living room",
          frequency: 7,
          createdByUserId: 1
        },
        {
          name: "grocery shop",
          frequency: 5,
          createdByUserId: 1
        },
        {
          name: "clean litterboxes",
          frequency: 1,
          createdByUserId: 1
        },
        {
          name: "pay taxes",
          frequency: 365,
          createdByUserId: 1
        },
        {
          name: "run dishwasher",
          frequency: 3,
          createdByUserId: 1
        },
        {
          name: "do laundry",
          frequency: 6,
          createdByUserId: 1
        },
        {
          name: "water plants in front room",
          frequency: 8,
          createdByUserId: 1
        },
        {
          name: "water plants upstairs",
          frequency: 8,
          createdByUserId: 1
        },
        {
          name: "win superbowl",
          frequency: 365,
          createdByUserId: 3
        },
        {
          name: "take out trash",
          frequency: 4,
          createdByUserId: 2
        },
        {
          name: "sweep the kitchen",
          frequency: 4,
          createdByUserId: 2
        },
        {
          name: "mop the dining room",
          frequency: 14,
          createdByUserId: 2
        },
        {
          name: "dust the living room",
          frequency: 28,
          createdByUserId: 2
        },
        {
          name: "dust the dining room",
          frequency: 28,
          createdByUserId: 2
        },
        {
          name: "dust the bedroom",
          frequency: 28,
          createdByUserId: 2
        },
        {
          name: "feed dog",
          frequency: 1,
          createdByUserId: 2
        },
        {
          name: "feed cat",
          frequency: 1,
          createdByUserId: 2
        },
        {
          name: "walk dog",
          frequency: 1,
          createdByUserId: 2
        },
        {
          name: "play with cat",
          frequency: 1,
          createdByUserId: 2
        },
        {
          name: "enjoy retirement",
          frequency: 1,
          createdByUserId: 4
        },
        {
          name: "open Dunkin Donuts",
          frequency: 60,
          createdByUserId: 5
        }
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
