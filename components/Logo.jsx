import React from 'react';
import Link from 'next/link';
import DumbbellImg  from '@/assets/logo.png';

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-wider">
            <DumbbellImg className="size-5 text-accent" />
            <span>FITLOG</span>
        </Link>
    );
};

export default Logo;