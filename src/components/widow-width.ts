"use client";

import { useState, useEffect } from 'react';

export default function WindowWidth({ onWidthChange } : {
    onWidthChange: (width: number) => {},
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (onWidthChange) {
        onWidthChange(window.innerWidth);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Initial width
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [onWidthChange]);

  return null; // This component does not render anything visible
}