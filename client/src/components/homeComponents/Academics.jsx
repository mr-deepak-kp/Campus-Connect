import React from 'react';
import { Link } from 'react-router-dom';

function Academics() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Academics</h1>
                    <p className="mt-2 text-gray-600 text-lg">
                        Explore our academic programs and schools.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Graduate Programs</h2>
                        <p className="text-gray-600 mb-4">
                            Explore our graduate and professional programs.
                        </p>
                        <Link to="/academics/graduate" className="text-indigo-600 font-medium hover:underline">
                            Learn More
                        </Link>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Research Opportunities</h2>
                        <p className="text-gray-600 mb-4">
                            Engage in cutting-edge research across multiple disciplines.
                        </p>
                        <Link to="/research" className="text-indigo-600 font-medium hover:underline">
                            Explore Research
                        </Link>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Undergraduate Programs</h2>
                        <p className="text-gray-600 mb-4">
                            Discover our undergraduate programs and begin your journey in technology.
                        </p>
                        <Link to="/academics/undergraduate" className="text-indigo-600 font-medium hover:underline">
                            Explore Programs
                        </Link>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Schools & Departments</h2>
                        <p className="text-gray-600 mb-4">
                            Learn about our academic schools and departments shaping the future.
                        </p>
                        <Link to="/academics/departments" className="text-indigo-600 font-medium hover:underline">
                            Explore Schools
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Academics;