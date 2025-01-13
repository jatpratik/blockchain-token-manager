import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardPage = () => {

    console.log('DashboardPage')

    return (
        <div className="container-fluid">
                {/* Main Content */}
                <div className="col-md-9 p-4">
                    <h1>Welcome to Your Dashboard!</h1>
                    <div className="row">
                        {/* Widget 1 */}
                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Active Tokens</h5>
                                    <p className="card-text">1,234</p>
                                </div>
                            </div>
                        </div>

                        {/* Widget 2 */}
                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Burned Tokens</h5>
                                    <p className="card-text">567</p>
                                </div>
                            </div>
                        </div>

                        {/* Widget 3 */}
                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Expiring Soon</h5>
                                    <p className="card-text">45</p>
                                </div>
                            </div>
                        </div>

                        {/* Widget 4 */}
                        <div className="col-md-3 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Total Transactions</h5>
                                    <p className="card-text">789</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activities Table */}
                    <h2>Recent Activities</h2>
                    <table className="table table-bordered mt-4">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2025-01-12</td>
                            <td>Token Burned</td>
                            <td>Completed</td>
                        </tr>
                        <tr>
                            <td>2025-01-11</td>
                            <td>Token Reset</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>2025-01-10</td>
                            <td>Token Expired</td>
                            <td>Failed</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    );
};

export default DashboardPage;
