import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./dashboard.css";
import Header from "../components/Header";
import Widget from "../components/Widget";
import {activities, widgets} from "../components/Data";
import RecentActivities from "../components/RecentActivities";
import Popup from "../components/Popup";
import MintToken from "../components/MintToken";
import TransferToken from "../components/TransferToken";
import ApproveToken from "../components/ApproveToken";
import RedeemToken from "../components/RedeemToken";
import BurnToken from "../components/BurnToken";

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
            <Header onTogglePopup={togglePopup} />

            <div className="container-fluid p-4">
                <div className="row g-4 card-container">

                    <MintToken />

                   <TransferToken/>

                   <ApproveToken/>

                    <RedeemToken/>

                    <BurnToken/>


                </div>

                <div className="row mt-3">
                    {widgets.map((widget, idx) => (
                        <div key={idx} className="col-md-3 mb-4">
                            <Widget {...widget} />
                        </div>
                    ))}
                </div>

                <RecentActivities activities={activities} />

            </div>
            {showPopup && <Popup wallets={['MetaMask', 'Coinbase Wallet']} onClose={togglePopup} />}
        </div>
    );
};

export default DashboardPage;
