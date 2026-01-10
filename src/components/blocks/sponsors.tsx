import React from 'react';
import SponsorCard from '../ui/sponsor-card';
import { cn } from '@/lib/utils';

const sponsorData = [
  { name: 'Oppo', imageUrl: '/vercel.svg' },
  { name: 'Udemy', imageUrl: '/window.svg' },
  { name: 'JBL', imageUrl: '/file.svg' },
  { name: 'Qualium', imageUrl: '/globe.svg' },
  { name: 'Seneca', imageUrl: '/window.svg' },
  { name: 'Paulo', imageUrl: '/vercel.svg' },
];

function Sponsors() {
  return (
    <section className="relative min-h-screen bg-[var(--color-bg-black)] py-24 px-6 md:px-16 lg:px-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-primary-orange) 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-[var(--color-text-primary)] mb-6">
            OUR SPONSORS
          </h2>
          <p className="text-[var(--color-text-secondary)] font-inter text-lg max-w-3xl mx-auto">
            Empowering innovation through strategic partnerships with industry leaders
          </p>
        </div>

        {/* Sponsors Grid - 3 columns, 2 rows with separators */}
        <div className="max-w-6xl mx-auto border border-[var(--color-bg-charcoal)] rounded-lg overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {sponsorData.map((sponsor, index) => (
              <div
                key={index}
                className={cn(
                  "relative",
                  // Right border for all except last in row (0, 1 get border; 2 doesn't)
                  index % 3 !== 2 && "border-r border-[var(--color-bg-charcoal)]",
                  // Bottom border for first row (indices 0, 1, 2)
                  index < 3 && "border-b border-[var(--color-bg-charcoal)]"
                )}
              >
                <SponsorCard
                  name={sponsor.name}
                  imageUrl={sponsor.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>      
    </div>
    </section>
  );
}

export default Sponsors;