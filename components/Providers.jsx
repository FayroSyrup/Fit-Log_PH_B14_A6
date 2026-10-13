"use client";
import React from 'react';
import { WorkoutsProvider } from '@/context/WorkoutsContext';

const Providers = ({ children }) => {
    return <WorkoutsProvider>{children}</WorkoutsProvider>;
};

export default Providers;