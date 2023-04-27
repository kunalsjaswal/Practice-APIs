import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    nationality:{
        type:String,
        require: true
    },
    age:{
        type:Number,
        require: true
    }
    
})

const userData = mongoose.model("user data", userSchema)

export default userData
