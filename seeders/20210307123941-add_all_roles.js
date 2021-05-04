'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('ROLES_TABLEs', [
       {
         id:1,
         name: 'superadmin',
         createdAt:new Date(),
         updatedAt:new Date()

      }, 
      {
        id:2,
        name: 'admin',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id:3,
        name: 'teacher',
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('ROLES_TABLEs', null, {});
     
  }
};
