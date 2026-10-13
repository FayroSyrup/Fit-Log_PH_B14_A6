"use client";
import React from 'react';
import Hero from '@/components/Hero';
import WorkoutCard from '@/components/WorkoutCard';
import Spinner from '@/components/Spinner';
import { useWorkouts } from '@/context/WorkoutsContext';

const Home = () => {
    const { workouts, loading, error } = useWorkouts();

    return (
        <div>
            <Hero />

            <section id="library" className="scroll-mt-6 pt-12">
                <h2 className="font-display text-2xl font-bold uppercase">The Library</h2>
                <p className="mb-6 text-sm text-muted">Twelve lifts covering every major muscle group.</p>

                {loading && <Spinner />}
                {error && <p className="text-red-400">{error}</p>}

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {workouts.map((w) => (
                        <WorkoutCard key={w.id} w={w} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;