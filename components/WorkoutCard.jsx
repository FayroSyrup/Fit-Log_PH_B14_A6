import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Stats from './Stats';

const WorkoutCard = ({ w }) => {
    return (
        <Link href={`/workout/${w.id}`} className="group overflow-hidden rounded-2xl border border-line bg-card transition hover:-translate-y-1 hover:border-accent/50">
            <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                    src={w.image}
                    alt={w.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                />
            </div>
            <div className="space-y-2 p-4">
                <div className="flex flex-wrap gap-2">
                    {w.muscleGroups.map((group) => (
                        <span key={group} className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase text-black">
                            {group}
                        </span>
                    ))}
                </div>
                <h3 className="font-display text-lg font-semibold uppercase">{w.name}</h3>
                <p className="text-sm text-muted">{w.equipment}</p>
                <Stats w={w} />
            </div>
        </Link>
    );
};

export default WorkoutCard;