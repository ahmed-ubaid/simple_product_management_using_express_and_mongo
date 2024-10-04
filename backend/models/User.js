const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    userId:{
        type:String,
        required: true,
        unique: true,
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    products: [{  // Array of products posted by the user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    email:{
        type:String,
        required:true,
        unique: true,
    }
});

userSchema.virtual('fullname').get(function() {
    return `${this.firstname} ${this.lastname}`;
  });
//virtuals are not stored in the mongoDb database, but when we query the database it returns a value
  
const User=mongoose.model("User",UserSchema);
module.export=User;