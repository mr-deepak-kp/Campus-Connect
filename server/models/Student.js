import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    },
    rollNo:{
        type:String,
        required:true,
        unique: true
    },
    batch:{
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
    role:{
        type:String,
        required:true,
    }
})

const Student = mongoose.model("Student",studentSchema);
export default Student;