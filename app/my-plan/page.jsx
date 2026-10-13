"use client";
import React, { useState } from 'react';
import { useWorkouts } from '@/context/WorkoutsContext';
import { usePlan } from '@/context/PlanContext';
import Spinner from '@/components/Spinner';
import PlanItem from '@/components/PlanItem';
import EmptyState from '@/components/EmptyState';

const MyPlan = () => {
    const { workouts, loading } = useWorkouts();
    const { plan, saved } = usePlan();
    const [tab, setTab] = useState("plan");

    // plan only stores ids, so find the full workout for each id
    const planItems = plan
        .map((p) => {
            const workout = workouts.find((w) => w.id === p.id);
            return { ...workout, done: p.done };
        })
        .filter((item) => item.id);

    const savedItems = saved
        .map((id) => workouts.find((w) => w.id === id))
        .filter((item) => item);

    const list = tab === "plan" ? planItems : savedItems;

    // numbers on the top cards come from today's plan
    let minutes = 0;
    let calories = 0;
    planItems.forEach((w) => {
        minutes += w.duration;
        calories += w.caloriesBurned;
    });

    const stats = [
        { label: "Exercises", value: planItems.length, green: true },
        { label: "Minutes", value: minutes },
        { label: "Calories", value: calories },
    ];

    return (
        <div>
            <h1 className="font-display text-3xl font-bold uppercase">My Plan</h1>
            <p className="mb-6 text-sm text-muted">Cap of five lifts for today. Finish them, then load more.</p>

            <div className="grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-card py-4">
                {stats.map((s) => (
                    <div key={s.label} className="px-4 sm:px-6">
                        <p className="text-xs text-muted">{s.label}</p>
                        <p className={`font-display text-3xl font-bold sm:text-4xl ${s.green ? "text-accent" : ""}`}>
                            {s.value}
                        </p>
                    </div>
                ))}
            </div>

            <div className="my-6 flex items-center justify-between gap-3">
                <div className="inline-flex rounded-lg border border-line bg-card p-1 text-xs">
                    <button
                        onClick={() => setTab("plan")}
                        className={`rounded-md px-4 py-2 ${tab === "plan" ? "bg-line font-semibold" : "text-muted"}`}
                    >
                        Today&apos;s Plan
                    </button>
                    <button
                        onClick={() => setTab("saved")}
                        className={`rounded-md px-4 py-2 ${tab === "saved" ? "bg-line font-semibold" : "text-muted"}`}
                    >
                        Saved
                    </button>
                </div>
            </div>

            {loading && <Spinner />}
            {!loading && list.length === 0 && <EmptyState />}

            <ul className="space-y-3">
                {list.map((w) => (
                    <PlanItem key={w.id} w={w} />
                ))}
            </ul>
        </div>
    );
};

export default MyPlan;