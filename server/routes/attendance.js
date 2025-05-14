import express from 'express';
import Attendance from '../models/Attendance.js';
import { Parser } from 'json2csv';
const router = express.Router();

//route for mark attendance
router.post('/', async (req, res) => {
    try {
      const attendanceList = req.body;
  
      const date = attendanceList[0]?.date;
      const markedBy = attendanceList[0]?.markedBy;
  
      const existing = await Attendance.findOne({ markedBy, date });
      if (existing) {
        return res.status(400).json({ message: "Attendance already submitted for today" });
      }
  
      const saved = await Attendance.insertMany(attendanceList);
      res.status(201).json(saved);
    } catch (err) {
      res.status(500).json({ message: "Error submitting attendance", err });
    }
});
  

// Get attendance for a student dashboard
router.get('/student/:id', async (req, res) => {
    try {
        const records = await Attendance.find({ student: req.params.id }).populate('markedBy', 'name');
        res.json(records);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all attendance (admin or teacher) dashboard
router.get('/', async (req, res) => {
    try {
        const records = await Attendance.find().populate('student', 'name email batch branch course').populate('markedBy', 'name');
        res.json(records);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//route for download csv file
router.get('/csv', async (req, res) => {
    try {
        const records = await Attendance.find()
        .populate('student', 'name email batch course branch')
        .populate('markedBy', 'name');
  
        // Flatten records for CSV for downloading csv file  
        const flatRecords = records.map((record) => ({
        studentName: record.student?.name || '',
        Email: record.student.email,
        Batch: record.student.batch,
        Course: record.student.course,
        Branch: record.student.branch,
        date: record.date,
        subject: record.subject,
        status: record.status,
        markedBy: record.markedBy?.name || '',
    }));
      const fields = ['studentName','Email','Batch','Course','Branch', 'date', 'subject', 'status', 'markedBy'];
      const parser = new Parser({ fields });
      const csv = parser.parse(flatRecords);
  
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=attendance_report.csv');
      res.status(200).send(csv);
    } catch (err) {
      res.status(500).json({ message: 'Failed to generate CSV' });
    }
});

// routes/attendance.js for check whether attendance is take or not in a day
router.get('/check', async (req, res) => {
    try {
      console.log("call");
      const { markedBy, date } = req.query;
      if(!date){
        const records = await Attendance.find({markedBy});
        console.log(records);
        return res.status(200).json({records});
      }
      const records = await Attendance.find({ markedBy, date });
      console.log(records);
      if (records.length > 0) {
        return res.status(200).json({ exists: true, records });
      } else {
        return res.status(200).json({ exists: false });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error checking attendance", error: err.message });
    }
});

// routes/attendance.js for update the attendance data
router.put('/update-today', async (req, res) => {
    try {
      const attendanceList = req.body;
      const date = attendanceList[0]?.date;
      const markedBy = attendanceList[0]?.markedBy;
  
      for (const record of attendanceList) {
        const { student, status, subject } = record;
        if(student=="undefined" || status=="undefined" || subject=="undefined") continue;
        await Attendance.findOneAndUpdate(
          { student, date, markedBy },
          { status, subject},
          { new: true, upsert: true }
        );
      }
  
      res.status(200).json({ message: "Attendance updated successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error updating attendance", error: err.message });
    }
});
  
  
export default router;