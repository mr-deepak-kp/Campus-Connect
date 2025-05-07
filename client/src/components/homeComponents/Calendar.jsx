import React, { useState, useEffect } from 'react';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const sampleEvents = [
        {
          id: 1,
          title: "Tech Fest 2025",
          type: "Technical",
          start: "2025-05-15T09:00:00",
          end: "2025-05-17T18:00:00",
          location: "Main Auditorium",
          description: "Annual technical festival featuring workshops and competitions",
          attendees: 500,
          registration: { status: "Open", deadline: "2025-05-10T23:59:59" }
        },
        {
          id: 2,
          title: "Cultural Night",
          type: "Cultural",
          start: "2025-05-20T19:00:00",
          end: "2025-05-20T22:00:00",
          location: "Student Center",
          description: "Celebration of diverse cultures through performances",
          attendees: 300,
          registration: { status: "Open", deadline: "2025-05-18T23:59:59" }
        },
        {
          id: 3,
          title: "Career Fair",
          type: "Career",
          start: "2025-05-22T10:00:00",
          end: "2025-05-22T16:00:00",
          location: "Exhibition Hall",
          description: "Annual career fair with top companies and organizations",
          attendees: 800,
          registration: { status: "Open", deadline: "2025-05-21T23:59:59" }
        },
        {
          id: 4,
          title: "Sports Meet",
          type: "Sports",
          start: "2025-05-25T08:00:00",
          end: "2025-05-25T17:00:00",
          location: "Sports Complex",
          description: "Annual sports meet with various competitions",
          attendees: 1000,
          registration: { status: "Open", deadline: "2025-05-20T23:59:59" }
        }
      ];

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                setEvents(sampleEvents);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch events');
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const getMonthName = (date) => {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[date.getMonth()];
    };

    const getDayName = (date) => {
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return dayNames[date.getDay()];
    };

    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const getEventForDate = (date) => {
        return events.find(event => {
            const eventDate = new Date(event.start);
            return eventDate.toDateString() === date.toDateString();
        });
    };

    return (
        <section className="py-10 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Campus Calendar</h1>
                <p className="text-center text-gray-500 mb-8">Stay updated with campus activities and events</p>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 font-medium">{error}</div>
                ) : (
                    <>
                        <div className="flex items-center justify-between mb-6">
                            <button className="text-sm px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Previous</button>
                            <h2 className="text-xl font-semibold">{getMonthName(currentDate)} {currentDate.getFullYear()}</h2>
                            <button className="text-sm px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Next</button>
                        </div>

                        <div className="grid grid-cols-7 gap-2 mb-4 text-center text-sm text-gray-500">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                <div key={day} className="font-medium">{day}</div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-2 mb-8">
                            {Array(getFirstDayOfMonth(currentDate)).fill(null).map((_, i) => (
                                <div key={i}></div>
                            ))}
                            {Array(getDaysInMonth(currentDate)).fill(null).map((_, i) => {
                                const date = new Date(currentDate);
                                date.setDate(i + 1);
                                const isToday = date.toDateString() === new Date().toDateString();
                                const hasEvent = getEventForDate(date);

                                return (
                                    <div 
                                        key={i} 
                                        className={`p-2 border rounded cursor-pointer hover:bg-blue-100 relative ${isToday ? 'bg-blue-200' : 'bg-white'} ${hasEvent ? 'border-blue-500' : 'border-gray-300'}`}
                                        onClick={() => hasEvent && console.log('Viewing event:', hasEvent)}
                                    >
                                        <div className="text-xs font-semibold">{i + 1}</div>
                                        {hasEvent && (
                                            <span className={`absolute top-1 right-1 w-2 h-2 rounded-full ${hasEvent.type.toLowerCase() === 'technical' ? 'bg-indigo-500' : hasEvent.type.toLowerCase() === 'cultural' ? 'bg-pink-500' : hasEvent.type.toLowerCase() === 'career' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {events.map(event => {
                                    const eventDate = new Date(event.start);
                                    return (
                                        <div key={event.id} className="bg-white rounded-xl shadow p-4 hover:shadow-md transition">
                                            <div className="flex items-center space-x-4 mb-4">
                                                <div className="text-center">
                                                    <div className="text-sm font-bold text-gray-700">{getDayName(eventDate)}</div>
                                                    <div className="text-2xl font-extrabold text-blue-600">{eventDate.getDate()}</div>
                                                    <div className="text-sm text-gray-500">{getMonthName(eventDate)}</div>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                                                    <p className="text-sm text-gray-500">
                                                        {new Date(event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
                                                        {new Date(event.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </p>
                                                    <p className="text-sm text-gray-600">{event.location}</p>
                                                    <p className="text-xs text-white inline-block mt-1 px-2 py-0.5 rounded bg-blue-400">{event.type}</p>
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                <p>{event.attendees} attendees</p>
                                                <p className="mt-1">Registration: <span className="font-medium">{event.registration.status}</span></p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Calendar;