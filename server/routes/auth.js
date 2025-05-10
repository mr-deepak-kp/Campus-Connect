import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Student from '../models/Student.js';

const router = express.Router();

//route for register a user by admin panel
router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const existingUser =  await Student.findOne({email});
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
           student.save();
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
        const user = await User.findOne({ email }) || await Student.findOne({email});
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
            const students = await Student.find({});
            return res.json(students);
        }
      const users = await User.find({role:`${userType}`}).select('-password'); // exclude passwords
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});
export default router;