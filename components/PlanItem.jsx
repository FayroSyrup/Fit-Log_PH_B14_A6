import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Stats from './Stats';

const PlanItem = ({ w }) => {
    return (
        <li className="flex flex-col gap-4 rounded-2xl border border-line bg-card p-3 sm:flex-row sm:items-center">
            <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg sm:w-40">
                <Image src={w.image} alt={w.name} fill sizes="160px" className="object-cover" />
            </div>

            <div className="flex-1 space-y-1">
                <h3 className="font-display text-lg font-semibold uppercase">{w.name}</h3>
                <p className="text-sm text-muted">{w.equipment}</p>
                <Stats w={w} />
            </div>

            <Link href={`/workout/${w.id}`} className="rounded-full border border-line px-4 py-2 text-center text-xs">
                View Details
            </Link>
        </li>
    );
};

export default PlanItem;