'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('FEE_STRUCTURE_TABLEs', 
      [
         {
           class: "PREP",
           admission: 7000,
           monthly: 1200,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           class: "NUR",
           admission: 7000,
           monthly: 1200,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           class: "KG",
           monthly: 7000,
           admission: 1200,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           class: "I",
           admission: 8000,
           monthly: 1400,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           class: "II",
           admission: 8000,
           monthly: 1400,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           class: "III",
           admission: 9000,
           monthly: 1500,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           class: "IV",
           admission: 9000,
           monthly: 1500,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           class: "V",
           admission: 9000,
           monthly: 1500,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           class: "VI",
           admission: 9500,
           monthly: 1600,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           class: "VII",
           admission: 9500,
           monthly: 1600,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           class: "VIII",
           admission: 9500,
           monthly: 1600,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           class: "IX",
           admission: 10000,
           monthly: 1650,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
         {
           class: "X",
           admission: 10000,
           monthly: 1700,
           createdAt: new Date(),
           updatedAt: new Date(),
         },
       ], {});
 
        
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('FEE_STRUCTURE_TABLEs', null, {});
     
  }
};
