
import React from 'react';

export const COLORS = {
  yellow: '#FDB813',
  saffron: '#FF9933',
  red: '#E23D28',
  maroon: '#800000',
  white: '#FFFFFF',
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact Us', href: '#contact' },
];

// Added style prop to MandalaIcon to support dynamic transformations in Hero component
export const MandalaIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 100 100" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
    <path d="M50 10 A40 40 0 0 1 90 50 A40 40 0 0 1 50 90 A40 40 0 0 1 10 50 A40 40 0 0 1 50 10 Z" fill="none" stroke="currentColor" strokeWidth="0.2" />
    <g transform="translate(50,50)">
      {[...Array(12)].map((_, i) => (
        <path key={i} d="M0 -45 Q5 -30 0 -15 Q-5 -30 0 -45" fill="currentColor" opacity="0.4" transform={`rotate(${i * 30})`} />
      ))}
    </g>
  </svg>
);