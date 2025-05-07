import React from 'react';
import { Link } from 'react-router-dom';

const GraduateAdmissions = () => {
    const graduateCourses = [
        {
            name: "Master of Computer Applications (MCA)",
            duration: "2 Years",
            eligibility: "BCA / BSc / BCom with 50% aggregate",
            description: "An advanced program focusing on software development, database systems, and IT management."
        },
        {
            name: "Master of Science in Computer Science (MSc CS)",
            duration: "2 Years",
            eligibility: "BSc / BTech with 50% aggregate",
            description: "An in-depth study of computer science, emphasizing research and innovation."
        },
        {
            name: "Master of Technology (M.Tech) in Computer Science", 
            duration: "2 Years",
            eligibility: "BE / BTech with 60% aggregate",
            description: "A specialized program covering advanced computer science topics and research methodologies."
        },
        {
            name: "Master of Science in Information Technology (MSc IT)",
            duration: "2 Years",
            eligibility: "BSc / BTech with 50% aggregate",
            description: "Focuses on IT infrastructure, system analysis, and project management."
        },
        {
            name: "Master of Business Administration (MBA) in IT", 
            duration: "2 Years",
            eligibility: "Graduation with 50% aggregate",
            description: "Combines IT expertise with business management strategies and leadership skills."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Graduate Admissions</h2>
                    <p className="mt-2 text-gray-600">Advance your career with our specialized graduate programs and research opportunities.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {graduateCourses.map((course, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{course.name}</h3>
                            <div className="text-gray-600 text-sm mb-2">
                                <p><strong>Duration:</strong> {course.duration}</p>
                                <p><strong>Eligibility:</strong> {course.eligibility}</p>
                            </div>
                            <p className="text-gray-700 mb-4 text-sm">{course.description}</p>
                            <Link to="/admissions/graduate/application">
                                <button className="mt-auto inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                                    Apply Now
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GraduateAdmissions;