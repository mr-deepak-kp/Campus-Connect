import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['present', 'absent'],
        default: 'present',
    },
    subject: {
        type: String,
        required: true,
    },
    markedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher', // typically a teacher
    }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;