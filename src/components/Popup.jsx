import React from 'react';

const Popup = ({ wallets, onClose }) => (
    <>
        <div
            className="popup-container"
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '40px',
                borderRadius: '10px',
                width: '30%',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
                zIndex: 1000,
            }}
        >
            <h5>Connect a Wallet</h5>
            {wallets.map((wallet, idx) => (
                <button key={idx} className="btn btn-outline-light w-100 mb-2">
                    {wallet}
                </button>
            ))}
            <button className="btn btn-danger w-100 mt-3" onClick={onClose}>
                Close
            </button>
        </div>
        <div
            className="overlay"
            onClick={onClose}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999,
            }}
        ></div>
    </>
);

export default Popup;
