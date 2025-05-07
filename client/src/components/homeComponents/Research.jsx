import React from 'react';
import { Link } from 'react-router-dom';

const Research = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Research</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Discover our cutting-edge research initiatives
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Research Centers</h2>
                        <p className="text-gray-700 mb-4">
                            Explore our world-class research facilities
                        </p>
                        <Link to="/centers" className="inline-block text-indigo-600 hover:underline font-medium">
                            Learn More →
                        </Link>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Student Research</h2>
                        <p className="text-gray-700 mb-4">
                            Opportunities for undergraduate and graduate research
                        </p>
                        <Link to="/student-research" className="inline-block text-indigo-600 hover:underline font-medium">
                            Learn More →
                        </Link>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Funding & Grants</h2>
                        <p className="text-gray-700 mb-4">
                            Information about research funding opportunities
                        </p>
                        <Link to="/funding" className="inline-block text-indigo-600 hover:underline font-medium">
                            Learn More →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;