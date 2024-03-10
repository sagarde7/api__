const mongoose=require('mongoose');

// uri="mongodb+srv://srdj50500:WNIuZCR5AcPqZJHs@sagar.pmafahq.mongodb.net/sagar?retryWrites=true&w=majority&appName=sagar"
const connectDB=(uri)=>{
    console.log("connect hogya");
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports= connectDB;