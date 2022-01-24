const express= require("express");
const app=express();
const sequelize=require("./database")
const Customer=require("./models/customer");
const Order =require("./models/order");
Customer.hasMany(Order);
const bodyParser=require ("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let customerId=null;
app.get("/", (req,res)=>{
     res.send("this is home page");
})
// Get Users
app.get("/get",async (req,res)=>{
    console.log("Here we are getting ");
    try {
        const users = await Customer.findAll({
            attributes : ['id','name']
        }
        );
        users.map((curele)=>{
            console.log("from map",curele.name);
            
            res.write(curele.name);
        })
         res.send();
    } catch (error) {
        console.log("error->",error)
    }
  
})

app.post("/send",async (req,res)=>{
     try {
        sequelize.sync({force:false})
        .then(()=>{
            console.log("syc successfully")
            Customer.create({
                name:req.body.name,
               email:req.body.email
            }).then((customer)=>{
                customerId=customer.id;
                console.log(customerId)
             console.log("customer",customer);
            }).then((order)=>{
                console.log("order is",order);
             
            })
        }).catch((err)=>{
            console.log(err)
        ;})
        res.send("data entered successfully");
     } catch (error) {
           console.log(error)
     }
})
// Find By Specific Id 
app.post("/update" , async (req,res)=>{
    const customerId=req.body.id;
    console.log(req.body.id);
    const data=Customer.findAll({where :{ id:customerId},
        attributes: ['id','name']});
    data.then((data)=>{
        console.log(data);
        res.send(data);
    })
})
app.listen(3004,()=>{
    console.log("listning on 3004")
})