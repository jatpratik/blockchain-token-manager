import { useState } from "react";

const RedeemToken = () => {
    const [token, setToken] = useState("Token123"); // Example default token
    const [quantity, setQuantity] = useState("");

    const handleRedeem = () => {
        console.log("Redeeming Token:", token, "Quantity:", quantity);
        // Add your redeem token logic here
    };

    return (
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
                    value={token}
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
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button className="btn btn-outline-light px-4" onClick={handleRedeem}>
                    Redeem
                </button>
            </div>
        </div>
    );
};

export default RedeemToken;
