import React from 'react';

const FlowDiagram = () => {
  return (
    <svg 
      width="100%" 
      viewBox="0 0 800 200" 
      xmlns="http://www.w3.org/2000/svg"
      className="my-12"
    >
      <defs>
        <marker 
          id="arrowhead" 
          markerWidth="10" 
          markerHeight="7" 
          refX="0" 
          refY="3.5" 
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="rgb(var(--accent-rgb))" />
        </marker>
      </defs>

      {/* Nodes */}
      <g className="cursor-pointer group">
        <rect x="50" y="50" width="120" height="60" rx="10" ry="10" fill="rgb(var(--code-bg-rgb))" stroke="rgb(var(--border-rgb))" strokeWidth="2" />
        <text x="110" y="85" fill="rgb(var(--foreground-rgb))" textAnchor="middle" className="font-semibold group-hover:fill-accent transition-colors">Cursor IDE</text>
      </g>

      <g className="cursor-pointer group">
        <rect x="240" y="50" width="120" height="60" rx="10" ry="10" fill="rgb(var(--code-bg-rgb))" stroke="rgb(var(--border-rgb))" strokeWidth="2" />
        <text x="300" y="85" fill="rgb(var(--foreground-rgb))" textAnchor="middle" className="font-semibold group-hover:fill-accent transition-colors">Next.js App</text>
      </g>

      <g className="cursor-pointer group">
        <rect x="430" y="50" width="120" height="60" rx="10" ry="10" fill="rgb(var(--code-bg-rgb))" stroke="rgb(var(--border-rgb))" strokeWidth="2" />
        <text x="490" y="85" fill="rgb(var(--foreground-rgb))" textAnchor="middle" className="font-semibold group-hover:fill-accent transition-colors">GitHub</text>
      </g>
      
      <g className="cursor-pointer group">
        <rect x="620" y="50" width="120" height="60" rx="10" ry="10" fill="rgb(var(--code-bg-rgb))" stroke="rgb(var(--border-rgb))" strokeWidth="2" />
        <text x="680" y="85" fill="rgb(var(--foreground-rgb))" textAnchor="middle" className="font-semibold group-hover:fill-accent transition-colors">Vercel</text>
      </g>

      {/* Arrows */}
      <line x1="175" y1="80" x2="235" y2="80" stroke="rgb(var(--accent-rgb))" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="365" y1="80" x2="425" y2="80" stroke="rgb(var(--accent-rgb))" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="555" y1="80" x2="615" y2="80" stroke="rgb(var(--accent-rgb))" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Arrow Labels */}
      <text x="205" y="70" fill="rgb(var(--muted-rgb))" textAnchor="middle" className="text-xs">Develop</text>
      <text x="395" y="70" fill="rgb(var(--muted-rgb))" textAnchor="middle" className="text-xs">Push Code</text>
      <text x="585" y="70" fill="rgb(var(--muted-rgb))" textAnchor="middle" className="text-xs">Deploy</text>

    </svg>
  );
};

export default FlowDiagram; 