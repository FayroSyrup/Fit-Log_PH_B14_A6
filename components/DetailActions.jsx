import React from 'react';
import { CalendarPlus, Bookmark } from 'lucide-react';

const DetailActions = () => {
    return (
        <div className="mt-6 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-black">
                <CalendarPlus className="size-4" />
                Add to today&apos;s plan
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm">
                <Bookmark className="size-4" />
                Save for later
            </button>
        </div>
    );
};

export default DetailActions;