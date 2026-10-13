"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { usePlan } from '@/context/PlanContext';

const Navbar = () => {
    const pathname = usePathname();
    const { plan, saved } = usePlan();

    // the active link gets the green look
    const linkStyle = (path) => {
        if (pathname === path) {
            return "rounded-full bg-accent/15 px-3 py-1 text-sm text-accent";
        }
        return "rounded-full px-3 py-1 text-sm text-muted hover:text-white";
    };

    return (
        <header className="border-b border-line">
            <nav className="container mx-auto flex items-center justify-between px-4 py-3">
                <Logo />

                <div className="flex items-center gap-1">
                    <Link href="/" className={linkStyle("/")}>Workouts</Link>
                    <Link href="/my-plan" className={linkStyle("/my-plan")}>My Plan</Link>
                </div>

                {/* both badges go to the my plan page */}
                <div className="flex items-center gap-3 text-xs">
                    <Link href="/my-plan" className="flex items-center gap-1.5">
                        Plan
                        <span className="rounded-full bg-accent px-2 py-0.5 font-semibold text-black">{plan.length}</span>
                    </Link>
                    <Link href="/my-plan" className="flex items-center gap-1.5 text-muted">
                        Saved
                        <span className="rounded-full border border-line px-2 py-0.5 text-white">{saved.length}</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;