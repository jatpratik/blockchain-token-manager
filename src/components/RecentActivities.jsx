import React from 'react';

const RecentActivities = ({ activities }) => (
    <div
        className="table-container mx-auto p-4"
        style={{
            maxWidth: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            border: '1px solid white',
            borderRadius: '10px',
            color: 'white',
            boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
        }}
    >
        <h2 className="recent-activities mb-4 text-center">Recent Activities</h2>
        <table className="table table-hover table-bordered text-white mb-0">
            <thead className="bg-secondary text-white">
            <tr>
                <th className="text-center">Date</th>
                <th className="text-center">Action</th>
                <th className="text-center">Status</th>
            </tr>
            </thead>
            <tbody>
            {activities.map((activity, idx) => (
                <tr key={idx} className="text-center">
                    <td>{activity.date}</td>
                    <td>{activity.action}</td>
                    <td className={activity.class}>{activity.status}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

export default RecentActivities;
