const Sequelize =require("sequelize");
const sequelize=require("../database");
const Customer =sequelize.define("customer",{
  id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true
  },
  name:{
     type:Sequelize.STRING,
     allowNull:false
  },
  email:{
      type:Sequelize.STRING,
      allowNull:false
  }
});
module.exports=Customer;