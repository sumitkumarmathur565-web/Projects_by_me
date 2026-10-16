import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    message:{type  :String ,  required  :true},
    sender:{type: String , required  :true},
    receiver : { type : String , required : true}
}, {timestamps: true});


const messageModel = mongoose.model("message" , messageSchema);

export default messageModel