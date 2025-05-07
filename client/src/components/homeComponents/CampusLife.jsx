import { Link } from "react-router-dom";

function CampusLife() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-800">Campus Life</h1>
                    <p className="mt-2 text-lg text-gray-600">Experience life at M-Clg University</p>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Student Organizations",
                            description: "Join over 100 student clubs and organizations",
                            link: "/organizations",
                            linkLabel: "Learn More",
                        },
                        {
                            title: "Housing & Dining",
                            description: "Discover our residential options and dining services",
                            link: "/housing",
                            linkLabel: "Learn More",
                        },
                        {
                            title: "Campus Events",
                            description: "Stay updated with campus activities and events",
                            link: "/events",
                            linkLabel: "View Events",
                        },
                        {
                            title: "Calendar",
                            description: "View campus events and activities",
                            link: "/calendar",
                            linkLabel: "View Calendar",
                        },
                        {
                            title: "Giving",
                            description: "Support our mission through donations",
                            link: "/giving",
                            linkLabel: "Donate Now",
                        },
                        {
                            title: "Attendance",
                            description: "Track and manage student and faculty attendance",
                            link: "/attendance",
                            linkLabel: "View Dashboard",
                        },
                    ].map(({ title, description, link, linkLabel }) => (
                        <div
                            key={title}
                            className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg transition"
                        >
                            <h2 className="text-xl font-semibold text-indigo-700 mb-2">{title}</h2>
                            <p className="text-gray-700 mb-4">{description}</p>
                            <Link
                                to={link}
                                className="text-indigo-600 font-medium hover:underline"
                            >
                                {linkLabel}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CampusLife;