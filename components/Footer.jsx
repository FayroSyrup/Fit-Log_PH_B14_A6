import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="border-t border-line">
            <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted sm:flex-row">
                <Logo />
                <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </footer>
    );
};

export default Footer;