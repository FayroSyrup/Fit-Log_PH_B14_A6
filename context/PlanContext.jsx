"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const PlanContext = createContext();

const MAX_PLAN = 5;
const KEY = "fitlog-data";

export const PlanProvider = ({ children }) => {
    const [plan, setPlan] = useState([]);   // each item looks like { id, done }
    const [saved, setSaved] = useState([]); // list of ids
    const [loaded, setLoaded] = useState(false);

    // read old data from localStorage when the app opens
    useEffect(() => {
        const old = localStorage.getItem(KEY);
        if (old) {
            const data = JSON.parse(old);
            setPlan(data.plan || []);
            setSaved(data.saved || []);
        }
        setLoaded(true);
    }, []);

    // save data every time it changes
    useEffect(() => {
        if (loaded) {
            localStorage.setItem(KEY, JSON.stringify({ plan, saved }));
        }
    }, [plan, saved, loaded]);

    const addToPlan = (w) => {
        const exists = plan.find((p) => p.id === w.id);
        if (exists) {
            toast.error("Already in today's plan");
            return;
        }
        if (plan.length >= MAX_PLAN) {
            toast.error("Plan is full. Max 5 lifts for today");
            return;
        }
        setPlan([...plan, { id: w.id, done: false }]);
        toast.success("Added to today's plan");
    };

    const saveForLater = (w) => {
        if (saved.includes(w.id)) {
            toast.error("Already saved");
            return;
        }
        setSaved([...saved, w.id]);
        toast.success("Saved for later");
    };

    const removeFromPlan = (id) => {
        setPlan(plan.filter((p) => p.id !== id));
        toast.success("Removed from today's plan");
    };

    const removeSaved = (id) => {
        setSaved(saved.filter((item) => item !== id));
        toast.success("Removed from saved");
    };

    const markDone = (id) => {
        const updated = plan.map((p) => {
            if (p.id === id) {
                return { ...p, done: true };
            }
            return p;
        });
        setPlan(updated);
        toast.success("Nice work! Marked as done");
    };

    return (
        <PlanContext.Provider
            value={{ plan, saved, MAX_PLAN, addToPlan, saveForLater, removeFromPlan, removeSaved, markDone }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export const usePlan = () => useContext(PlanContext);