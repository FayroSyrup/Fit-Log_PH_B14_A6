import React from 'react';
import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-wider">
            <Dumbbell className="size-5 text-accent" />
            <span>FITLOG</span>
        </Link>
    );
};

export default Logo;
