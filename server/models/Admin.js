import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    adminId:{
        type:String,
        required:true,
    }
});

const Admin = mongoose.model("Admin",adminSchema);
export default Admin;