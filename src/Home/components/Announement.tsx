import React from 'react';

const announcements = [
  { id: 1, message: "Scheduled maintenance on July 30, 2024" },
  { id: 2, message: "New feature release: Dark Mode" },
  { id: 3, message: "Holiday notice: Office closed on August 15, 2024" },
  { id: 4, message: "Security update: Password policy changes" },
  { id: 5, message: "Team building event on September 5, 2024" },
  { id: 6, message: "Update: Improved search functionality" },
  { id: 7, message: "Reminder: Submit your monthly reports" },
  { id: 8, message: "Event: Quarterly review meeting" },
  { id: 9, message: "Policy change: Remote work guidelines" },
  { id: 10, message: "Notice: System downtime on August 20, 2024" },
];

const AnnouncementTable = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      <div className="bg-blue-400 p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">Announcement</h2>
        <p className="mt-2">We have some important updates and announcements. Please read the details below.</p>
      </div>
      <div className="overflow-y-auto h-64 border border-gray-200 rounded-b-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {announcements.map((announcement) => (
              <tr key={announcement.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{announcement.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnnouncementTable;
