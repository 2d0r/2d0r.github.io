'use client';

import { useEffect } from 'react';
import './rain.css';

export default function Rain() {
  // helper to generate random numbers
  const randomBetween = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const makeItRain = () => {
    const frontRow = document.querySelector<HTMLDivElement>('.rain.front-row');
    const backRow = document.querySelector<HTMLDivElement>('.rain.back-row');

    if (!frontRow || !backRow) return;

    frontRow.innerHTML = '';
    backRow.innerHTML = '';

    let increment = 0;
    let drops = '';
    let backDrops = '';

    while (increment < 100) {
      const randoHundo = randomBetween(1, 98);
      const randoFiver = randomBetween(2, 5);
      increment += randoFiver;

      const dropHTML = `
        <div class='drop' style='left: ${Math.min(increment, 90)}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;'>
          <div class='stem' style='animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;'></div>
          <div class='splat' style='animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;'></div>
        </div>`;
      
      const backDropHTML = `
        <div class='drop' style='right: ${increment}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;'>
          <div class='stem' style='animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;'></div>
          <div class='splat' style='animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;'></div>
        </div>`;

      drops += dropHTML;
      backDrops += backDropHTML;
    }

    frontRow.innerHTML = drops;
    backRow.innerHTML = backDrops;
  };

  useEffect(() => {
    // initial rain
    makeItRain();
  }, []);

    return (
        <div className='back-row-toggle overflow-x-hidden w-full'>
            <div className='rain front-row'></div>
            <div className='rain back-row'></div>
        </div>
    );
}
