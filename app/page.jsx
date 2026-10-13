import React from 'react';
import Hero from '@/components/Hero';

const Home = () => {
    return (
        <div>
            <Hero />
            <section id="library" className="scroll-mt-6 pt-12">
                <h2 className="font-display text-2xl font-bold uppercase">The Library</h2>
                <p className="text-sm text-muted">Twelve lifts covering every major muscle group.</p>
            </section>
        </div>
    );
};

export default Home;