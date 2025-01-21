

const MintToken = () => (
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
)

export default MintToken
