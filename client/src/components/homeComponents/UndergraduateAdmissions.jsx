import React from 'react';

const UndergraduateAdmissions = () => {
    const undergraduateCourses = [
        {
            name: "Bachelor of Computer Applications (BCA)",
            duration: "3 Years",
            eligibility: "10+2 with 50% aggregate",
            description: "A comprehensive program covering computer science fundamentals, programming, and software development."
        },
        {
            name: "Bachelor of Computer Science (BCS)",
            duration: "3 Years",
            eligibility: "10+2 with 50% aggregate",
            description: "Focuses on computer science theory and practical applications, preparing students for IT careers."
        },
        {
            name: "Bachelor of Information Technology (BIT)",
            duration: "3 Years",
            eligibility: "10+2 with 50% aggregate",
            description: "Covers IT fundamentals, software development, and emerging technologies."
        },
        {
            name: "Bachelor of Science in Computer Science (BSc CS)",
            duration: "3 Years",
            eligibility: "10+2 with 50% aggregate",
            description: "Combines computer science with mathematics and scientific principles."
        },
        {
            name: "Bachelor of Science in Information Technology (BSc IT)",
            duration: "3 Years",
            eligibility: "10+2 with 50% aggregate",
            description: "Focuses on IT infrastructure, networking, and system administration."
        }
    ];

    return (
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Undergraduate Admissions</h2>
                    <p className="mt-2 text-gray-600">
                        Choose your path to success with our comprehensive undergraduate programs
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {undergraduateCourses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h3>
                            <div className="text-sm text-gray-600 mb-4 space-y-1">
                                <p><strong>Duration:</strong> {course.duration}</p>
                                <p><strong>Eligibility:</strong> {course.eligibility}</p>
                                <p>{course.description}</p>
                            </div>
                            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UndergraduateAdmissions;