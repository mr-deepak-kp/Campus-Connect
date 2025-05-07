import React from 'react';

const AttendanceTable = ({ records }) => {
  return (
    <div className="mt-6 mx-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Attendance History</h2>
      <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200 rounded-lg overflow-hidden shadow-md">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Marked by</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {records.length > 0 ? (
            records.map((record, index) => (
              <tr key={index} className="hover:bg-gray-100 transition">
                <td className="px-6 py-4">{record.date}</td>
                <td className={`px-6 py-4 font-semibold ${record.status === 'present' ? 'text-green-600' : 'text-red-600'}`}>
                  {record.status}
                </td>
                <td className="px-6 py-4">{record.markedBy.name || '-'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-6 py-4 text-center" colSpan="3">No attendance records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;