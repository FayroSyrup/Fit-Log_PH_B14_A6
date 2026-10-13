import React from 'react';
import { ChevronDown } from 'lucide-react';

const SortSelect = ({ value, onChange }) => {
    return (
        <label className="flex items-center gap-2 text-xs text-muted">
            Sort By
            <span className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="appearance-none rounded-lg border border-line bg-card py-2 pl-3 pr-8 text-white outline-none"
                >
                    <option value="duration">Duration</option>
                    <option value="caloriesBurned">Calories</option>
                    <option value="rating">Rating</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2" />
            </span>
        </label>
    );
};

export default SortSelect;