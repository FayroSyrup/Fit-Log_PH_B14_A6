"use client";
import React from 'react';
import { CalendarPlus, Bookmark } from 'lucide-react';
import { usePlan } from '@/context/PlanContext';

const DetailActions = ({ w }) => {
    const { plan, MAX_PLAN, addToPlan, saveForLater } = usePlan();

    // button is disabled when the plan has 5 lifts
    const planFull = plan.length >= MAX_PLAN;

    return (
        <div className="mt-6 flex flex-wrap gap-3">
            <button
                onClick={() => addToPlan(w)}
                disabled={planFull}
                className="flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
                <CalendarPlus className="size-4" />
                Add to today&apos;s plan
            </button>
            <button
                onClick={() => saveForLater(w)}
                className="flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm hover:border-accent/50"
            >
                <Bookmark className="size-4" />
                Save for later
            </button>
        </div>
    );
};

export default DetailActions;