import React from 'react';
import { Link } from 'react-router-dom';

function Admissions() {
    return (
        <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Admissions</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Welcome to CampusConnect Admissions
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Undergraduate Card */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Undergraduate Admissions</h2>
                        <p className="text-gray-600 mb-4">
                            Discover our undergraduate programs and application process.
                        </p>
                        <Link to="/admissions/undergraduate" className="text-blue-600 hover:underline font-medium">
                            View Courses
                        </Link>
                    </div>

                    {/* Graduate Card */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Graduate Admissions</h2>
                        <p className="text-gray-600 mb-4">
                            Explore our graduate programs and research opportunities.
                        </p>
                        <Link to="/admissions/graduate" className="text-blue-600 hover:underline font-medium">
                            View Programs
                        </Link>
                    </div>

                    {/* Financial Aid Card */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Financial Aid</h2>
                        <p className="text-gray-600 mb-4">
                            Information about scholarships and financial assistance.
                        </p>
                        <Link to="/admissions/financial-aid" className="text-blue-600 hover:underline font-medium">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Admissions;