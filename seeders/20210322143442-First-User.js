'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('USERS_TABLEs', [
       {
         id:1,
         email: 'admin@gmail.com',
         password:'$2a$10$r20Qq1IuMCStKivx3xyA..Ccemrmubt3bzfwew8PDNynUw1WOB4hK',
         role_id: 1,
         createdAt:new Date(),
         updatedAt:new Date()

      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('USERS_TABLEs', null, {});
     
  }
};
