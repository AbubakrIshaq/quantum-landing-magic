
import React from 'react';

interface AnimatedGradientProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedGradient = ({ children, className = '' }: AnimatedGradientProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 animated-gradient opacity-20"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedGradient;
