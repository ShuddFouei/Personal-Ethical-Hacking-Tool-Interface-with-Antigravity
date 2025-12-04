import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Target, Scan, FileText, Terminal, Settings, Shield } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, path, active }) => (
    <Link
        to={path}
        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${active
                ? 'bg-cyber-accent/10 text-cyber-accent border-r-2 border-cyber-accent'
                : 'text-cyber-muted hover:text-cyber-text hover:bg-white/5'
            }`}
    >
        <Icon size={20} />
        <span>{label}</span>
    </Link>
);

const Layout = () => {
    const location = useLocation();

    return (
        <div className="flex h-screen bg-cyber-dark text-cyber-text overflow-hidden font-mono">
            {/* Sidebar */}
            <aside className="w-64 bg-cyber-light border-r border-white/5 flex flex-col">
                <div className="p-6 flex items-center space-x-3 border-b border-white/5">
                    <Shield className="text-cyber-accent" size={32} />
                    <div>
                        <h1 className="text-xl font-bold tracking-wider">NEXUS</h1>
                        <p className="text-xs text-cyber-muted">Pentest Suite v1.0</p>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <SidebarItem icon={LayoutDashboard} label="Dashboard" path="/" active={location.pathname === '/'} />
                    <SidebarItem icon={Target} label="Targets" path="/targets" active={location.pathname === '/targets'} />
                    <SidebarItem icon={Scan} label="Scans" path="/scans" active={location.pathname === '/scans'} />
                    <SidebarItem icon={FileText} label="Reports" path="/reports" active={location.pathname === '/reports'} />
                    <SidebarItem icon={Terminal} label="Terminal" path="/terminal" active={location.pathname === '/terminal'} />
                </nav>

                <div className="p-4 border-t border-white/5">
                    <SidebarItem icon={Settings} label="Settings" path="/settings" active={location.pathname === '/settings'} />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-cyber-light/50 backdrop-blur border-b border-white/5 flex items-center justify-between px-6">
                    <div className="text-sm text-cyber-muted">
                        System Status: <span className="text-cyber-accent">ONLINE</span> | CPU: 12% | MEM: 4.2GB
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse"></div>
                        <span className="text-sm font-bold">root@nexus-core</span>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-auto p-6 relative">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
