import React from 'react';

export default function RightArrow({ children, ...props }) {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
        <path d="M29 38.6666L38.6667 29L29 19.3333" stroke="#B892FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.3333 29L38.6666 29" stroke="#B892FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}