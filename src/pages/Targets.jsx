import React, { useState } from 'react';
import { Plus, Search, Server, Trash2, MoreVertical, Globe, Laptop } from 'lucide-react';

const initialTargets = [
    { id: 1, name: 'Production Web Server', ip: '192.168.1.10', os: 'Linux (Ubuntu)', status: 'online', type: 'server' },
    { id: 2, name: 'Corporate Gateway', ip: '10.0.0.1', os: 'Cisco IOS', status: 'online', type: 'network' },
    { id: 3, name: 'Dev Database', ip: '192.168.1.15', os: 'Windows Server 2019', status: 'offline', type: 'server' },
    { id: 4, name: 'Office Workstation 01', ip: '10.0.0.101', os: 'Windows 10', status: 'online', type: 'workstation' },
];

const Targets = () => {
    const [targets, setTargets] = useState(initialTargets);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleDelete = (id) => {
        setTargets(targets.filter(t => t.id !== id));
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-cyber-text">Target Management</h2>
                <button onClick={() => setShowModal(true)} className="cyber-btn flex items-center gap-2">
                    <Plus size={16} /> Add Target
                </button>
            </div>

            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-cyber-muted" size={18} />
                <input
                    type="text"
                    placeholder="Search targets by name, IP, or OS..."
                    className="cyber-input w-full pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Targets List */}
            <div className="grid gap-4">
                {targets.filter(t => t.name.toLowerCase().includes(searchTerm.toLowerCase()) || t.ip.includes(searchTerm)).map((target) => (
                    <div key={target.id} className="cyber-card flex items-center justify-between group hover:border-cyber-accent/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg ${target.status === 'online' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                {target.type === 'server' ? <Server size={24} /> : target.type === 'network' ? <Globe size={24} /> : <Laptop size={24} />}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{target.name}</h3>
                                <div className="flex items-center gap-4 text-sm text-cyber-muted">
                                    <span className="font-mono">{target.ip}</span>
                                    <span>•</span>
                                    <span>{target.os}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className={`px-2 py-1 rounded text-xs font-bold uppercase ${target.status === 'online' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                                }`}>
                                {target.status}
                            </div>
                            <button
                                onClick={() => handleDelete(target.id)}
                                className="p-2 text-cyber-muted hover:text-red-400 hover:bg-red-500/10 rounded transition-colors"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Target Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                    <div className="cyber-card w-full max-w-md m-4">
                        <h3 className="text-xl font-bold mb-4">Add New Target</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-cyber-muted mb-1">Target Name</label>
                                <input type="text" className="cyber-input w-full" placeholder="e.g. Web Server" />
                            </div>
                            <div>
                                <label className="block text-sm text-cyber-muted mb-1">IP Address / Hostname</label>
                                <input type="text" className="cyber-input w-full" placeholder="192.168.1.1" />
                            </div>
                            <div>
                                <label className="block text-sm text-cyber-muted mb-1">Operating System</label>
                                <select className="cyber-input w-full">
                                    <option>Linux</option>
                                    <option>Windows</option>
                                    <option>MacOS</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button onClick={() => setShowModal(false)} className="px-4 py-2 text-cyber-muted hover:text-white transition-colors">Cancel</button>
                                <button onClick={() => setShowModal(false)} className="cyber-btn">Add Target</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Targets;
