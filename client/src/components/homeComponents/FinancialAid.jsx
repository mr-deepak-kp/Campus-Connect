import React from 'react';
import { Link } from 'react-router-dom';

const FinancialAid = () => {
    const scholarshipCategories = [
        {
            title: "Merit Scholarships",
            description: "Awarded based on academic excellence and overall performance.",
            items: [
                "Full tuition waiver for top 1% scorers.",
                "50% tuition waiver for top 5% scorers.",
                "25% tuition waiver for top 10% scorers."
            ]
        },
        {
            title: "Need-Based Scholarships",
            description: "Financial assistance for students with demonstrated need.",
            items: [
                "Up to 100% tuition waiver based on family income.",
                "Monthly stipend for living expenses.",
                "Book allowance and study material support."
            ]
        },
        {
            title: "Sports Scholarships",
            description: "For outstanding athletes in various sports.",
            items: [
                "Full tuition waiver for national-level athletes.",
                "50% tuition waiver for state-level athletes.",
                "Sports equipment and training support."
            ]
        },
        {
            title: "Research Scholarships",
            description: "For students pursuing research and innovation.",
            items: [
                "Research project funding.",
                "Conference travel support.",
                "Publication assistance."
            ]
        }
    ];

    const financialAssistance = [
        {
            title: "Student Loans",
            description: "Low-interest educational loans available through partner banks.",
            items: [
                "Flexible repayment options.",
                "No collateral required for small amounts.",
                "Interest subsidy for meritorious students."
            ]
        },
        {
            title: "Installment Payment Plan",
            description: "Option to pay fees in installments throughout the year.",
            items: [
                "Up to 4 installments per semester.",
                "No interest charges.",
                "Flexible payment dates."
            ]
        },
        {
            title: "Campus Jobs",
            description: "Part-time job opportunities available on campus.",
            items: [
                "Teaching assistant positions.",
                "Research assistant roles.",
                "Administrative support positions."
            ]
        },
        {
            title: "External Scholarships",
            description: "Guidance for applying to external scholarship programs.",
            items: [
                "Government scholarships.",
                "Corporate sponsorships.",
                "International scholarship opportunities."
            ]
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Financial Aid & Scholarships</h2>
                    <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                        Explore our comprehensive financial assistance programs to support your education.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mb-12">
                    <div>
                        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Scholarships</h3>
                        {scholarshipCategories.map((category, index) => (
                            <div key={index} className="mb-6">
                                <h4 className="text-lg font-medium text-gray-800">{category.title}</h4>
                                <p className="text-gray-600 mb-2">{category.description}</p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {category.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Financial Assistance</h3>
                        {financialAssistance.map((item, index) => (
                            <div key={index} className="mb-6">
                                <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
                                <p className="text-gray-600 mb-2">{item.description}</p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {item.items.map((benefit, i) => (
                                        <li key={i}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">How to Apply</h3>
                    <p className="text-gray-600 mb-6">Start your application process today:</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/admissions/financial-aid/apply"
                            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                        >
                            Apply for Scholarships
                        </Link>
                        <Link
                            to="/admissions/financial-aid/loan"
                            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                        >
                            Apply for Student Loan
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancialAid;