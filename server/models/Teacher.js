import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
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
    teacherId:{
        type:String,
        required:true,
    },
    courseAssigned:{
        type:Number,
        required:true,
    }
});

const Teacher = mongoose.model("Teacher",teacherSchema);
export default Teacher;