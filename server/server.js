import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import attendanceRoutes from './routes/attendance.js';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();


// Middleware to parse JSON and URL-encoded data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Allow your frontend domain
app.use(cors({
  origin: 'https://campusconnect-frontend-iui5.onrender.com',
  credentials: true
}));


// Route
app.get('/',(req,res)=>{
  res.send("Working")
});

app.use('/api/auth', authRoutes);
app.use('/api/attendance', attendanceRoutes);

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
    console.log("DB is connected successfully");
}).catch((err) => console.log(err));

app.listen(5000, () => console.log(`Server running on port ${process.env.PORT}`));