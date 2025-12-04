import React from 'react';
import { Activity, AlertTriangle, CheckCircle, Search } from 'lucide-react';

const activities = [
    { id: 1, type: 'scan', message: 'Port scan completed on 192.168.1.15', time: '2 mins ago', status: 'success' },
    { id: 2, type: 'vuln', message: 'Critical vulnerability found: SQL Injection', time: '15 mins ago', status: 'danger' },
    { id: 3, type: 'target', message: 'New target added: web-server-01', time: '1 hour ago', status: 'info' },
    { id: 4, type: 'scan', message: 'Full system scan started on 10.0.0.5', time: '2 hours ago', status: 'info' },
];

const ActivityFeed = () => {
    return (
        <div className="cyber-card h-full">
            <h3 className="text-cyber-muted text-sm uppercase mb-4 flex items-center gap-2">
                <Activity size={16} /> Recent Activity
            </h3>
            <div className="space-y-4">
                {activities.map((act) => (
                    <div key={act.id} className="flex items-start gap-3 text-sm border-b border-white/5 pb-3 last:border-0">
                        <div className={`mt-1 ${act.status === 'success' ? 'text-green-400' :
                                act.status === 'danger' ? 'text-red-400' :
                                    'text-blue-400'
                            }`}>
                            {act.status === 'success' && <CheckCircle size={16} />}
                            {act.status === 'danger' && <AlertTriangle size={16} />}
                            {act.status === 'info' && <Search size={16} />}
                        </div>
                        <div>
                            <p className="text-cyber-text">{act.message}</p>
                            <p className="text-xs text-cyber-muted mt-1">{act.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityFeed;
