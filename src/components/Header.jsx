import React from 'react';

const Header = ({ onTogglePopup }) => (
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
        <button className="btn btn-outline-light px-4" onClick={onTogglePopup}>
            Connect Wallet
        </button>
    </header>
);

export default Header;
