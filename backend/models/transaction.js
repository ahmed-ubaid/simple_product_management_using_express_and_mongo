const mongoose=require("mongoose");

const transactionSchema=new mongoose.Schema({
    transacionId:{
        type:String,
        required:true,
        unique:true
    },
    sellerId:{
        type:String,
        required:true,
        unique:true
    },
    buyerId:{
        type:String,
        required:true,
        unique:true
    },
    amount:{
        type:Number,
        required:true,
    },
    content:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
});

const Transaction=mongoose.model("Transaction",transactionSchema);
module.export=Transaction;