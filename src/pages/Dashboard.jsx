import React from 'react';
import ActivityFeed from '../components/ActivityFeed';
import NetworkGraph from '../components/NetworkGraph';
import { Shield, Target, AlertOctagon } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className="cyber-card flex items-center justify-between">
        <div>
            <h3 className="text-cyber-muted text-sm uppercase tracking-wider">{title}</h3>
            <p className={`text-3xl font-bold mt-1 ${color}`}>{value}</p>
        </div>
        <div className={`p-3 rounded-full bg-white/5 ${color}`}>
            <Icon size={24} />
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-cyber-text">Dashboard Overview</h2>
                <button className="cyber-btn">Start New Scan</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Active Scans" value="3" icon={Shield} color="text-cyber-accent" />
                <StatCard title="Targets Online" value="12" icon={Target} color="text-blue-400" />
                <StatCard title="Critical Vulns" value="8" icon={AlertOctagon} color="text-red-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[400px]">
                <div className="lg:col-span-2 h-full">
                    <NetworkGraph />
                </div>
                <div className="h-full">
                    <ActivityFeed />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
