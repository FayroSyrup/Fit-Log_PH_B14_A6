import React from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import heroImg from '@/assets/banner.png';

const Hero = () => {
    return (
        <section className="grid items-center gap-8 rounded-2xl border border-line bg-card p-6 md:grid-cols-2 md:p-12">
            <div className="space-y-4">
                <p className="text-xs font-medium tracking-widest text-accent">WORKOUT LIBRARY</p>
                <h1 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
                    Train with intent. Log every set.
                </h1>
                <p className="max-w-md text-muted">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                </p>
                {/* this is a normal anchor link, so the page does not change */}
                <a href="#library" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-black">
                    <ArrowDown className="size-4" />
                    BROWSE WORKOUTS
                </a>
            </div>
            <div className="flex justify-center">
                <Image src={heroImg} alt="Hero Image" priority className="h-auto w-full max-w-sm object-contain" />
            </div>
        </section>
    );
};

export default Hero;