const Sequelize =require("sequelize");
const sequelize=new Sequelize("Nodejs","postgres","Amit1987",{
    dialect:"postgres",
    host:"db",
    port:"5432",
    pool: {
        max: 9,
        min: 0,
        idle: 10000
      }
})
 
sequelize.authenticate().then(()=>{
    console.log("yeee database is connected successfully");
}).catch((err)=>{
    console.log("err",err);
})
module.exports= sequelize;