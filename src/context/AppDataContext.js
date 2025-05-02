// src/context/AppDataContext.js
import { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AppDataContext = createContext();

// Create a provider component
export const AppDataProvider = ({ children }) => {
    // Initialize state with values from localStorage if available
    const [userData, setUserData] = useState(() => {
        const savedData = localStorage.getItem('app_user_data');
        return savedData ? JSON.parse(savedData) : {
            name: null,
            id: null,
            email: null,
            // Add any other fields you need
        };
    });

    // Update localStorage when userData changes
    useEffect(() => {
        localStorage.setItem('app_user_data', JSON.stringify(userData));
    }, [userData]);

    // Function to update all user data at once
    const updateUserData = (newData) => {
        setUserData(newData);
    };

    // Function to update a specific field
    const updateField = (field, value) => {
        setUserData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Function to clear all user data
    const clearUserData = () => {
        setUserData({
            name: null,
            id: null,
            email: null,
            // Reset any other fields to null
        });
    };

    // Values to be provided to consumers
    const contextValue = {
        userData,
        updateUserData,
        updateField,
        clearUserData
    };

    return (
        <AppDataContext.Provider value={contextValue}>
            {children}
        </AppDataContext.Provider>
    );
};

// Custom hook to use the app data context
export const useAppData = () => {
    const context = useContext(AppDataContext);
    if (!context) {
        throw new Error('useAppData must be used within an AppDataProvider');
    }
    return context;
};

export default AppDataContext;
