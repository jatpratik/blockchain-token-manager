import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./dashboard.css";

const DashboardPage = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div
            className="dashboard-page"
            style={{
                backgroundImage: `url(${require('../static/img/bkimage.webp')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                color: 'white', // All text will inherit this color
            }}
        >
            <header className="header d-flex align-items-center justify-content-between p-3 bg-dark shadow">
                <div className="d-flex align-items-center">
                    <img
                        src={require("../static/img/imglogo.webp")}
                        alt="Logo"
                        className="logo me-3"
                    />
                    <div>
                        <h1 className="h4 text-white mb-1">NFT Token Manager</h1>
                        <p className="mb-0 text-white small">Mint, Transfer, or Burn your tokens effortlessly</p>
                    </div>
                </div>
                <div>
                <button
                    className="btn btn-outline-light px-4"
                    onClick={togglePopup}
                >
                    Connect Wallet
                </button>
                </div>
            </header>

            <div className="container-fluid p-4">
                <div className="row g-4 card-container">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div
                            className="d-flex flex-column p-4 action-card shadow-lg text-center"
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                border: '2px solid #bdc8cbc4',
                                borderRadius: '10px',
                                color: 'white',
                            }}
                        >
                            <h2>Mint Token</h2>
                            <input
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    marginBottom: '10px',
                                }}
                                type="text"
                                placeholder="Token Name"
                            />
                            <input
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    marginBottom: '10px',
                                }}
                                type="number"
                                placeholder="Quantity"
                            />
                            <button className="btn btn-outline-light px-4">Mint</button>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div
                            className="d-flex flex-column p-4 action-card shadow-lg text-center"
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                border: '2px solid #bdc8cbc4',
                                borderRadius: '10px',
                                color: 'white',
                            }}
                        >
                            <h2>Transfer Token</h2>
                            <input
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    marginBottom: '10px',
                                }}
                                type="text"
                                placeholder="Recipient Address"
                            />
                            <input
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    marginBottom: '10px',
                                }}
                                type="number"
                                placeholder="Token ID"
                            />
                            <button className="btn btn-outline-light px-4">Transfer</button>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div
                            className="d-flex flex-column p-4 action-card shadow-lg text-center"
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                border: '2px solid #bdc8cbc4',
                                borderRadius: '10px',
                                color: 'white',
                            }}
                        >
                            <h2>Approve Token</h2>
                            <input
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    marginBottom: '10px',
                                }}
                                type="text"
                                placeholder="Token"
                                readOnly
                            />
                            <input
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    marginBottom: '10px',
                                }}
                                type="number"
                                placeholder="Quantity"
                            />
                            <button className="btn btn-outline-light px-4">Approve</button>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div
                            className="d-flex flex-column p-4 action-card shadow-lg text-center"
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                border: '2px solid #bdc8cbc4',
                                borderRadius: '10px',
                                color: 'white',
                            }}
                        >
                            <h2>Redeem Token</h2>
                            <input
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    marginBottom: '10px',
                                }}
                                type="text"
                                placeholder="Token"
                                readOnly
                            />
                            <input
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    marginBottom: '10px',
                                }}
                                type="number"
                                placeholder="Quantity"
                            />
                            <button className="btn btn-outline-light px-4">Redeem</button>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div
                            className="d-flex flex-column p-4 action-card shadow-lg text-center"
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                border: '2px solid #bdc8cbc4',
                                borderRadius: '10px',
                                color: 'white',
                            }}
                        >
                            <h2>Burn Token</h2>
                            <input
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    marginBottom: '10px',
                                }}
                                type="number"
                                placeholder="Token ID"
                            />
                            <button className="btn btn-outline-light px-4">Burn</button>
                        </div>
                    </div>
                </div>


                <div className="col-md-12 mt-3 ">
                    <div className="row">
                        {/* Widget 1 */}
                        <div className="col-md-3 mb-4">
                            <div
                                className="card action-card shadow-lg text-center"
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Faded background for cards
                                    border: '2px solid #bdc8cbc4',
                                    borderRadius: '10px',
                                    color: 'white', // Ensure text inside card remains white
                                }}
                            >
                                <div className="card-body">
                                    <h5 className="card-title">Active Tokens</h5>
                                    <p className="text-white">1,234</p>
                                </div>
                            </div>
                        </div>

                        {/* Widget 2 */}
                        <div className="col-md-3 mb-4">
                            <div
                                className="card action-card shadow-lg text-center"
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Faded background for cards
                                    border: '2px solid #bdc8cbc4',
                                    borderRadius: '10px',
                                    color: 'white', // Ensure text inside card remains white
                                }}
                            >
                                <div className="card-body">
                                    <h5 className="card-title">Burned Tokens</h5>
                                    <p className="text-white">567</p>
                                </div>
                            </div>
                        </div>

                        {/* Widget 3 */}
                        <div className="col-md-3 mb-4">
                            <div
                                className="card action-card shadow-lg text-center"
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Faded background for cards
                                    border: '2px solid #bdc8cbc4',
                                    borderRadius: '10px',
                                    color: 'white', // Ensure text inside card remains white
                                }}
                            >
                                <div className="card-body">
                                    <h5 className="card-title">Expiring Soon</h5>
                                    <p className="text-white">45</p>
                                </div>
                            </div>
                        </div>

                        {/* Widget 4 */}
                        <div className="col-md-3 mb-4">
                            <div
                                className="card action-card shadow-lg text-center"
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Faded background for cards
                                    border: '2px solid #bdc8cbc4',
                                    borderRadius: '10px',
                                    color: 'white', // Ensure text inside card remains white
                                }}
                            >
                                <div className="card-body">
                                    <h5 className="card-title">Total Transactions</h5>
                                    <p className="text-white">789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                        {[
                            {date: '2025-01-12', action: 'Token Burned', status: 'Completed', class: 'text-success'},
                            {date: '2025-01-11', action: 'Token Reset', status: 'Pending', class: 'text-warning'},
                            {date: '2025-01-10', action: 'Token Expired', status: 'Failed', class: 'text-danger'},
                        ].map((activity, idx) => (
                            <tr key={idx} className="text-center">
                                <td>{activity.date}</td>
                                <td>{activity.action}</td>
                                <td className={activity.class}>{activity.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>

            {showPopup && (
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
                        {['MetaMask', 'Coinbase Wallet'].map((wallet, idx) => (
                            <button
                                key={idx}
                                className="btn btn-outline-light w-100 mb-2"
                            >
                                {wallet}
                            </button>
                        ))}
                        <button
                            className="btn btn-danger w-100 mt-3"
                            onClick={togglePopup}
                        >
                            Close
                        </button>
                    </div>
                    <div
                        className="overlay"
                        onClick={togglePopup}
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
            )}
        </div>
    );
};

export default DashboardPage;
