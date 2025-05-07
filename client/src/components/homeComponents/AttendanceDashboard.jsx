import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AttendanceDashboard() {
    const [attendanceData, setAttendanceData] = useState({
        students: [],
        faculty: []
    });
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedType, setSelectedType] = useState('students');
    const [newEntry, setNewEntry] = useState({
        name: '',
        rollNumber: '',
        present: true
    });
    const navigate = useNavigate();

    // Mock data for demonstration
    useEffect(() => {
        const mockStudents = [
            { id: 'S001', name: 'John Doe', rollNumber: '12345', present: true },
            { id: 'S002', name: 'Jane Smith', rollNumber: '12346', present: false },
            { id: 'S003', name: 'Bob Johnson', rollNumber: '12347', present: true }
        ];
        
        const mockFaculty = [
            { id: 'F001', name: 'Dr. Smith', present: true },
            { id: 'F002', name: 'Prof. Johnson', present: false }
        ];

        setAttendanceData({ students: mockStudents, faculty: mockFaculty });
    }, []);

    const toggleAttendance = (type, id) => {
        setAttendanceData(prevData => {
            const updated = [...prevData[type]];
            const index = updated.findIndex(item => item.id === id);
            if (index !== -1) {
                updated[index].present = !updated[index].present;
            }
            return { ...prevData, [type]: updated };
        });
    };

    const handleAddEntry = () => {
        const newId = selectedType === 'students' ? `S${Math.floor(Math.random() * 1000)}` : `F${Math.floor(Math.random() * 1000)}`;
        const newEntry = {
            id: newId,
            name: newEntry.name,
            present: newEntry.present
        };

        setAttendanceData(prevData => ({
            ...prevData,
            [selectedType]: [...prevData[selectedType], newEntry]
        }));
        setShowAddModal(false);
        setNewEntry({ name: '', id: '', present: true });
    };

    const handleDeleteEntry = (type, id) => {
        if (window.confirm('Are you sure you want to delete this entry?')) {
            setAttendanceData(prevData => ({
                ...prevData,
                [type]: prevData[type].filter(item => item.id !== id)
            }));
        }
    };

    return (
        <div className="attendance-dashboard">
            <h2>Attendance Dashboard</h2>
            
            <div className="attendance-filter">
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
                <Link to="/attendance/manage" className="manage-link">
                    Manage Attendance
                </Link>
                <button onClick={() => setShowAddModal(true)} className="add-button">
                    Add New Entry
                </button>
                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="type-select"
                >
                    <option value="students">Students</option>
                    <option value="faculty">Faculty</option>
                </select>
            </div>

            {showAddModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Add New Entry</h3>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleAddEntry();
                        }}>
                            <div className="form-group">
                                <label>Serial Number:</label>
                                <input
                                    type="text"
                                    value={newEntry.id}
                                    onChange={(e) => setNewEntry({ ...newEntry, id: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    value={newEntry.name}
                                    onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Roll Number:</label>
                                <input
                                    type="text"
                                    value={newEntry.rollNumber}
                                    onChange={(e) => setNewEntry({ ...newEntry, rollNumber: e.target.value })}
                                    required
                                    pattern="[0-9]+"
                                />
                            </div>
                            <div className="form-group">
                                <label>Status:</label>
                                <select
                                    value={newEntry.present ? 'present' : 'absent'}
                                    onChange={(e) => setNewEntry({ ...newEntry, present: e.target.value === 'present' })}
                                >
                                    <option value="present">Present</option>
                                    <option value="absent">Absent</option>
                                </select>
                            </div>
                            <div className="modal-buttons">
                                <button type="submit" className="submit-button">Add</button>
                                <button type="button" onClick={() => setShowAddModal(false)} className="cancel-button">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="attendance-status">
                <div className="status-section">
                    <h3>Current Status</h3>
                    <div className="status-stats">
                        <div className="status-item">
                            <div className="status-count present">
                                {attendanceData.students.filter(student => student.present).length + 
                                 attendanceData.faculty.filter(faculty => faculty.present).length}
                            </div>
                            <div className="status-label">Present</div>
                        </div>
                        <div className="status-item">
                            <div className="status-count absent">
                                {attendanceData.students.filter(student => !student.present).length + 
                                 attendanceData.faculty.filter(faculty => !faculty.present).length}
                            </div>
                            <div className="status-label">Absent</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="attendance-sections">
                <div className="attendance-section">
                    <h3>Student Attendance</h3>
                    <div className="attendance-list">
                        {attendanceData.students.map(student => (
                            <div key={student.id} className="attendance-item">
                                <div className="student-info">
                                    <span className="serial-number">{student.id}</span>
                                    <span className="attendance-name">{student.name}</span>
                                    <span className="roll-number">Roll No: {student.rollNumber}</span>
                                </div>
                                <div className="attendance-actions">
                                    <button
                                        className={`attendance-toggle ${student.present ? 'present' : 'absent'}`}
                                        onClick={() => toggleAttendance('students', student.id)}
                                    >
                                        {student.present ? 'Present' : 'Absent'}
                                    </button>
                                    <button
                                        onClick={() => handleDeleteEntry('students', student.id)}
                                        className="delete-button"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="attendance-section">
                    <h3>Faculty Attendance</h3>
                    <div className="attendance-list">
                        {attendanceData.faculty.map(faculty => (
                            <div key={faculty.id} className="attendance-item">
                                <span className="attendance-name">{faculty.name}</span>
                                <button
                                    className={`attendance-toggle ${faculty.present ? 'present' : 'absent'}`}
                                    onClick={() => toggleAttendance('faculty', faculty.id)}
                                >
                                    {faculty.present ? 'Present' : 'Absent'}
                                </button>
                                <button
                                    onClick={() => handleDeleteEntry('faculty', faculty.id)}
                                    className="delete-button"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AttendanceDashboard;
