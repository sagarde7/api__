require("dotenv").config();
const { connect } = require("mongoose");
const connectDB=require("./db/connect");
const product=require("./models/products");
const Productjson=require("./products.json");

const start= async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await product.deleteMany();
        await product.create(Productjson);
        console.log("success");
    }
    catch(err){
        console.log("err");
    }
}
start()