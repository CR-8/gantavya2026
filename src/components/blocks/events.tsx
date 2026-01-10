"use client";

import React from 'react';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';

interface EventData {
  slug: string;
  name: string;
  brief: string;
  rulebookUrl?: string;
}

const eventsData: EventData[] = [
  {
    slug: 'robo-soccer',
    name: 'Robo Soccer',
    brief: 'Build autonomous robots to compete in an intense soccer match. Score goals and defend your territory.',
    rulebookUrl: '/rulebooks/robo-soccer.pdf',
  },
  {
    slug: 'line-follower',
    name: 'Line Follower',
    brief: 'Design a robot that navigates complex tracks autonomously. Speed and precision are key to victory.',
    rulebookUrl: '/rulebooks/line-follower.pdf',
  },
  {
    slug: 'robo-war',
    name: 'Robo War',
    brief: 'Ultimate battle of machines. Build powerful combat robots and fight for supremacy in the arena.',
    rulebookUrl: '/rulebooks/robo-war.pdf',
  },
  {
    slug: 'maze-solver',
    name: 'Maze Solver',
    brief: 'Navigate through intricate mazes using sensors and algorithms. Find the shortest path to win.',
    rulebookUrl: '/rulebooks/maze-solver.pdf',
  },
  {
    slug: 'drone-race',
    name: 'Drone Race',
    brief: 'High-speed aerial competition through obstacle courses. Master control and precision in three dimensions.',
    rulebookUrl: '/rulebooks/drone-race.pdf',
  },
  {
    slug: 'robotic-arm',
    name: 'Robotic Arm Challenge',
    brief: 'Precision manipulation task using robotic arms. Complete complex tasks with accuracy and efficiency.',
    rulebookUrl: '/rulebooks/robotic-arm.pdf',
  },
];

function Events() {
  return (
    <section className="relative min-h-screen bg-[var(--color-bg-black)] py-24 px-6 md:px-16 lg:px-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-primary-cyan) 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-[var(--color-text-primary)] mb-6">
            EVENTS
          </h2>
          <p className="text-[var(--color-text-secondary)] font-inter text-lg max-w-3xl mx-auto">
            Compete in cutting-edge robotics challenges. Choose your battleground and prove your skills.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface EventCardProps {
  event: EventData;
}

function EventCard({ event }: EventCardProps) {
  return (
    <div className="group relative bg-[var(--color-bg-charcoal)] rounded-lg overflow-hidden border border-[var(--color-bg-graphite)] hover:border-[var(--color-primary-orange)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary-orange)]/10">
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-orange)]/0 to-[var(--color-primary-cyan)]/0 group-hover:from-[var(--color-primary-orange)]/5 group-hover:to-[var(--color-primary-cyan)]/5 transition-all duration-300 pointer-events-none" />
      
      <div className="relative p-6 flex flex-col h-full">
        {/* Event Name */}
        <Link href={`/events/${event.slug}`} className="group/title">
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-[var(--color-text-primary)] mb-3 group-hover/title:text-[var(--color-primary-orange)] transition-colors duration-300">
            {event.name}
          </h3>
        </Link>

        {/* Brief Description */}
        <p className="text-[var(--color-text-secondary)] font-inter text-sm md:text-base mb-6 flex-grow leading-relaxed">
          {event.brief}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          {/* Register Button */}
          <Link 
            href={`/events/${event.slug}/register`}
            className="w-full bg-muted-foreground text-[var(--color-bg-black)] px-4 py-3 rounded-md font-exo-2 font-semibold text-center hover:shadow-lg hover:shadow-[var(--color-primary-orange)]/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            Register Now
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Download Rulebook Button */}
          {event.rulebookUrl && (
            <a 
              href={event.rulebookUrl}
              download
              className="w-full bg-[var(--color-bg-slate)] text-[var(--color-text-primary)] px-4 py-3 rounded-md font-exo-2 font-semibold text-center border border-[var(--color-bg-graphite)] hover:border-[var(--color-primary-cyan)] hover:bg-[var(--color-bg-graphite)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Rulebook
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Events;
