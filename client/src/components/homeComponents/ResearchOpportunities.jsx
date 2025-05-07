import React from 'react';
import { Link } from 'react-router-dom';

const ResearchOpportunities = () => {
    const researchAreas = [
        {
            name: "Artificial Intelligence & Machine Learning",
            description: "Explore cutting-edge research in AI algorithms, deep learning, and cognitive computing.",
            focusAreas: [
                "Deep Learning Architectures",
                "Natural Language Processing",
                "Computer Vision",
                "Reinforcement Learning",
                "AI Ethics and Safety"
            ],
            opportunities: [
                "PhD Research",
                "Industry Collaborations",
                "Research Assistantships",
                "Internships",
                "Academic Publications"
            ]
        },
        {
            name: "Cybersecurity Research",
            description: "Investigate security vulnerabilities, develop new security protocols, and analyze threat landscapes.",
            focusAreas: [
                "Network Security",
                "Cryptography",
                "Malware Analysis",
                "Security Protocols",
                "Incident Response"
            ],
            opportunities: [
                "Security Research",
                "Penetration Testing",
                "Security Audits",
                "Vulnerability Analysis",
                "Security Tool Development"
            ]
        },
        {
            name: "Data Science & Analytics",
            description: "Analyze big data, develop predictive models, and create data-driven solutions for real-world problems.",
            focusAreas: [
                "Big Data Analytics",
                "Predictive Modeling",
                "Data Visualization",
                "Statistical Analysis",
                "Business Intelligence"
            ],
            opportunities: [
                "Data Science Research",
                "Analytics Projects",
                "Data Engineering",
                "Machine Learning",
                "Business Analytics"
            ]
        },
        {
            name: "Cloud Computing Research",
            description: "Study cloud architectures, distributed systems, and cloud-native applications.",
            focusAreas: [
                "Cloud Architecture",
                "Serverless Computing",
                "Distributed Systems",
                "Containerization",
                "Cloud Security"
            ],
            opportunities: [
                "Cloud Research",
                "System Architecture",
                "DevOps",
                "Cloud Security",
                "Cloud Optimization"
            ]
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Research Opportunities</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Explore our cutting-edge research areas and contribute to technological advancements
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                    {researchAreas.map((area, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
                            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">{area.name}</h2>
                            <p className="text-gray-700 mb-4">{area.description}</p>

                            <div className="mb-4">
                                <h3 className="font-medium text-gray-800 mb-2">Focus Areas</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    {area.focusAreas.map((focus, i) => (
                                        <li key={i}>{focus}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="font-medium text-gray-800 mb-2">Research Opportunities</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    {area.opportunities.map((opportunity, i) => (
                                        <li key={i}>{opportunity}</li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                to="/research/apply"
                                className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
                            >
                                Apply for Research
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchOpportunities;