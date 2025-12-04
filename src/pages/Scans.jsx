import React, { useState, useEffect } from 'react';
import { Play, Clock, AlertTriangle, CheckCircle, XCircle, Terminal as TerminalIcon } from 'lucide-react';

const Scans = () => {
    const [activeScans, setActiveScans] = useState([
        { id: 1, target: '192.168.1.10', type: 'Full Port Scan', progress: 45, status: 'running' },
        { id: 2, target: '10.0.0.1', type: 'Vulnerability Assessment', progress: 12, status: 'running' },
    ]);

    const [history, setHistory] = useState([
        { id: 101, target: '192.168.1.15', type: 'Quick Scan', date: '2023-10-25 14:30', status: 'completed', vulns: 2 },
        { id: 102, target: 'web-server-01', type: 'Full Port Scan', date: '2023-10-24 09:15', status: 'failed', vulns: 0 },
    ]);

    // Simulate progress
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveScans(prev => prev.map(scan => ({
                ...scan,
                progress: scan.progress < 90 ? scan.progress + Math.random() * 2 : scan.progress
            })));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-cyber-text">Scan Operations</h2>
                <button className="cyber-btn flex items-center gap-2">
                    <Play size={16} /> New Scan
                </button>
            </div>

            {/* Active Scans */}
            <div className="space-y-4">
                <h3 className="text-cyber-muted text-sm uppercase tracking-wider">Active Scans</h3>
                {activeScans.map(scan => (
                    <div key={scan.id} className="cyber-card">
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <h4 className="font-bold text-lg">{scan.target}</h4>
                                <p className="text-sm text-cyber-muted">{scan.type}</p>
                            </div>
                            <div className="flex items-center gap-2 text-cyber-accent animate-pulse">
                                <TerminalIcon size={16} />
                                <span className="text-sm font-mono">Scanning...</span>
                            </div>
                        </div>

                        <div className="relative h-2 bg-black/50 rounded-full overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full bg-cyber-accent transition-all duration-500 ease-out"
                                style={{ width: `${scan.progress}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs font-mono text-cyber-muted">
                            <span>Progress: {Math.floor(scan.progress)}%</span>
                            <span>[====================]</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Scan History */}
            <div className="space-y-4">
                <h3 className="text-cyber-muted text-sm uppercase tracking-wider">Scan History</h3>
                <div className="cyber-card overflow-hidden p-0">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 text-cyber-muted text-xs uppercase">
                            <tr>
                                <th className="p-4">Target</th>
                                <th className="p-4">Type</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Findings</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {history.map(scan => (
                                <tr key={scan.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-mono">{scan.target}</td>
                                    <td className="p-4">{scan.type}</td>
                                    <td className="p-4 text-sm text-cyber-muted">{scan.date}</td>
                                    <td className="p-4">
                                        <span className={`flex items-center gap-2 text-sm ${scan.status === 'completed' ? 'text-green-400' : 'text-red-400'
                                            }`}>
                                            {scan.status === 'completed' ? <CheckCircle size={16} /> : <XCircle size={16} />}
                                            <span className="capitalize">{scan.status}</span>
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        {scan.vulns > 0 ? (
                                            <span className="text-red-400 font-bold flex items-center gap-1">
                                                <AlertTriangle size={14} /> {scan.vulns} Vulns
                                            </span>
                                        ) : (
                                            <span className="text-cyber-muted">Clean</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Scans;
