import React from 'react';
import Link from 'next/link';

const EmptyState = () => {
    return (
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-line px-4 py-20 text-center">
            <h3 className="font-display text-xl font-bold uppercase">Nothing here yet</h3>
            <p className="mt-2 text-sm text-muted">Browse the library and add a lift to get today moving.</p>
            <Link href="/" className="mt-5 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                Go to workouts
            </Link>
        </div>
    );
};

export default EmptyState;