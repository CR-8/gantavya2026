import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface SponsorCardProps {
  name: string;
  imageUrl?: string;
  className?: string;
}

function SponsorCard({ name, imageUrl = '/vercel.svg', className }: SponsorCardProps) {
  return (
    <div className={cn("group", className)}>
      <div className="relative transition-all duration-300 rounded-md overflow-hidden h-full">
        <div className="flex items-center justify-center p-8 min-h-[160px]">
          <Image
            src={imageUrl}
            alt={`${name} Logo`}
            height={80}
            width={160}
            className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default SponsorCard;