'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tasks",
      [
        {
          name: "vacuum living room",
          frequency: 7
        },
        {
          name: "grocery shop",
          frequency: 5
        },
        {
          name: "clean litterboxes",
          frequency: 1
        },
        {
          name: "pay taxes",
          frequency: 365
        },
        {
          name: "run dishwasher",
          frequency: 3
        },
        {
          name: "do laundry",
          frequency: 6
        },
        {
          name: "water plants in front room",
          frequency: 8
        },
        {
          name: "water plants upstairs",
          frequency: 8
        },
        {
          name: "win superbowl",
          frequency: 365
        },
        {
          name: "take out trash",
          frequency: 4
        },
        {
          name: "sweep the kitchen",
          frequency: 4
        },
        {
          name: "mop the dining room",
          frequency: 14
        },
        {
          name: "dust the living room",
          frequency: 28
        },
        {
          name: "dust the dining room",
          frequency: 28
        },
        {
          name: "dust the bedroom",
          frequency: 28
        },
        {
          name: "feed dog",
          frequency: 1
        },
        {
          name: "feed cat",
          frequency: 1
        },
        {
          name: "walk dog",
          frequency: 1
        },
        {
          name: "play with cat",
          frequency: 1
        },
        {
          name: "enjoy retirement",
          frequency: 1
        },
        {
          name: "open Dunkin Donuts",
          frequency: 60
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
