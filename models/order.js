const Sequelize =require("sequelize");
const sequelize =require("../database")
const Order =sequelize.define("order",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    total:{
        type:Sequelize.INTEGER,
        primeryKey:true
    }
})
module.exports=Order;