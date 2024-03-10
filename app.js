require("dotenv").config();
const express=require('express');

const app = express();
const connectDB=require("./db/connect");
const PORT=process.env.PORT || 5000;

const products_routes=require("./routes/products");
app.get("/",(req,res)=>{
    res.send("Hi I am live");
})
// middle ware
app.use("/api/products",products_routes);

async function start(){
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log("connected");
        });
    }
    catch(error){
        app.listen(error);
    }
}
start();
// routes and controllers

// 