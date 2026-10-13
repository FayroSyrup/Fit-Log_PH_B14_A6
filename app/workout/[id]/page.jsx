"use client";
import React from 'react';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { useWorkouts } from '@/context/WorkoutsContext';
import Spinner from '@/components/Spinner';
import DetailActions from '@/components/DetailActions';

const WorkoutDetails = () => {
    const { id } = useParams();
    const { workouts, loading } = useWorkouts();

    if (loading) {
        return <Spinner />;
    }

    const w = workouts.find((item) => String(item.id) === id);

    // wrong id shows the 404 page
    if (!w) {
        notFound();
    }

    const specs = [
        { label: "Equipment", value: w.equipment },
        { label: "Difficulty", value: w.difficulty },
        { label: "Sets", value: w.sets },
        { label: "Reps", value: w.reps },
        { label: "Duration", value: `${w.duration} min` },
        { label: "Calories", value: `${w.caloriesBurned} kcal` },
        { label: "Rating", value: w.rating },
    ];

    return (
        <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
                <Image src={w.image} alt={w.name} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>

            <div className="space-y-4">
                <h1 className="font-display text-3xl font-bold uppercase sm:text-4xl">{w.name}</h1>
                <p className="text-muted">{w.description}</p>

                <div className="flex flex-wrap gap-2">
                    {w.muscleGroups.map((group) => (
                        <span key={group} className="rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-black">
                            {group}
                        </span>
                    ))}
                </div>

                <div className="divide-y divide-line rounded-xl border border-line bg-card">
                    {specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between px-4 py-3 text-sm">
                            <span className="text-xs uppercase tracking-wider text-muted">{spec.label}</span>
                            <span>{spec.value}</span>
                        </div>
                    ))}
                </div>

                <h2 className="pt-4 font-display text-lg font-bold uppercase">Instructions</h2>
                <ol className="list-decimal space-y-2 pl-5 text-sm text-muted">
                    {w.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>

                <DetailActions />
            </div>
        </div>
    );
};

export default WorkoutDetails;