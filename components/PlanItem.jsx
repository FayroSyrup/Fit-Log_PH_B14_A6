"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, X } from 'lucide-react';
import Stats from './Stats';
import { usePlan } from '@/context/PlanContext';

const PlanItem = ({ w, variant }) => {
    const { markDone, removeFromPlan, removeSaved } = usePlan();
    const isPlan = variant === "plan";

    const handleRemove = () => {
        if (isPlan) {
            removeFromPlan(w.id);
        } else {
            removeSaved(w.id);
        }
    };

    return (
        <li className={`flex flex-col gap-4 rounded-2xl border border-line bg-card p-3 sm:flex-row sm:items-center ${w.done ? "opacity-60" : ""}`}>
            <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg sm:w-40">
                <Image src={w.image} alt={w.name} fill sizes="160px" className="object-cover" />
            </div>

            <div className="flex-1 space-y-1">
                <h3 className={`font-display text-lg font-semibold uppercase ${w.done ? "line-through" : ""}`}>{w.name}</h3>
                <p className="text-sm text-muted">{w.equipment}</p>
                <Stats w={w} />
            </div>

            <div className="flex items-center gap-2">
                <Link href={`/workout/${w.id}`} className="rounded-full border border-line px-4 py-2 text-xs">
                    View Details
                </Link>

                {/* done button is only for today's plan */}
                {isPlan && (
                    <button
                        onClick={() => markDone(w.id)}
                        disabled={w.done}
                        className="flex items-center gap-1 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-black disabled:opacity-60"
                    >
                        <Check className="size-3.5" />
                        {w.done ? "Done" : "Mark as Done"}
                    </button>
                )}

                <button onClick={handleRemove} aria-label="Remove" className="p-2 text-muted hover:text-white">
                    <X className="size-4" />
                </button>
            </div>
        </li>
    );
};

export default PlanItem;