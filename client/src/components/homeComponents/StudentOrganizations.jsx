import React from 'react';

const StudentOrganizations = () => {
    const organizations = [
        {
            name: "Computer Science Club",
            type: "Academic",
            description: "A community for computer science enthusiasts to collaborate on projects and share knowledge.",
            activities: [
                "Weekly coding workshops", "Hackathons", "Guest lectures by industry experts",
                "Project showcases", "Technical competitions", "Career development sessions"
            ],
            membership: "Open to all students with interest in computer science",
            contact: {
                email: "csclub@mclg.edu",
                social: [
                    { platform: "Facebook", link: "#" },
                    { platform: "Instagram", link: "#" },
                    { platform: "GitHub", link: "#" }
                ]
            }
        },
        {
            name: "Women in Technology",
            type: "Diversity",
            description: "An organization dedicated to supporting and empowering women in technology fields.",
            activities: [
                "Mentorship programs", "Networking events", "Technical workshops",
                "Career panels", "Community outreach", "Annual conference"
            ],
            membership: "Open to all students who support gender diversity in tech",
            contact: {
                email: "wit@mclg.edu",
                social: [
                    { platform: "Facebook", link: "#" },
                    { platform: "Instagram", link: "#" },
                    { platform: "LinkedIn", link: "#" }
                ]
            }
        },
        {
            name: "Robotics Club",
            type: "Technical",
            description: "A hands-on club focused on robotics and automation projects.",
            activities: [
                "Robot design and construction", "Competitions participation", "Technical workshops",
                "Project demonstrations", "Industry collaborations", "Technical presentations"
            ],
            membership: "Open to all students with interest in robotics",
            contact: {
                email: "robotics@mclg.edu",
                social: [
                    { platform: "Facebook", link: "#" },
                    { platform: "Instagram", link: "#" },
                    { platform: "YouTube", link: "#" }
                ]
            }
        },
        {
            name: "Game Development Club",
            type: "Creative",
            description: "A community for game developers to create, share, and learn about game development.",
            activities: [
                "Game jams", "Development workshops", "Project showcases",
                "Guest lectures", "Technical demonstrations", "Community events"
            ],
            membership: "Open to all students interested in game development",
            contact: {
                email: "gamedev@mclg.edu",
                social: [
                    { platform: "Discord", link: "#" },
                    { platform: "GitHub", link: "#" },
                    { platform: "Instagram", link: "#" }
                ]
            }
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Student Organizations</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Join our vibrant community of student organizations
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {organizations.map((org, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-indigo-700">{org.name}</h2>
                                <span className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded">{org.type}</span>
                            </div>

                            <p className="text-gray-700 mb-4">{org.description}</p>

                            <div className="mb-4">
                                <h3 className="font-medium text-gray-800">Activities</h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                    {org.activities.map((activity, i) => (
                                        <li key={i}>{activity}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="text-sm text-gray-700 mb-2">
                                <strong>Membership:</strong> {org.membership}
                            </div>

                            <div className="text-sm text-gray-700 mb-2">
                                <strong>Email:</strong> <a href={`mailto:${org.contact.email}`} className="text-indigo-600 hover:underline">{org.contact.email}</a>
                            </div>

                            <div className="flex gap-3 mt-2 flex-wrap">
                                {org.contact.social.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-indigo-600 text-sm hover:underline"
                                    >
                                        {social.platform}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentOrganizations;