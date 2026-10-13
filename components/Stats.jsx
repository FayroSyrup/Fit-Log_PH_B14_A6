import React from 'react';
import { Clock, Flame, Star } from 'lucide-react';

const Stats = ({ w }) => {
    return (
        <div className="flex flex-wrap gap-4 text-xs text-muted">
            <span className="flex items-center gap-1">
                <Clock className="size-3.5 text-accent" /> {w.duration} min
            </span>
            <span className="flex items-center gap-1">
                <Flame className="size-3.5 text-accent" /> {w.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
                <Star className="size-3.5 text-accent" /> {w.rating}
            </span>
        </div>
    );
};

export default Stats;