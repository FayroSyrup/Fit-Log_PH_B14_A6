import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center py-24 text-center">
            <p className="font-display text-7xl font-bold text-accent">404</p>
            <h1 className="mt-2 font-display text-2xl font-bold uppercase">Page not found</h1>
            <p className="mt-2 text-sm text-muted">The page you are looking for does not exist.</p>
            <Link href="/" className="mt-6 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black">
                Back to workouts
            </Link>
        </div>
    );
};

export default NotFound;