import React from 'react';
import { Link } from 'react-router-dom';

const Giving = () => {
    const givingOptions = [
        {
            name: "Annual Fund",
            description: "Support ongoing initiatives and student programs",
            impact: [
                "Enhances student scholarships",
                "Funds academic programs",
                "Supports faculty development",
                "Improves campus facilities",
                "Funds research projects",
                "Supports student organizations"
            ],
            goals: {
                current: 500000,
                target: 1000000,
                progress: 50
            },
            waysToGive: [
                "Online donation",
                "Monthly giving",
                "Matching gifts",
                "Planned giving",
                "Stock transfers",
                "Employee giving"
            ]
        },
        {
            name: "Scholarships",
            description: "Provide educational opportunities for deserving students",
            impact: [
                "Supports student success",
                "Increases access to education",
                "Reduces student debt",
                "Funds academic excellence",
                "Supports diversity initiatives",
                "Enables student research"
            ],
            goals: {
                current: 250000,
                target: 500000,
                progress: 50
            },
            waysToGive: [
                "One-time donation",
                "Endowed scholarships",
                "Named scholarships",
                "Class gifts",
                "Corporate sponsorships",
                "Legacy gifts"
            ]
        },
        {
            name: "Facilities",
            description: "Enhance campus infrastructure and learning spaces",
            impact: [
                "Modernizes classrooms",
                "Upgrades laboratories",
                "Improves student housing",
                "Enhances libraries",
                "Updates sports facilities",
                "Improves accessibility"
            ],
            goals: {
                current: 750000,
                target: 1500000,
                progress: 50
            },
            waysToGive: [
                "Capital gifts",
                "Building naming rights",
                "Equipment donations",
                "Land donations",
                "Real estate gifts",
                "Corporate partnerships"
            ]
        },
        {
            name: "Research",
            description: "Support groundbreaking research and innovation",
            impact: [
                "Funds cutting-edge research",
                "Supports faculty grants",
                "Funds research equipment",
                "Supports research assistants",
                "Funds research travel",
                "Supports research publications"
            ],
            goals: {
                current: 400000,
                target: 800000,
                progress: 50
            },
            waysToGive: [
                "Research grants",
                "Endowed professorships",
                "Research fellowships",
                "Equipment donations",
                "Corporate sponsorships",
                "Matching gifts"
            ]
        }
    ];

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Support M-Clg University</h1>
                <p className="text-lg text-center text-gray-600 mb-12">
                    Make a difference in the lives of our students and community
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="text-center bg-gray-100 rounded-lg py-6 shadow">
                        <h3 className="text-2xl font-semibold text-blue-600">$5M+</h3>
                        <p className="text-sm text-gray-700 mt-2">Raised Last Year</p>
                    </div>
                    <div className="text-center bg-gray-100 rounded-lg py-6 shadow">
                        <h3 className="text-2xl font-semibold text-blue-600">1,200+</h3>
                        <p className="text-sm text-gray-700 mt-2">Donors</p>
                    </div>
                    <div className="text-center bg-gray-100 rounded-lg py-6 shadow">
                        <h3 className="text-2xl font-semibold text-blue-600">85%</h3>
                        <p className="text-sm text-gray-700 mt-2">Donor Retention</p>
                    </div>
                    <div className="text-center bg-gray-100 rounded-lg py-6 shadow">
                        <h3 className="text-2xl font-semibold text-blue-600">100%</h3>
                        <p className="text-sm text-gray-700 mt-2">Impact</p>
                    </div>
                </div>

                <div className="space-y-16">
                    {givingOptions.map((option, index) => (
                        <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">{option.name}</h2>
                                <p className="text-gray-600 mb-4">{option.description}</p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Impact Areas</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    {option.impact.map((impact, i) => (
                                        <li key={i}>{impact}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-4">
                                <div className="text-sm font-medium text-gray-700 mb-1">Progress</div>
                                <div className="w-full h-3 bg-gray-200 rounded-full">
                                    <div className="h-3 bg-green-500 rounded-full" style={{ width: `${option.goals.progress}%` }}></div>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600 mt-1">
                                    <span>${option.goals.current.toLocaleString()}</span>
                                    <span>/${option.goals.target.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Ways to Give</h3>
                                <div className="flex flex-wrap gap-2">
                                    {option.waysToGive.map((way, i) => (
                                        <button key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200">
                                            {way}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Make a Donation</h3>
                                <form className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {["$50", "$100", "$250", "$500", "Other"].map((amt, i) => (
                                            <button key={i} type="button" className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
                                                {amt}
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-4 py-2"
                                        placeholder="Custom Amount"
                                    />
                                    <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                                        Donate Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Impact Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Transforming Education',
                                content: "Thanks to generous donors, we've been able to provide scholarships to 100 students this year.",
                                link: '/impact-stories'
                            },
                            {
                                title: 'Research Breakthroughs',
                                content: 'Our research programs have received $2M in funding for cutting-edge projects.',
                                link: '/impact-stories'
                            },
                            {
                                title: 'Facility Upgrades',
                                content: 'New laboratories and classrooms are transforming the learning experience for our students.',
                                link: '/impact-stories'
                            }
                        ].map((story, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{story.title}</h3>
                                <p className="text-gray-600 mb-4">{story.content}</p>
                                <Link to={story.link} className="text-blue-600 hover:underline text-sm font-medium">
                                    Read More
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Giving;