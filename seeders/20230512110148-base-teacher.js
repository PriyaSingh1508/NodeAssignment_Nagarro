'use strict';
/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcryptjs");
module.exports = {
  async up (queryInterface, Sequelize) {
  
   const password = await bcrypt.hash("12345678",10)
    await queryInterface.bulkInsert('Teachers', [{
       firstName: 'Teacher',
       lastName: 'User',
       email: 'teacher@gmail.com',
       password: password,
       createdAt: new Date(),
       updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
   
  }
};
