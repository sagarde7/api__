const mongoose=require("mongoose");

const ProductSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            minlength:5
        },
        price:{
            type:Number,
            required:true

        },
        featured:{
            type:Boolean,
            default:false
        },
        rating:{
            type:Number
        },
        createdAt:{
            type:Date,
            default:Date.now()
        },
        company:{
            type:String,
            required:true,
            enum:{
                values:["apple","samsung","mi"],
                message:`{value} is not supported`
            }
        }

    }
)
module.exports=mongoose.model('Product',ProductSchema);