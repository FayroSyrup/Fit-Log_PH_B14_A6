"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

// backup api: https://api.abcz.workers.dev/api/fitlog
const API = "https://api.api-store.workers.dev/api/fitlog";

const WorkoutsContext = createContext();

export const WorkoutsProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setWorkouts(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Could not load workouts. Please try again.");
                setLoading(false);
            });
    }, []);

    return (
        <WorkoutsContext.Provider value={{ workouts, loading, error }}>
            {children}
        </WorkoutsContext.Provider>
    );
};

export const useWorkouts = () => useContext(WorkoutsContext);