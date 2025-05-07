import React from 'react';
import { Link } from 'react-router-dom';

const GraduatePrograms = () => {
    const graduatePrograms = [
        {
            name: "Master of Computer Applications (MCA)",
            duration: "2 Years",
            eligibility: "BCA/BSc/BCom with 50% aggregate",
            description: "A comprehensive program focusing on advanced computer applications and software development.",
            courses: [
                "Advanced Data Structures",
                "Object-Oriented Programming",
                "Software Architecture",
                "Enterprise Application Development",
                "Cloud Computing",
                "Big Data Analytics",
                "Artificial Intelligence",
                "Machine Learning",
                "Research Methodology",
                "Project Management"
            ],
            career: [
                "Senior Software Developer",
                "Technical Lead",
                "Enterprise Architect",
                "Cloud Solutions Architect",
                "Data Scientist",
                "AI Specialist"
            ]
        },
        {
            name: "Master of Science in Computer Science (MSc CS)",
            duration: "2 Years",
            eligibility: "BCS/BSc with 50% aggregate",
            description: "An advanced study of computer science theory and practical applications.",
            courses: [
                "Advanced Algorithms",
                "Operating Systems",
                "Computer Networks",
                "Database Systems",
                "Parallel Computing",
                "Cryptography",
                "Quantum Computing",
                "Research Methods",
                "Thesis Work"
            ],
            career: [
                "Research Scientist",
                "Systems Architect",
                "Security Specialist",
                "Quantum Computing Engineer",
                "Academic Researcher",
                "Technical Writer"
            ]
        },
        {
            name: "Master of Information Technology (MIT)",
            duration: "2 Years",
            eligibility: "BIT/BSc with 50% aggregate",
            description: "Focused on advanced IT infrastructure and emerging technologies.",
            courses: [
                "IT Infrastructure Management",
                "Cloud Administration",
                "Cybersecurity",
                "Digital Forensics",
                "ERP Systems",
                "IT Service Management",
                "IT Audit and Compliance",
                "Research Project"
            ],
            career: [
                "IT Manager",
                "Network Architect",
                "Security Manager",
                "ERP Specialist",
                "IT Auditor",
                "Technical Support Manager"
            ]
        },
        {
            name: "Master of Science in Information Technology (MSc IT)",
            duration: "2 Years",
            eligibility: "BSc IT/BIT with 50% aggregate",
            description: "Advanced study of IT systems and technologies.",
            courses: [
                "Advanced Database Systems",
                "Network Security",
                "Cloud Computing",
                "E-Commerce Systems",
                "ERP Systems",
                "IT Project Management",
                "Digital Forensics",
                "Research Project"
            ],
            career: [
                "IT Consultant",
                "Network Engineer",
                "Cloud Architect",
                "Security Specialist",
                "ERP Specialist",
                "Technical Support Manager"
            ]
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Graduate Programs</h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Advance your career with our specialized graduate programs.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                    {graduatePrograms.map((program, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                            <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{program.name}</h3>
                            <p className="text-gray-700 mb-1"><strong>Duration:</strong> {program.duration}</p>
                            <p className="text-gray-700 mb-2"><strong>Eligibility:</strong> {program.eligibility}</p>
                            <p className="text-gray-600 mb-4">{program.description}</p>

                            <div className="mb-4">
                                <h4 className="font-medium text-gray-800 mb-2">Courses</h4>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    {program.courses.map((course, i) => (
                                        <li key={i}>{course}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h4 className="font-medium text-gray-800 mb-2">Career Paths</h4>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    {program.career.map((role, i) => (
                                        <li key={i}>{role}</li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                to="/admissions/graduate"
                                className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
                            >
                                Apply Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GraduatePrograms;