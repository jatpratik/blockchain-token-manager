import React from 'react';

const Widget = ({ title, value }) => (
    <div
        className="card action-card shadow-lg text-center"
        style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            border: '2px solid #bdc8cbc4',
            borderRadius: '10px',
            color: 'white',
        }}
    >
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="text-white">{value}</p>
        </div>
    </div>
);

export default Widget;
