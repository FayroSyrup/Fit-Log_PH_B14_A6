"use client";
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { WorkoutsProvider } from '@/context/WorkoutsContext';
import { PlanProvider } from '@/context/PlanContext';

const Providers = ({ children }) => {
    return (
        <WorkoutsProvider>
            <PlanProvider>
                {children}
                <Toaster
                    position="bottom-right"
                    toastOptions={{ style: { background: "#14161d", color: "#fff", border: "1px solid #23262f" } }}
                />
            </PlanProvider>
        </WorkoutsProvider>
    );
};

export default Providers;