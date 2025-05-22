import express from 'express';
import bcrypt, { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Student from '../models/Student.js';
import Admin from '../models/Admin.js';
import Teacher from '../models/Teacher.js';
import Attendance from '../models/Attendance.js';
const router = express.Router();

//route for register a user by admin panel
router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const existingUser =  await Student.findOne({email}) || await Admin.findOne({email}) || await Teacher.findOne({email});
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        if(role==='student'){
            const {rollNo,branch,course,batch} = req.body;
            const student = new Student({
            name,
            email,
            password:hashedPassword,
            rollNo,
            branch,
            course,
            batch,
            role,
           });
           await student.save();
        }
        if(role==='admin'){
            const {course,branch,adminId} = req.body;
            const admin = new Admin({
                name,
                email,
                password:hashedPassword,
                role,
                course,
                branch,
                adminId
            });
            await admin.save();
        }
        if(role==='teacher'){
            const {course,branch,teacherId,courseAssigned} = req.body;
            const teacher = new Teacher({
                name,
                email,
                password:hashedPassword,
                role,
                course,
                branch,
                teacherId,
                courseAssigned,
            });
            await teacher.save();
        }
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//route for login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Admin.findOne({email}) || await Student.findOne({email}) || await Teacher.findOne({email});
        if (!user) return res.status(400).json({ message: 'User not found' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({ token, user});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// GET /api/auth/users for finding all the required users
router.get('/users/:userType', async (req, res) => {
    const {userType} = req.params;
    try {
        if(userType==='student'){
            const students = await Student.find({}).select('-password');
            return res.json(students);
        }
        if(userType==='teacher'){
            const teachers = await Teacher.find({}).select('-password');
            return res.json(teachers);
        }
        if(userType==='admin'){
            const admins = await Admin.find({}).select('-password');
            return res.json(admins);
        }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

router.get('/summary', async (req, res) => {
  try {
    // Step 1: Get all students
    const students = await Student.find();

    // Step 2: Get all attendance records
    const attendanceRecords = await Attendance.find();

    // Step 3: Build summary for each student
    const summary = students.map((student) => {
      const studentAttendance = attendanceRecords.filter(
        (record) => record.student.toString() === student._id.toString()
      );

      const present = studentAttendance.filter((r) => r.status === 'present').length;
      const total = studentAttendance.length;
      const percentage = total > 0 ? ((present / total) * 100).toFixed(2) : 0;

      return {
        name: student.name,
        email: student.email,
        branch: student.branch,
        course: student.course,
        present,
        total,
        percentage,
      };
    });

    res.json(summary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

export default router;