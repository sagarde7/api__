const Product=require("../models/products")
const getAllProducts=async (req,res)=>{
    const {company,name,featured,sort,select}=req.query;
    const queryObject={};
    if(company){
        queryObject.company=company;
    }
    if(name){
        queryObject.name={$regex:name,$options:"i"};
    }
    if(featured){
        queryObject.featured={$regex:featured,$options:"i"}
    }
    let apidata=Product.find(queryObject);
    if(sort){
        let sortFix=sort.replace(","," ");
        apidata=apidata.sort(sortFix);
    }
    if(select){
        let selectFix=select.split(",").join(" ");
        apidata=apidata.select(selectFix);
    }
    let page=Number(req.query.page) || 1;
    let limit=Number(req.query.limit) || 4;
    let skip=(page-1)*limit;
    apidata=apidata.skip(skip).limit(limit);
    const data=await apidata;
    res.status(200).json({data});
};

const getAllProductsTesting=async(req,res)=>{
    const data=await Product.find(req.query);
    console.log(req.query);
    res.status(200).json({data})
};

module.exports={getAllProducts,getAllProductsTesting};