// src/components/ExampleComponent.js
import React, { useState } from 'react';
import { useAppData } from '../context/AppDataContext';

const ExampleComponent = () => {
    const { userData, updateUserData, updateField, clearUserData } = useAppData();
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');

    // Handler to update all user data at once
    const handleSaveAllData = () => {
        updateUserData({
            name: name || userData.name,
            id: id || userData.id,
            email: email || userData.email
        });
    };

    // Handler to update a single field
    const handleUpdateName = () => {
        if (name) {
            updateField('name', name);
            setName('');
        }
    };

    return (
        <div>
            <h2>User Data Management</h2>

            <div>
                <h3>Current User Data:</h3>
                <p>Name: {userData.name || 'Not set'}</p>
                <p>ID: {userData.id || 'Not set'}</p>
                <p>Email: {userData.email || 'Not set'}</p>
            </div>

            <div>
                <h3>Update Individual Field:</h3>
                <div>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={handleUpdateName}>Update Name</button>
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Enter ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <button onClick={() => {
                        if (id) {
                            updateField('id', id);
                            setId('');
                        }
                    }}>Update ID</button>
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={() => {
                        if (email) {
                            updateField('email', email);
                            setEmail('');
                        }
                    }}>Update Email</button>
                </div>
            </div>

            <div>
                <h3>Update All Data:</h3>
                <button onClick={handleSaveAllData}>Save All Changes</button>
            </div>

            <div>
                <h3>Clear User Data:</h3>
                <button onClick={clearUserData}>Clear All Data</button>
            </div>
        </div>
    );
};

export default ExampleComponent;
