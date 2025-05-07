import React from 'react';
import { Link } from 'react-router-dom';

const CampusEvents = () => {
    const events = [
        {
            title: "Tech Fest 2025",
            type: "Technical",
            date: "May 15-17, 2025",
            time: "9:00 AM - 6:00 PM",
            location: "Main Auditorium",
            description: "Annual technical festival featuring workshops, competitions, and guest lectures",
            details: [
                "Workshops on latest technologies",
                "Hackathon competition",
                "Guest lectures by industry experts",
                "Technical exhibitions",
                "Networking opportunities",
                "Career fair"
            ],
            registration: {
                status: "Open",
                deadline: "May 10, 2025",
                link: "#"
            },
            image: "tech-fest.jpg"
        },
        {
            title: "Cultural Night",
            type: "Cultural",
            date: "May 20, 2025",
            time: "7:00 PM - 10:00 PM",
            location: "Student Center",
            description: "Celebration of diverse cultures through performances and food",
            details: [
                "Cultural dance performances",
                "Traditional music",
                "Food stalls",
                "Fashion show",
                "Art exhibitions",
                "Interactive cultural zones"
            ],
            registration: {
                status: "Open",
                deadline: "May 18, 2025",
                link: "#"
            },
            image: "cultural-night.jpg"
        },
        {
            title: "Career Fair",
            type: "Career",
            date: "May 22, 2025",
            time: "10:00 AM - 4:00 PM",
            location: "Exhibition Hall",
            description: "Annual career fair with top companies and organizations",
            details: [
                "Company presentations",
                "Recruitment drives",
                "Resume workshops",
                "Mock interviews",
                "Networking opportunities",
                "Career guidance sessions"
            ],
            registration: {
                status: "Open",
                deadline: "May 21, 2025",
                link: "#"
            },
            image: "career-fair.jpg"
        },
        {
            title: "Sports Meet",
            type: "Sports",
            date: "May 25, 2025",
            time: "8:00 AM - 5:00 PM",
            location: "Sports Complex",
            description: "Annual sports meet with various competitions",
            details: [
                "Track and field events",
                "Basketball tournament",
                "Volleyball matches",
                "Swimming competitions",
                "Badminton tournament",
                "Awards ceremony"
            ],
            registration: {
                status: "Open",
                deadline: "May 20, 2025",
                link: "#"
            },
            image: "sports-meet.jpg"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">Campus Events</h1>
                    <p className="text-gray-600 text-lg">Stay updated with our upcoming events</p>
                </div>

                {/* Calendar */}
                <div className="bg-white p-6 rounded-xl shadow mb-12">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold text-indigo-700">May 2025</h2>
                        <div className="space-x-2">
                            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Previous</button>
                            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Next</button>
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                            <div key={day} className="font-medium">{day}</div>
                        ))}

                        {/* Calendar Dates */}
                        {[
                            "", "", 1, 2, 3, 4, 5,
                            6, 7, 8, 9, 10, 11, 12,
                            13, 14, 15, 16, 17, 18, 19,
                            20, 21, 22, 23, 24, 25, 26,
                            27, 28, 29, 30, 31, "", ""
                        ].map((date, i) => {
                            const isEventDay = [15, 21, 22, 25].includes(date);
                            return (
                                <div key={i}
                                    className={`p-2 rounded-lg border ${isEventDay ? "bg-indigo-100 font-bold text-indigo-700" : "bg-gray-100"} ${!date && "invisible"}`}>
                                    {date}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Events List */}
                <div className="space-y-10">
                    {events.map((event, index) => (
                        <div key={index} className="bg-white rounded-xl shadow p-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>
                                <span className="inline-block mt-2 md:mt-0 bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
                                    {event.type}
                                </span>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 mb-4">
                                <div>
                                    <p className="text-sm text-gray-500">Date</p>
                                    <p className="font-medium">{event.date}</p>
                                    <p className="text-sm text-gray-500 mt-1">Time</p>
                                    <p className="font-medium">{event.time}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium">{event.location}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Registration Status</p>
                                    <p className={`font-medium ${event.registration.status === "Open" ? "text-green-600" : "text-red-600"}`}>
                                        {event.registration.status}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">Deadline</p>
                                    <p className="font-medium">{event.registration.deadline}</p>
                                </div>
                            </div>

                            <p className="text-gray-700 mb-4">{event.description}</p>

                            <div className="mb-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Event Highlights</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    {event.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                to={event.registration.link}
                                className="inline-block mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                            >
                                Register Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CampusEvents;