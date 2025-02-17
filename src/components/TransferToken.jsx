import { useState } from "react";

const TransferToken = () => {
    const [recipient, setRecipient] = useState("");
    const [tokenId, setTokenId] = useState("");

    const handleTransfer = () => {
        console.log("Transferring Token ID:", tokenId, "to Recipient:", recipient);
        // Add your token transfer logic here
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
                <h2>Transfer Token</h2>
                <input
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        marginBottom: '10px',
                    }}
                    type="text"
                    placeholder="Recipient Address"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                />
                <input
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        marginBottom: '10px',
                    }}
                    type="number"
                    placeholder="Token ID"
                    value={tokenId}
                    onChange={(e) => setTokenId(e.target.value)}
                />
                <button className="btn btn-outline-light px-4" onClick={handleTransfer}>
                    Transfer
                </button>
            </div>
        </div>
    );
};

export default TransferToken;
