import React from 'react';
import { Link } from 'react-router-dom';

const UndergraduatePrograms = () => {
    const undergraduatePrograms = [
        {
            name: "Bachelor of Computer Applications (BCA)",
            duration: "3 Years",
            eligibility: "10+2 with 50% aggregate",
            description: "A comprehensive program covering computer science fundamentals, programming, and software development.",
            courses: [
                "Programming Fundamentals", "Data Structures and Algorithms", "Database Management Systems",
                "Computer Networks", "Software Engineering", "Web Development",
                "Mobile Application Development", "Cloud Computing", "Artificial Intelligence", "Project Management"
            ],
            career: [
                "Software Developer", "Web Developer", "Mobile App Developer",
                "System Analyst", "Database Administrator", "IT Consultant"
            ]
        },
        {
            name: "Bachelor of Information Technology (BIT)",
            duration: "3 Years",
            eligibility: "10+2 with 50% aggregate",
            description: "Covers IT fundamentals, software development, and emerging technologies.",
            courses: [
                "IT Infrastructure", "Network Security", "Cloud Computing", "Database Systems",
                "E-Commerce Systems", "ERP Systems", "IT Project Management", "Digital Forensics"
            ],
            career: [
                "IT Consultant", "Network Engineer", "Cloud Architect",
                "Security Specialist", "ERP Specialist", "Technical Support Manager"
            ]
        },
        {
            name: "Bachelor of Science in Information Systems (BSc IS)",
            duration: "3 Years",
            eligibility: "10+2 with 50% aggregate",
            description: "Focuses on information systems and business technology integration.",
            courses: [
                "Business Systems Analysis", "Database Management", "Enterprise Resource Planning",
                "E-Commerce Systems", "Project Management", "Business Intelligence",
                "Data Analytics", "ERP Systems", "Digital Marketing"
            ],
            career: [
                "Business Analyst", "Systems Analyst", "IT Project Manager",
                "ERP Consultant", "Data Analyst", "Digital Marketing Specialist"
            ]
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Undergraduate Programs</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Explore our undergraduate programs and start your journey in technology
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {undergraduatePrograms.map((program, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                            <h2 className="text-xl font-semibold text-indigo-700">{program.name}</h2>
                            <p className="mt-2 text-sm text-gray-700"><strong>Duration:</strong> {program.duration}</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Eligibility:</strong> {program.eligibility}</p>
                            <p className="text-gray-600 mb-4">{program.description}</p>

                            <div className="mb-4">
                                <h3 className="font-medium text-gray-800">Courses</h3>
                                <ul className="list-disc list-inside text-sm text-gray-700">
                                    {program.courses.map((course, i) => (
                                        <li key={i}>{course}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="font-medium text-gray-800">Career Opportunities</h3>
                                <ul className="list-disc list-inside text-sm text-gray-700">
                                    {program.career.map((career, i) => (
                                        <li key={i}>{career}</li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/admissions/undergraduate" className="inline-block mt-4 text-indigo-600 hover:underline font-medium">
                                Apply Now →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UndergraduatePrograms;