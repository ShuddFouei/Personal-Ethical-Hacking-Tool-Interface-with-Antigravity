import React from 'react';

const NetworkGraph = () => {
    return (
        <div className="cyber-card h-full relative overflow-hidden flex items-center justify-center min-h-[300px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyber-accent/5 to-transparent"></div>

            {/* Central Node */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-cyber-accent/20 border-2 border-cyber-accent flex items-center justify-center shadow-[0_0_20px_rgba(0,255,157,0.3)] animate-pulse">
                <span className="text-xs font-bold text-cyber-accent">NEXUS</span>
            </div>

            {/* Connected Nodes */}
            {/* Lines would ideally be SVG, using absolute divs for simplicity here */}

            {/* Node 1 */}
            <div className="absolute top-1/4 left-1/4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center mb-2">
                    <span className="text-[10px] text-blue-400">WEB</span>
                </div>
            </div>

            {/* Node 2 */}
            <div className="absolute bottom-1/4 right-1/4 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center mb-2">
                    <span className="text-[10px] text-red-400">DB</span>
                </div>
            </div>

            {/* Node 3 */}
            <div className="absolute top-1/3 right-1/3 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 border border-yellow-500 flex items-center justify-center mb-2">
                    <span className="text-[10px] text-yellow-400">API</span>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500 flex items-center justify-center animate-bounce">
                <span className="text-[10px] text-purple-400">?</span>
            </div>
        </div>
    );
};

export default NetworkGraph;
