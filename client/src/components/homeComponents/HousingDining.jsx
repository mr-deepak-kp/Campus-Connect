import React, { useState } from 'react';

const HousingDining = () => {
    const [activeTab, setActiveTab] = useState('housing');

    const housingOptions = [
        {
            name: "Residential Halls",
            type: "On-Campus",
            description: "Modern, comfortable living spaces with all amenities",
            features: [
                "Private and semi-private rooms",
                "Shared and private bathrooms",
                "24/7 security",
                "Study lounges",
                "Fitness facilities",
                "Meal plans included",
                "High-speed internet",
                "Laundry facilities"
            ],
            location: "Main Campus",
            capacity: "2,000 students",
            contact: {
                email: "housing@mclg.edu",
                phone: "+1 (555) 123-4567",
                officeHours: "8:00 AM - 5:00 PM, Monday-Friday"
            }
        },
        {
            name: "Apartment Living",
            type: "On-Campus",
            description: "Independent living with community amenities",
            features: [
                "Fully furnished apartments",
                "Kitchen facilities",
                "Living room",
                "Balcony/patio",
                "Community pool",
                "24/7 security",
                "Study areas",
                "Pet-friendly options"
            ],
            location: "West Campus",
            capacity: "1,500 students",
            contact: {
                email: "apartments@mclg.edu",
                phone: "+1 (555) 123-4568",
                officeHours: "9:00 AM - 6:00 PM, Monday-Friday"
            }
        },
        {
            name: "Commuter Housing",
            type: "Off-Campus",
            description: "Affordable housing options for commuters",
            features: [
                "Near campus locations",
                "Shared apartments",
                "Parking included",
                "Study spaces",
                "Shuttle service",
                "24/7 security",
                "Basic amenities",
                "Flexible lease terms"
            ],
            location: "Near Campus",
            capacity: "500 students",
            contact: {
                email: "commuter@mclg.edu",
                phone: "+1 (555) 123-4569",
                officeHours: "9:00 AM - 5:00 PM, Monday-Friday"
            }
        }
    ];

    const diningOptions = [
        {
            name: "Main Dining Hall",
            type: "All-You-Can-Eat",
            description: "Variety of dining options in a spacious setting",
            features: [
                "Breakfast, lunch, and dinner",
                "Vegetarian and vegan options",
                "Halal and kosher food",
                "Special dietary accommodations",
                "Live cooking stations",
                "Student discounts",
                "24/7 weekend service",
                "Group dining options"
            ],
            location: "Main Campus",
            hours: {
                weekdays: "7:00 AM - 8:00 PM",
                weekends: "8:00 AM - 10:00 PM"
            },
            contact: {
                email: "dining@mclg.edu",
                phone: "+1 (555) 123-4570",
                website: "https://dining.mclg.edu"
            }
        },
        {
            name: "Cafe Express",
            type: "Quick Service",
            description: "Convenient grab-and-go options",
            features: [
                "Coffee and tea",
                "Sandwiches and salads",
                "Pastries and snacks",
                "Beverages",
                "Student discounts",
                "Mobile ordering",
                "Takeout service",
                "Study spaces"
            ],
            location: "Library",
            hours: {
                weekdays: "7:30 AM - 10:00 PM",
                weekends: "9:00 AM - 6:00 PM"
            },
            contact: {
                email: "cafe@mclg.edu",
                phone: "+1 (555) 123-4571",
                website: "https://cafes.mclg.edu"
            }
        },
        {
            name: "Market Place",
            type: "Convenience Store",
            description: "24/7 convenience shopping",
            features: [
                "Grocery items",
                "Snacks and beverages",
                "Frozen meals",
                "School supplies",
                "Personal care items",
                "Study spaces",
                "ATM access",
                "Student discounts"
            ],
            location: "Student Center",
            hours: {
                weekdays: "24/7",
                weekends: "24/7"
            },
            contact: {
                email: "market@mclg.edu",
                phone: "+1 (555) 123-4572",
                website: "https://market.mclg.edu"
            }
        }
    ];

    const renderOptionCard = (option, isDining = false) => (
        <div className="bg-gray-50 rounded-2xl shadow p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-indigo-700">{option.name}</h3>
                <span className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded">{option.type}</span>
            </div>
            <p className="text-gray-700 mb-4">{option.description}</p>

            <div className="mb-4">
                <h4 className="font-medium text-gray-800">Features</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {option.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Location:</strong> {option.location}</p>
                {isDining ? (
                    <>
                        <p><strong>Hours:</strong></p>
                        <p>Weekdays: {option.hours.weekdays}</p>
                        <p>Weekends: {option.hours.weekends}</p>
                    </>
                ) : (
                    <p><strong>Capacity:</strong> {option.capacity}</p>
                )}
            </div>

            <div className="mt-4 text-sm text-gray-700 space-y-1">
                <p><strong>Email:</strong> <a href={`mailto:${option.contact.email}`} className="text-indigo-600 hover:underline">{option.contact.email}</a></p>
                <p><strong>Phone:</strong> {option.contact.phone}</p>
                {isDining ? (
                    <p><strong>Website:</strong> <a href={option.contact.website} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">{option.contact.website}</a></p>
                ) : (
                    <p><strong>Office Hours:</strong> {option.contact.officeHours}</p>
                )}
            </div>
        </div>
    );

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">Housing & Dining</h1>
                    <p className="mt-2 text-lg text-gray-600">Your home away from home and dining options</p>
                </div>

                <div className="flex justify-center mb-8 space-x-4">
                    <button
                        onClick={() => setActiveTab('housing')}
                        className={`px-6 py-2 rounded-full text-sm font-medium ${activeTab === 'housing' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        Housing
                    </button>
                    <button
                        onClick={() => setActiveTab('dining')}
                        className={`px-6 py-2 rounded-full text-sm font-medium ${activeTab === 'dining' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        Dining
                    </button>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {(activeTab === 'housing' ? housingOptions : diningOptions).map((option, index) =>
                        renderOptionCard(option, activeTab === 'dining')
                    )}
                </div>
            </div>
        </section>
    );
};

export default HousingDining;