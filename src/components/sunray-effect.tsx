import React from 'react';

export default function SunrayEffect() {
  return (<>
    <div 
        className='fixed z-0 top-[30vh] right-[20vw] w-0 h-0 rounded-full'
        style={{ boxShadow: '0 0 600px 300px rgb(234, 179, 8, 0.05)' }}
    ></div>
    <div 
        className='fixed z-0 top-[70vh] left-[20vw] w-0 h-0 rounded-full'
        style={{ boxShadow: '0 0 600px 300px rgb(234, 179, 8, 0.05)' }}
    ></div>
  </>)
}
