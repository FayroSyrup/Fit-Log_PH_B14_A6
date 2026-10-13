import React from 'react';

const Spinner = ({ label = "Loading workouts…" }) => {
    return (
        <div className="flex flex-col items-center gap-3 py-20 text-muted">
            <div className="size-10 animate-spin rounded-full border-4 border-line border-t-accent"></div>
            <p className="text-sm">{label}</p>
        </div>
    );
};

export default Spinner;